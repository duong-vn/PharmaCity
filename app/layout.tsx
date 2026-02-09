import type { Metadata, Viewport } from "next";
import "./globals.css";
import { TimerProvider } from "@/contexts/TimerContext";

export const metadata: Metadata = {
  title: "Duocsinguyen5g - Giải pháp ngủ ngon tự nhiên",
  description:
    "GINCI10 + PureVital Omega-3 - Phục hồi tế bào thần kinh từ gốc, ngủ ngon tự nhiên không phụ thuộc thuốc.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="antialiased">
        <TimerProvider>{children}</TimerProvider>
      </body>
    </html>
  );
}
