"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import OrderModal from "./OrderModal";

export default function ShopButton({ text }: { text?: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-linear-to-r from-purple-500 to-blue-500 text-white px-10 py-5 rounded-full font-bold hover:opacity-90 transition-all shadow-xl shadow-purple-500/25 text-lg md:text-xl flex items-center justify-center gap-2"
      >
        <ShoppingCart className="w-6 h-6" />
        {text || "ĐẶT MUA NGAY"}
      </button>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
