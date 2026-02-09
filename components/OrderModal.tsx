"use client";

import { useState, useEffect } from "react";
import { X as CloseIcon } from "lucide-react";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  // Countdown timer - 30 minutes = 1800 seconds
  const [timeLeft, setTimeLeft] = useState(1800);

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

  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) return 0;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  // Format time
  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return { days, hours, minutes, secs };
  };

  const time = formatTime(timeLeft);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Order submitted:", formData);
    alert("Đặt hàng thành công! Chúng tôi sẽ liên hệ bạn sớm nhất.");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-gradient-to-b from-[#1a2a4a] to-[#0f1a2e] rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <CloseIcon className="w-6 h-6" />
        </button>

        <div className="p-6">
          {/* Header */}
          <h2 className="text-2xl md:text-3xl font-bold text-center text-yellow-400 mb-6">
            Khuyến mãi sắp kết thúc!
          </h2>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-2 mb-8">
            <div className="bg-white rounded-lg px-4 py-3 text-center min-w-[60px]">
              <div className="text-3xl font-black text-gray-900">
                {String(time.days).padStart(2, "0")}
              </div>
              <div className="text-xs text-gray-600 font-medium">Ngày</div>
            </div>
            <div className="bg-white rounded-lg px-4 py-3 text-center min-w-[60px]">
              <div className="text-3xl font-black text-gray-900">
                {String(time.hours).padStart(2, "0")}
              </div>
              <div className="text-xs text-gray-600 font-medium">Giờ</div>
            </div>
            <div className="bg-white rounded-lg px-4 py-3 text-center min-w-[60px]">
              <div className="text-3xl font-black text-gray-900">
                {String(time.minutes).padStart(2, "0")}
              </div>
              <div className="text-xs text-gray-600 font-medium">Phút</div>
            </div>
            <div className="bg-white rounded-lg px-4 py-3 text-center min-w-[60px]">
              <div className="text-3xl font-black text-gray-900">
                {String(time.secs).padStart(2, "0")}
              </div>
              <div className="text-xs text-gray-600 font-medium">Giây</div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Row 1: Họ tên + SĐT */}
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="hoTen"
                placeholder="Họ và tên"
                value={formData.hoTen}
                onChange={handleChange}
                required
                className="bg-white rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="tel"
                name="soDienThoai"
                placeholder="Số điện thoại"
                value={formData.soDienThoai}
                onChange={handleChange}
                required
                className="bg-white rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Địa chỉ */}
            <input
              type="text"
              name="diaChi"
              placeholder="Địa chỉ"
              value={formData.diaChi}
              onChange={handleChange}
              required
              className="w-full bg-white rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            {/* Row 3: Tỉnh/Quận/Phường */}
            <div className="grid grid-cols-3 gap-3">
              <select
                name="tinh"
                value={formData.tinh}
                onChange={handleChange}
                required
                className="bg-white rounded-lg px-3 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
              >
                <option value="">Tỉnh/Thành ph</option>
                <option value="hanoi">Hà Nội</option>
                <option value="hcm">TP. Hồ Chí Minh</option>
                <option value="danang">Đà Nẵng</option>
                <option value="haiphong">Hải Phòng</option>
                <option value="cantho">Cần Thơ</option>
                <option value="other">Tỉnh khác</option>
              </select>
              <select
                name="quan"
                value={formData.quan}
                onChange={handleChange}
                required
                className="bg-white rounded-lg px-3 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
              >
                <option value="">Quận/Huyện</option>
                <option value="q1">Quận 1</option>
                <option value="q2">Quận 2</option>
                <option value="q3">Quận 3</option>
                <option value="other">Khác</option>
              </select>
              <select
                name="phuong"
                value={formData.phuong}
                onChange={handleChange}
                required
                className="bg-white rounded-lg px-3 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
              >
                <option value="">Phường/Xã</option>
                <option value="p1">Phường 1</option>
                <option value="p2">Phường 2</option>
                <option value="p3">Phường 3</option>
                <option value="other">Khác</option>
              </select>
            </div>

            {/* Liệu trình */}
            <select
              name="lieuTrinh"
              value={formData.lieuTrinh}
              onChange={handleChange}
              required
              className="w-full bg-white rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="">Chọn liệu trình</option>
              <option value="1thang">Liệu trình 1 tháng - 890.000đ</option>
              <option value="2thang">Liệu trình 2 tháng - 1.680.000đ (Tiết kiệm 100K)</option>
              <option value="3thang">Liệu trình 3 tháng - 2.370.000đ (Tiết kiệm 300K)</option>
            </select>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-full font-bold text-xl hover:opacity-90 transition-all shadow-lg shadow-orange-500/30"
            >
              HOÀN TẤT ĐẶT HÀNG
            </button>

            {/* Note */}
            <p className="text-center text-yellow-400 text-sm italic">
              Lời khuyên: Sử dụng đều đặn từ 2 tháng
              <br />
              để cảm nhận hiệu quả rõ rệt
            </p>
          </form>

          {/* Footer note */}
          <div className="mt-6 text-center">
            <p className="text-white font-bold text-lg">
              KHÔNG PHẢI LÀ THUỐC NGỦ
            </p>
            <p className="text-gray-400 text-sm">
              An toàn - Không gây nghiện - Không tác dụng phụ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
