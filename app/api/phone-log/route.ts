import { NextResponse } from "next/server";
import { google } from "googleapis";

export const runtime = "nodejs";

function getPrivateKey() {
  const k = process.env.GOOGLE_PRIVATE_KEY;

  if (!k) throw new Error("Missing GOOGLE_PRIVATE_KEY");
  return k.replace(/\\n/g, "\n");
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  // Bắt đầu bằng 0, đúng 10 số
  return /^0\d{9}$/.test(digits);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const phone = body.phone || "";

    // Validate phone
    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { ok: false, message: "Invalid phone number" },
        { status: 400 },
      );
    }

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: getPrivateKey(),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID!;
    const tab = process.env.GOOGLE_SHEET_TAB || "PhoneLogs";

    // Lưu tất cả thông tin form, ô trống nếu không có dữ liệu
    const values = [
      [
        "=NOW()", // A: Thời gian,
        body.hoTen || "", // B: Họ tên
        `'${phone}`, // C: Số điện thoại (text to keep leading zero)
        body.diaChi || "", // D: Địa chỉ chi tiết
        body.tinh || "", // E: Tỉnh/Thành phố
        body.quan || "", // F: Quận/Huyện
        body.phuong || "", // G: Phường/Xã
        body.lieuTrinh || "", // H: Liệu trình
      ],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${tab}!A1`,
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Server error";
    return NextResponse.json({ ok: false, message }, { status: 500 });
  }
}
