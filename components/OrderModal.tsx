"use client";

import { useEffect, useMemo, useState, useRef, useCallback } from "react";
import {
  X as CloseIcon,
  Sparkles,
  Heart,
  Gift,
  Clock,
  MapPin,
  User,
  Phone as PhoneIcon,
  Package,
} from "lucide-react";
import { useTimer } from "@/contexts/TimerContext";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Province = { code: number; name: string };
type District = { code: number; name: string };
type Ward = { code: number; name: string };

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const { formattedTime: time } = useTimer();

  const [formData, setFormData] = useState({
    hoTen: "",
    soDienThoai: "",
    diaChi: "",
    // lưu CODE để fetch cho chuẩn
    tinh: "",
    quan: "",
    phuong: "",
    lieuTrinh: "",
  });

  // options
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [wards, setWards] = useState<Ward[]>([]);
  const [loadingProvince, setLoadingProvince] = useState(false);
  const [loadingDistrict, setLoadingDistrict] = useState(false);
  const [loadingWard, setLoadingWard] = useState(false);

  const provinceCode = formData.tinh ? Number(formData.tinh) : null;
  const districtCode = formData.quan ? Number(formData.quan) : null;

  // Track if phone has been logged to avoid duplicate logs
  const phoneLoggedRef = useRef<string | null>(null);

  const isValidPhone = useCallback((phone: string): boolean => {
    const trimmed = phone.trim();
    if (!trimmed) return false;
    if (!/^(\+)?[\d\s().-]+$/.test(trimmed)) return false;
    const digits = trimmed.replace(/\D/g, "");
    return digits.length >= 8 && digits.length <= 15;
  }, []);

  const selectedNames = useMemo(() => {
    const p = provinces.find((x) => x.code === provinceCode)?.name ?? "";
    const d = districts.find((x) => x.code === districtCode)?.name ?? "";
    const w = wards.find((x) => x.code === Number(formData.phuong))?.name ?? "";
    return { p, d, w };
  }, [
    provinces,
    districts,
    wards,
    provinceCode,
    districtCode,
    formData.phuong,
  ]);

  // Log phone to spreadsheet when valid
  const logPhoneToSheet = useCallback(
    async (phone: string) => {
      // Skip if already logged this phone
      if (phoneLoggedRef.current === phone) return;
      const payload = {
        phone,
        hoTen: formData.hoTen,
        diaChi: formData.diaChi,
        tinh: selectedNames.p,
        quan: selectedNames.d,
        phuong: selectedNames.w,
        lieuTrinh: formData.lieuTrinh,
      };
      console.log("Logging phone to sheet:", payload);
      try {
        const res = await fetch("/api/phone-log", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (res.ok) {
          phoneLoggedRef.current = phone;
        }
      } catch (err) {
        console.error("Failed to log phone:", err);
      }
    },
    [formData.hoTen, formData.diaChi, formData.lieuTrinh, selectedNames],
  );

  // Check and log phone when it becomes valid
  useEffect(() => {
    const phone = formData.soDienThoai;
    if (phone && isValidPhone(phone)) {
      logPhoneToSheet(phone);
    }
  }, [formData.soDienThoai, isValidPhone, logPhoneToSheet]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    // reset đúng cascade ngay tại đây cho “mượt”
    if (name === "tinh") {
      setFormData((prev) => ({
        ...prev,
        tinh: value,
        quan: "",
        phuong: "",
      }));
      return;
    }
    if (name === "quan") {
      setFormData((prev) => ({
        ...prev,
        quan: value,
        phuong: "",
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Nếu bạn muốn log ra NAME thay vì CODE:
    const payload = {
      phone: formData.soDienThoai,
      hoTen: formData.hoTen,
      diaChi: formData.diaChi,
      tinh: selectedNames.p,
      quan: selectedNames.d,
      phuong: selectedNames.w,
      lieuTrinh: formData.lieuTrinh,
    };
    console.log("Logging phone to sheet:", payload);
    try {
      const res = await fetch("/api/phone-log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("Failed to log phone:", err);
    }

    alert("🎉 Đặt hàng thành công! Chúng tôi sẽ liên hệ bạn sớm nhất nha! 💜");
    onClose();
  };

  // lock scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Load provinces when modal opens (đỡ gọi API khi chưa mở)
  useEffect(() => {
    if (!isOpen) return;

    let cancelled = false;
    (async () => {
      try {
        setLoadingProvince(true);
        const res = await fetch("https://provinces.open-api.vn/api/p/");
        const data: Province[] = await res.json();
        if (!cancelled) setProvinces(data);
      } catch (err) {
        console.error(err);
      } finally {
        if (!cancelled) setLoadingProvince(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [isOpen]);

  // Load districts when province changes
  useEffect(() => {
    // reset lists dưới
    setDistricts([]);
    setWards([]);
    if (!provinceCode) return;

    let cancelled = false;
    (async () => {
      try {
        setLoadingDistrict(true);
        const res = await fetch(
          `https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`,
        );
        const data: { districts: District[] } = await res.json();
        if (!cancelled) setDistricts(data.districts ?? []);
      } catch (err) {
        console.error(err);
      } finally {
        if (!cancelled) setLoadingDistrict(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [provinceCode]);

  // Load wards when district changes
  useEffect(() => {
    setWards([]);
    if (!districtCode) return;

    let cancelled = false;
    (async () => {
      try {
        setLoadingWard(true);
        const res = await fetch(
          `https://provinces.open-api.vn/api/d/${districtCode}?depth=2`,
        );
        const data: { wards: Ward[] } = await res.json();
        if (!cancelled) setWards(data.wards ?? []);
      } catch (err) {
        console.error(err);
      } finally {
        if (!cancelled) setLoadingWard(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [districtCode]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn overflow-hidden">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Floating decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-purple-400/30 animate-pulse">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute top-20 right-20 text-pink-400/30 animate-bounce">
          <Heart className="w-6 h-6" />
        </div>
        <div className="absolute bottom-20 left-20 text-cyan-400/30 animate-pulse">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="absolute bottom-10 right-10 text-purple-400/30 animate-bounce">
          <Heart className="w-8 h-8" />
        </div>
      </div>

      <div className="relative w-full max-w-md max-h-[90vh] overflow-y-hidden animate-slideUp">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-3xl blur-xl" />

        <div className="relative bg-gradient-to-b from-slate-900 via-purple-950/50 to-slate-900 rounded-3xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all z-10 hover:rotate-90 duration-300"
          >
            <CloseIcon className="w-4 h-4" />
          </button>

          <div className="p-6 pt-8">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4 shadow-lg shadow-purple-500/30 animate-pulse">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                ✨ Ưu đãi đặc biệt! ✨
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Nhanh tay kẻo lỡ nha bạn ơi 💕
              </p>
            </div>

            {/* Countdown */}
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-4 mb-6 border border-purple-500/20">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-pink-400" />
                <span className="text-pink-400 font-medium text-sm">
                  Khuyến mãi kết thúc sau
                </span>
              </div>
              <div className="flex justify-center gap-2">
                {[
                  { value: time.days, label: "Ngày" },
                  { value: time.hours, label: "Giờ" },
                  { value: time.minutes, label: "Phút" },
                  { value: time.secs, label: "Giây" },
                ].map((item, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity" />
                    <div className="relative bg-white rounded-xl px-3 py-2 text-center min-w-[55px]">
                      <div className="text-2xl font-black bg-gradient-to-b from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {String(item.value).padStart(2, "0")}
                      </div>
                      <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">
                        {item.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative group">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="hoTen"
                    placeholder="Họ và tên"
                    value={formData.hoTen}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-purple-500/30 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:bg-white/15 transition-all text-sm"
                  />
                </div>
                <div className="relative group">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400">
                    <PhoneIcon className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    name="soDienThoai"
                    placeholder="Số điện thoại"
                    value={formData.soDienThoai}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-purple-500/30 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:bg-white/15 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  name="diaChi"
                  placeholder="Địa chỉ chi tiết"
                  value={formData.diaChi}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-purple-500/30 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:bg-white/15 transition-all text-sm"
                />
              </div>

              {/* 3 selects */}
              <div className="grid grid-cols-3 gap-2">
                <select
                  name="tinh"
                  value={formData.tinh}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border border-purple-500/30 rounded-xl px-3 py-3 text-white focus:outline-none focus:border-pink-500 text-xs appearance-none cursor-pointer disabled:opacity-50"
                >
                  <option value="" className="bg-slate-900">
                    {loadingProvince ? "Đang tải..." : "Tỉnh/TP"}
                  </option>
                  {provinces.map((p) => (
                    <option
                      key={p.code}
                      value={p.code}
                      className="bg-slate-900"
                    >
                      {p.name}
                    </option>
                  ))}
                </select>

                <select
                  name="quan"
                  value={formData.quan}
                  onChange={handleChange}
                  required
                  disabled={!formData.tinh || loadingDistrict}
                  className="bg-white/10 border border-purple-500/30 rounded-xl px-3 py-3 text-white focus:outline-none focus:border-pink-500 text-xs appearance-none cursor-pointer disabled:opacity-50"
                >
                  <option value="" className="bg-slate-900">
                    {loadingDistrict ? "Đang tải..." : "Quận/Huyện"}
                  </option>
                  {districts.map((d) => (
                    <option
                      key={d.code}
                      value={d.code}
                      className="bg-slate-900"
                    >
                      {d.name}
                    </option>
                  ))}
                </select>

                <select
                  name="phuong"
                  value={formData.phuong}
                  onChange={handleChange}
                  required
                  disabled={!formData.quan || loadingWard}
                  className="bg-white/10 border border-purple-500/30 rounded-xl px-3 py-3 text-white focus:outline-none focus:border-pink-500 text-xs appearance-none cursor-pointer disabled:opacity-50"
                >
                  <option value="" className="bg-slate-900">
                    {loadingWard ? "Đang tải..." : "Phường/Xã"}
                  </option>
                  {wards.map((w) => (
                    <option
                      key={w.code}
                      value={w.code}
                      className="bg-slate-900"
                    >
                      {w.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Liệu trình */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400">
                  <Package className="w-4 h-4" />
                </div>
                <select
                  name="lieuTrinh"
                  value={formData.lieuTrinh}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-purple-500/30 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-pink-500 appearance-none cursor-pointer text-sm"
                >
                  <option value="" className="bg-slate-900">
                    💊 Chọn liệu trình
                  </option>
                  <option value="1thang" className="bg-slate-900">
                    1 tháng (Mua 3 tặng 1) - 2.370.000đ 🎁 +790K quà
                  </option>
                  <option value="2thang" className="bg-slate-900">
                    3 tháng (Mua 5 tặng 2) - 3.950.000đ 🔥 +1.580K quà
                  </option>
                </select>
              </div>

              <div className="pt-2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />
                  <button
                    type="submit"
                    className="relative w-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white py-4 rounded-full font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg"
                  >
                    🛒 HOÀN TẤT ĐẶT HÀNG
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-3 text-center">
                <p className="text-amber-300 text-sm">
                  💡 <span className="font-medium">Mẹo nhỏ:</span> Dùng đều 2
                  tháng để thấy hiệu quả rõ rệt nhé!
                </p>
              </div>
            </form>

            <div className="mt-6 text-center space-y-2">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2">
                <span className="text-emerald-400 font-bold text-sm">
                  🌿 100% TỰ NHIÊN - AN TOÀN
                </span>
              </div>
              <p className="text-gray-500 text-xs">
                Không phải thuốc ngủ • Không gây nghiện • Không tác dụng phụ
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
