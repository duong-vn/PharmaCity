"use client";

import { useState } from "react";
import { ShoppingBag, X, ChevronUp } from "lucide-react";
import OrderModal from "./OrderModal";

export default function FloatingBuyButton() {
  const [isVisible, setIsVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Floating Buy Button */}
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
          {/* Hide button */}
          <button
            onClick={() => setIsVisible(false)}
            className="w-8 h-8 bg-zinc-800/80 hover:bg-zinc-700 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all border border-zinc-700/50 hover:border-zinc-600"
            title="Ẩn nút"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Main floating button with bounce animation */}
          <div className="animate-bounce-gentle">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black font-bold text-lg rounded-full shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all hover:scale-105"
            >
              <ShoppingBag className="w-5 h-5" />
              Mua ngay
            </button>
          </div>
        </div>
      )}

      {/* Show button (when hidden) */}
      {!isVisible && (
        <button
          onClick={() => setIsVisible(true)}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 rounded-full flex items-center justify-center text-black shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all hover:scale-110 animate-pulse-gentle"
          title="Hiện nút mua hàng"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}

      {/* Order Modal */}
      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
