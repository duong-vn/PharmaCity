"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const feedbackImages = [
  "/feedback/1975343736167404856.jpg",
  "/feedback/2307605998749385670.jpg",
  "/feedback/2372655598774523501.jpg",
  "/feedback/2756657241216802332.jpg",
  "/feedback/2840826382452204281.jpg",
  "/feedback/3499623204009517851.jpg",
  "/feedback/3882317318536695149.jpg",
  "/feedback/4e9422b4edaa63f43abb.jpg",
  "/feedback/576302835339901791.jpg",
  "/feedback/773607606585240862.jpg",
  "/feedback/82cac995068b88d5d19a.jpg",
  "/feedback/e06f97395827d6798f36.jpg",
];

export default function FeedbackSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Touch/Swipe state
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % feedbackImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + feedbackImages.length) % feedbackImages.length,
    );
  }, []);

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    isDragging.current = true;
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; // minimum swipe distance

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextSlide(); // Swipe left = next
      } else {
        prevSlide(); // Swipe right = prev
      }
    }

    // Resume autoplay after a delay
    setTimeout(() => setIsAutoPlaying(true), 2000);
  };

  // Handle mouse drag for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
    isDragging.current = true;
    setIsAutoPlaying(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    touchEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      isDragging.current = false;
      setTimeout(() => setIsAutoPlaying(true), 3000);
    }
  };

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-black via-purple-950/10 to-zinc-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-full px-6 py-2 mb-4">
            <Quote className="w-4 h-4 text-pink-400" />
            <span className="text-pink-400 font-medium text-sm">
              Khách hàng nói gì về chúng tôi
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            PHẢN HỒI THỰC TẾ
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>
          {/* Swipe hint for mobile */}
          <p className="text-gray-500 text-sm md:hidden mt-2">
            👆 Vuốt trái/phải để xem thêm
          </p>
        </div>

        {/* Slider */}
        <div
          className="relative max-w-2xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => {
            handleMouseLeave();
            setIsAutoPlaying(true);
          }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>

          {/* Main slider container */}
          <div
            className="relative bg-gradient-to-br from-zinc-900/90 to-black/90 rounded-3xl border border-purple-500/20 overflow-hidden backdrop-blur-sm cursor-grab active:cursor-grabbing select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            {/* Image container - taller aspect ratio to read text better */}
            <div className="relative aspect-[3/4] md:aspect-[4/5] w-full overflow-hidden">
              {feedbackImages.map((img, index) => (
                <div
                  key={img}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    index === currentIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Phản hồi khách hàng ${index + 1}`}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 672px"
                    priority={index === 0}
                    draggable={false}
                  />
                </div>
              ))}
            </div>

            {/* Navigation arrows - hidden on mobile, visible on md+ */}
            <button
              onClick={prevSlide}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-purple-500/50 border border-white/20 rounded-full items-center justify-center text-white transition-all hover:scale-110 backdrop-blur-sm"
              aria-label="Previous feedback"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-purple-500/50 border border-white/20 rounded-full items-center justify-center text-white transition-all hover:scale-110 backdrop-blur-sm"
              aria-label="Next feedback"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
              <span className="text-white font-medium">
                {currentIndex + 1} / {feedbackImages.length}
              </span>
            </div>
          </div>

          {/* Dots navigation */}
          <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
            {feedbackImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-3 bg-gradient-to-r from-purple-500 to-pink-500"
                    : "w-3 h-3 bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2">
            <span className="text-emerald-400 text-sm font-medium">
              ✓ Phản hồi thực 100%
            </span>
          </div>
          <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2">
            <span className="text-blue-400 text-sm font-medium">
              ✓ Không chỉnh sửa
            </span>
          </div>
          <div className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2">
            <span className="text-purple-400 text-sm font-medium">
              ✓ Từ khách hàng thực
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
