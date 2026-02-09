"use client";

import { useEffect, useState } from "react";
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

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  // Use global timer context
  const { formattedTime: time, isInitialized } = useTimer();

  // Form state
  const [formData, setFormData] = useState({
    hoTen: "",
    soDienThoai: "",
    diaChi: "",
    tinh: "",
    quan: "",
    phuong: "",
    lieuTrinh: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order submitted:", formData);
    alert("🎉 Đặt hàng thành công! Chúng tôi sẽ liên hệ bạn sớm nhất nha! 💜");
    onClose();
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn overflow-hidden">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      ></div>

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

      {/* Modal */}
      <div className="relative w-full max-w-md max-h-[90vh] overflow-y-hidden animate-slideUp">
        {/* Glow effect behind modal */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-3xl blur-xl"></div>

        <div className="relative bg-gradient-to-b from-slate-900 via-purple-950/50 to-slate-900 rounded-3xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 overflow-hidden">
          {/* Top decorative bar */}
          <div className="h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"></div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all z-10 hover:rotate-90 duration-300"
          >
            <CloseIcon className="w-4 h-4" />
          </button>

          <div className="p-6 pt-8">
            {/* Header with icon */}
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

            {/* Countdown Timer */}
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
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
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
              {/* Row 1: Họ tên + SĐT */}
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

              {/* Địa chỉ */}
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

              {/* Row 3: Tỉnh/Quận/Phường */}
              <div className="grid grid-cols-3 gap-2">
                <select
                  name="tinh"
                  value={formData.tinh}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border border-purple-500/30 rounded-xl px-3 py-3 text-white focus:outline-none focus:border-pink-500 text-xs appearance-none cursor-pointer"
                >
                  <option value="" className="bg-slate-900">
                    Tỉnh/TP
                  </option>
                  <option value="hanoi" className="bg-slate-900">
                    Hà Nội
                  </option>
                  <option value="hcm" className="bg-slate-900">
                    TP. HCM
                  </option>
                  <option value="danang" className="bg-slate-900">
                    Đà Nẵng
                  </option>
                  <option value="haiphong" className="bg-slate-900">
                    Hải Phòng
                  </option>
                  <option value="cantho" className="bg-slate-900">
                    Cần Thơ
                  </option>
                  <option value="other" className="bg-slate-900">
                    Khác
                  </option>
                </select>
                <select
                  name="quan"
                  value={formData.quan}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border border-purple-500/30 rounded-xl px-3 py-3 text-white focus:outline-none focus:border-pink-500 text-xs appearance-none cursor-pointer"
                >
                  <option value="" className="bg-slate-900">
                    Quận/Huyện
                  </option>
                  <option value="q1" className="bg-slate-900">
                    Quận 1
                  </option>
                  <option value="q2" className="bg-slate-900">
                    Quận 2
                  </option>
                  <option value="q3" className="bg-slate-900">
                    Quận 3
                  </option>
                  <option value="other" className="bg-slate-900">
                    Khác
                  </option>
                </select>
                <select
                  name="phuong"
                  value={formData.phuong}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border border-purple-500/30 rounded-xl px-3 py-3 text-white focus:outline-none focus:border-pink-500 text-xs appearance-none cursor-pointer"
                >
                  <option value="" className="bg-slate-900">
                    Phường/Xã
                  </option>
                  <option value="p1" className="bg-slate-900">
                    Phường 1
                  </option>
                  <option value="p2" className="bg-slate-900">
                    Phường 2
                  </option>
                  <option value="p3" className="bg-slate-900">
                    Phường 3
                  </option>
                  <option value="other" className="bg-slate-900">
                    Khác
                  </option>
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
                    1 tháng - 890.000đ
                  </option>
                  <option value="2thang" className="bg-slate-900">
                    2 tháng - 1.680.000đ 🔥 -100K
                  </option>
                  <option value="3thang" className="bg-slate-900">
                    3 tháng - 2.370.000đ 💎 -300K
                  </option>
                </select>
              </div>

              {/* Submit button */}
              <div className="pt-2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                  <button
                    type="submit"
                    className="relative w-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white py-4 rounded-full font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg"
                  >
                    🛒 HOÀN TẤT ĐẶT HÀNG
                  </button>
                </div>
              </div>

              {/* Note */}
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-3 text-center">
                <p className="text-amber-300 text-sm">
                  💡 <span className="font-medium">Mẹo nhỏ:</span> Dùng đều 2
                  tháng để thấy hiệu quả rõ rệt nhé!
                </p>
              </div>
            </form>

            {/* Footer note */}
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
