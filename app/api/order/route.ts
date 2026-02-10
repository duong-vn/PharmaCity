import { NextResponse } from "next/server";
import { google } from "googleapis";

export const runtime = "nodejs";

function getPrivateKey() {
  const k = process.env.GOOGLE_PRIVATE_KEY;
  if (!k) throw new Error("Missing GOOGLE_PRIVATE_KEY");
  return k.replace(/\\n/g, "\n");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: getPrivateKey(),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID!;
    const tab = process.env.GOOGLE_SHEET_TAB || "Orders";

    // bạn có thể đổi cột theo ý
    const values = [
      [
        "=NOW()",
        ,
        body.customerName || "",
        body.phone || "",
        body.product || "",
      ],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${tab}!A:F`,
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, message: e?.message || "Server error" },
      { status: 500 },
    );
  }
}
