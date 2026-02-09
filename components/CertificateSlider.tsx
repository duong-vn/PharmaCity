"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Award,
  Store,
  ShieldCheck,
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const certificateImages = [
  "/certificate/2244003917588780474.jpg",
  "/certificate/28045ec290dc1e8247cd.jpg",
  "/certificate/298371086174237738.jpg",
  "/certificate/3149147481078963867.jpg",
  "/certificate/3547629652782950056.jpg",
  "/certificate/4580234835838343149.jpg",
  "/certificate/5781b0b47eaaf0f4a9bb.jpg",
  "/certificate/806167619200356209.jpg",
];

const storeImages = ["/store/146649185320560081.jpg"];

export default function CertificateSlider() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % certificateImages.length);
  };

  const prevImage = () => {
    setLightboxIndex(
      (prev) =>
        (prev - 1 + certificateImages.length) % certificateImages.length,
    );
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-zinc-900 via-black to-zinc-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 rounded-full px-6 py-2 mb-4">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 font-medium text-sm">
              Chứng nhận & Uy tín
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent mb-4">
            GIẤY CHỨNG NHẬN
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sản phẩm được kiểm định và chứng nhận bởi các cơ quan có thẩm quyền
          </p>
          <p className="text-gray-500 text-sm mt-2">
            👆 Nhấn vào ảnh để xem chi tiết
          </p>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
          {certificateImages.map((img, index) => (
            <button
              key={img}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden border-2 border-amber-500/20 hover:border-amber-500/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/20"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-500/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>

              <Image
                src={img}
                alt={`Chứng nhận ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />

              {/* Zoom icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Number badge */}
              <div className="absolute top-2 left-2 bg-amber-500 text-black text-xs font-bold px-2 py-1 rounded-full z-20">
                {index + 1}
              </div>
            </button>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium">
              Đã được Bộ Y Tế cấp phép
            </span>
          </div>
          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">
              Tiêu chuẩn GMP quốc tế
            </span>
          </div>
          <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">
              Nguồn gốc rõ ràng
            </span>
          </div>
        </div>

        {/* Store Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full px-6 py-2 mb-4">
              <Store className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 font-medium text-sm">
                Cửa hàng của chúng tôi
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              HÌNH ẢNH CỬA HÀNG
            </h3>
            <p className="text-gray-400">
              Địa chỉ: 198 Thái Thịnh, Đống Đa, Hà Nội
            </p>
          </div>

          {/* Store images grid */}
          <div className="grid grid-cols-1 gap-6">
            {storeImages.map((img, index) => (
              <div key={img} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20">
                  <Image
                    src={img}
                    alt={`Cửa hàng ${index + 1}`}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  {/* Store info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
                      <p className="text-white font-bold text-lg">
                        Duocsinguyen5g - Chi nhánh Thái Thịnh
                      </p>
                      <p className="text-gray-300 text-sm">
                        📍 198 Thái Thịnh, Đống Đa, Hà Nội | ☎️ 0389.933.933
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <span className="text-white font-medium">
              {lightboxIndex + 1} / {certificateImages.length}
            </span>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main image */}
          <div
            className="relative w-full h-full max-w-5xl max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={certificateImages[lightboxIndex]}
              alt={`Chứng nhận ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Thumbnail strip */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto p-2 bg-black/60 backdrop-blur-sm rounded-xl">
            {certificateImages.map((img, index) => (
              <button
                key={img}
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(index);
                }}
                className={`relative w-16 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                  index === lightboxIndex
                    ? "border-amber-500 scale-105"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
