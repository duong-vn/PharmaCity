import Image from "next/image";
import {
  Moon,
  ShieldCheck,
  Brain,
  Zap,
  X,
  Check,
  Lock,
  Shield,
  RefreshCw,
  Fish,
  BedDouble,
  Frown,
  Briefcase,
  User,
  ShoppingCart,
  Phone,
  Truck,
  CreditCard,
  RotateCcw,
  Lightbulb,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950 text-white">
      {/* Hero Section - Mobile First */}
      <section className="relative overflow-hidden">
        {/* Gradient overlay aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-purple-500/10 via-transparent to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-base md:text-lg font-bold px-6 py-2 rounded-full mb-6">
              <Moon className="w-5 h-5" />
              GIẢI PHÁP NGỦ NGON TỰ NHIÊN
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              GINCI10 + PureVital Omega-3
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed font-medium">
              Phục hồi tế bào thần kinh từ gốc rễ
              <br />
              Ngủ ngon tự nhiên - Không phụ thuộc thuốc
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all shadow-lg shadow-purple-500/25 text-lg flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                ĐẶT MUA NGAY
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all text-lg flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                TƯ VẤN MIỄN PHÍ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lợi ích chính - NGỦ NGON */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            TẠI SAO BẠN NÊN CHỌN SẢN PHẨM NÀY?
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg md:text-xl max-w-2xl mx-auto">
            Giải pháp khác biệt hoàn toàn với thuốc ngủ thông thường
          </p>

          {/* Benefit 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <span className="text-6xl md:text-7xl font-black bg-gradient-to-r from-purple-500/30 to-transparent bg-clip-text text-transparent">
                01
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 -mt-4 flex items-center gap-3">
                <Moon className="w-8 h-8 text-purple-400" />
                NGỦ NGON TỰ NHIÊN
              </h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
                Không gây lệ thuộc như thuốc ngủ. EPA tổng hợp{" "}
                <strong className="text-white">Serotonin</strong> (hormone hạnh
                phúc) chuyển hóa thành{" "}
                <strong className="text-white">Melatonin</strong> (hormone giấc
                ngủ tự nhiên).
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Giúp não khỏe, bạn sẽ ngủ tự nhiên thay vì ép ngủ bằng thuốc.
              </p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                <Image
                  src="/hon-dau-ca.jpg"
                  alt="Ngủ ngon tự nhiên"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl relative z-10 border border-white/10"
                />
              </div>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                <Image
                  src="/co-che.jpg"
                  alt="Dập tắt lo âu"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl relative z-10 border border-white/10"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-500/30 to-transparent bg-clip-text text-transparent">
                02
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 -mt-4 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-blue-400" />
                DẬP TẮT LO ÂU NGAY LẬP TỨC
              </h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">GABA (22.1mg)</strong> hoạt động
                như công tắc thông minh, gửi tín hiệu "Ngừng bắn" tới các nơ-ron
                đang bị kích thích quá độ.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Giúp dập tắt cơn bồn chồn, lo âu, suy nghĩ miên man ngay lập tức
                để đi vào giấc ngủ êm ái.
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <span className="text-6xl md:text-7xl font-black bg-gradient-to-r from-emerald-500/30 to-transparent bg-clip-text text-transparent">
                03
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 -mt-4 flex items-center gap-3">
                <Brain className="w-8 h-8 text-emerald-400" />
                PHỤC HỒI TẾ BÀO NÃO TỪ GỐC
              </h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">Citicoline</strong> bảo vệ tế bào
                não khỏi độc tố thần kinh Glutamate sinh ra do stress và mất
                ngủ.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Chống viêm, chống oxy hóa, bảo tồn năng lượng ATP cho tế bào
                thần kinh - giữ não bộ luôn khỏe mạnh, minh mẫn.
              </p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                <Image
                  src="/suc-manh.jpg"
                  alt="Phục hồi tế bào não"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl relative z-10 border border-white/10"
                />
              </div>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                <Image
                  src="/uu-diem.jpg"
                  alt="Tỉnh táo sau khi ngủ"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl relative z-10 border border-white/10"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-6xl md:text-7xl font-black bg-gradient-to-r from-amber-500/30 to-transparent bg-clip-text text-transparent">
                04
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 -mt-4 flex items-center gap-3">
                <Zap className="w-8 h-8 text-amber-400" />
                TỈNH TÁO SAU KHI NGỦ DẬY
              </h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">Astaxanthin</strong> - chất chống
                oxy hóa mạnh hơn Vitamin E 6000 lần, bảo vệ tế bào thần kinh,
                phục hồi năng lượng.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Không gây mệt mỏi, choáng váng, lờ đờ như các loại thuốc ức chế
                thần kinh khác.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Điểm khác biệt */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-black via-zinc-900/50 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            ĐIỂM KHÁC BIỆT CỐT LÕI
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg md:text-xl max-w-3xl mx-auto">
            Tại sao các sản phẩm Omega-3 khác không hiệu quả với giấc ngủ?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-red-950/50 to-zinc-900/50 border border-red-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                <X className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-red-400">
                Omega-3 thông thường
              </h3>
              <ul className="space-y-3 text-base md:text-lg text-gray-300">
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  Chỉ chuyển hóa vào tim, mạch máu và gan
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  Không có tác dụng cho hệ thần kinh và não bộ
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  Hàm lượng thấp, không cải thiện mất ngủ
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  Không kiểm định, dễ nhiễm chì, thủy ngân
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-emerald-950/50 to-zinc-900/50 border border-emerald-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-emerald-400">
                PureVital Omega-3
              </h3>
              <ul className="space-y-3 text-base md:text-lg text-gray-200">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  Dạng Phospholipid - giống cấu trúc màng tế bào não
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  Hấp thu cao gấp 4 lần, đi thẳng vào não bộ
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  Có DPA - "pin dự phòng" tự động bổ sung DHA/EPA
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  Dầu cá Peru + Dầu nhuyễn thể Mỹ, độ tinh khiết cao
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cơ chế tác động kép */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            CƠ CHẾ TÁC ĐỘNG KÉP
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg md:text-xl">
            Vừa tấn công (lo âu) - Vừa phòng thủ (bảo vệ não)
          </p>

          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                <Image
                  src="/thanh-phan.jpg"
                  alt="Cơ chế tác động"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl relative z-10 border border-white/10"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-950/50 to-zinc-900/50 border border-purple-500/20 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="text-xl md:text-2xl font-bold mb-3 flex items-center gap-3">
                    <Lock className="w-6 h-6 text-purple-400" />
                    Khóa van lo âu (GABA Switch)
                  </h4>
                  <p className="text-base md:text-lg text-gray-300">
                    GABA gắn trực tiếp vào thụ thể thần kinh, gửi tín hiệu
                    "Ngừng bắn" tới các nơ-ron đang bị kích thích. Giúp đạt
                    trạng thái thư thái ngay lập tức.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-blue-950/50 to-zinc-900/50 border border-blue-500/20 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="text-xl md:text-2xl font-bold mb-3 flex items-center gap-3">
                    <Shield className="w-6 h-6 text-blue-400" />
                    Bảo vệ & Phục hồi não
                  </h4>
                  <p className="text-base md:text-lg text-gray-300">
                    Citicoline ức chế Glutamate (độc tố thần kinh), chống viêm,
                    chống oxy hóa, bảo tồn năng lượng ATP cho tế bào não.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-emerald-950/50 to-zinc-900/50 border border-emerald-500/20 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="text-xl md:text-2xl font-bold mb-3 flex items-center gap-3">
                    <RefreshCw className="w-6 h-6 text-emerald-400" />
                    Tăng tuần hoàn não
                  </h4>
                  <p className="text-base md:text-lg text-gray-300">
                    Ginkgo Biloba + Magnesi + CoQ10 tăng lưu lượng máu não, làm
                    dịu thần kinh, thư giãn cơ bắp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thành phần chi tiết */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-zinc-900 via-black to-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            THÀNH PHẦN VÀNG
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg md:text-xl">
            Công thức phối hợp khoa học từ các chuyên gia
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* PureVital */}
            <div className="bg-gradient-to-br from-cyan-950/50 to-zinc-900/50 border border-cyan-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <Fish className="w-6 h-6 text-cyan-400" />
                </div>
                PureVital Omega-3
              </h3>
              <ul className="space-y-4 text-base md:text-lg">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">DHA:</strong>{" "}
                    <span className="text-gray-300">
                      Cấu trúc chính màng neuron, ổn định tín hiệu giấc ngủ
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">EPA:</strong>{" "}
                    <span className="text-gray-300">
                      Tái tạo tế bào thần kinh, tổng hợp Serotonin → Melatonin
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">DPA:</strong>{" "}
                    <span className="text-gray-300">
                      "Pin dự phòng" tự động chuyển hóa khi thiếu DHA/EPA
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Astaxanthin:</strong>{" "}
                    <span className="text-gray-300">
                      Chống oxy hóa mạnh gấp 6000 lần Vitamin E
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* GINCI10 */}
            <div className="bg-gradient-to-br from-purple-950/50 to-zinc-900/50 border border-purple-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Brain className="w-6 h-6 text-purple-400" />
                </div>
                GINCI10
              </h3>
              <ul className="space-y-4 text-base md:text-lg">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">GABA 22.1mg:</strong>{" "}
                    <span className="text-gray-300">
                      Khóa van lo âu, dập tắt bồn chồn ngay lập tức
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Citicoline:</strong>{" "}
                    <span className="text-gray-300">
                      Bảo vệ não khỏi độc tố, bảo tồn năng lượng ATP
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Ginkgo Biloba:</strong>{" "}
                    <span className="text-gray-300">
                      Tăng lưu lượng máu não, giảm đau đầu chóng mặt
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Magnesi + CoQ10:</strong>{" "}
                    <span className="text-gray-300">
                      Làm dịu thần kinh, thư giãn cơ bắp
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Đối tượng sử dụng */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            DÀNH CHO AI?
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg md:text-xl">
            Phù hợp với những ai đang gặp vấn đề về giấc ngủ
          </p>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                <Image
                  src="/quyen-luc.jpg"
                  alt="Đối tượng sử dụng"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl relative z-10 border border-white/10"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 border border-white/10 p-5 rounded-xl backdrop-blur-sm">
                  <div className="w-14 h-14 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <BedDouble className="w-7 h-7 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg md:text-xl text-white">
                      Người mất ngủ, khó vào giấc
                    </h4>
                    <p className="text-base md:text-lg text-gray-400">
                      Nằm mãi không ngủ được, hay thức giấc giữa đêm
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 border border-white/10 p-5 rounded-xl backdrop-blur-sm">
                  <div className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Frown className="w-7 h-7 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg md:text-xl text-white">
                      Người hay lo âu, căng thẳng
                    </h4>
                    <p className="text-base md:text-lg text-gray-400">
                      Suy nghĩ miên man, bồn chồn không yên
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 border border-white/10 p-5 rounded-xl backdrop-blur-sm">
                  <div className="w-14 h-14 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-7 h-7 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg md:text-xl text-white">
                      Người làm việc trí óc căng thẳng
                    </h4>
                    <p className="text-base md:text-lg text-gray-400">
                      Áp lực công việc, não hoạt động quá tải
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 border border-white/10 p-5 rounded-xl backdrop-blur-sm">
                  <div className="w-14 h-14 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-7 h-7 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg md:text-xl text-white">
                      Người trung niên, cao tuổi
                    </h4>
                    <p className="text-base md:text-lg text-gray-400">
                      Giấc ngủ chập chờn, hay thức dậy sớm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hướng dẫn sử dụng */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-black via-zinc-900/50 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            HƯỚNG DẪN SỬ DỤNG
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg md:text-xl">
            Đơn giản, dễ thực hiện mỗi ngày
          </p>

          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                <Image
                  src="/cach-dung.jpg"
                  alt="Cách sử dụng"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl relative z-10 border border-white/10"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-cyan-950/50 to-zinc-900/50 border border-cyan-500/20 rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center font-black text-xl text-white">
                      1
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold">
                      PureVital Omega-3
                    </h3>
                  </div>
                  <ul className="space-y-2 text-base md:text-lg text-gray-300">
                    <li className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-cyan-400" />
                      Uống 1-2 viên/ngày sau bữa ăn
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-cyan-400" />
                      Uống với nước ấm để hấp thu tốt hơn
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-cyan-400" />
                      Duy trì đều đặn để thấy hiệu quả
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-purple-950/50 to-zinc-900/50 border border-purple-500/20 rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-black text-xl text-white">
                      2
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold">GINCI10</h3>
                  </div>
                  <ul className="space-y-2 text-base md:text-lg text-gray-300">
                    <li className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-purple-400" />
                      Uống 1 viên/ngày trước khi ngủ
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-purple-400" />
                      Hoặc theo chỉ dẫn của bác sĩ
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-purple-400" />
                      Kết hợp với lối sống lành mạnh
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-950/30 to-zinc-900/50 border border-amber-500/20 rounded-2xl p-6 md:p-8 text-center max-w-3xl mx-auto backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Lightbulb className="w-6 h-6 text-amber-400" />
              <span className="text-lg md:text-xl font-bold text-amber-400">
                Lưu ý quan trọng
              </span>
            </div>
            <p className="text-base md:text-lg text-gray-300">
              Sử dụng liên tục ít nhất 2-3 tháng để đạt hiệu quả tốt nhất. Sản
              phẩm được nghiên cứu bởi Tiến sĩ, Giáo sư Bệnh viện Y Dược Hà Nội.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-black via-purple-950/20 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-500/10 via-transparent to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            BẮT ĐẦU NGỦ NGON NGAY HÔM NAY!
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg md:text-xl">
            Bộ đôi GINCI10 + PureVital Omega-3
            <br />
            Phục hồi tế bào thần kinh từ gốc - Ngủ ngon tự nhiên
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-10 py-5 rounded-full font-bold hover:opacity-90 transition-all shadow-xl shadow-purple-500/25 text-lg md:text-xl flex items-center justify-center gap-2">
              <ShoppingCart className="w-6 h-6" />
              ĐẶT MUA NGAY
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-10 py-5 rounded-full font-bold hover:bg-white/20 transition-all text-lg md:text-xl flex items-center justify-center gap-2">
              <Phone className="w-6 h-6" />
              TƯ VẤN MIỄN PHÍ
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-base md:text-lg text-gray-400">
            <span className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-emerald-400" />
              Giao hàng toàn quốc
            </span>
            <span className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-blue-400" />
              Thanh toán khi nhận hàng
            </span>
            <span className="flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-purple-400" />
              Đổi trả trong 7 ngày
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-gray-400 py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-base md:text-lg mb-2">
            © 2026 PharmaCity. All rights reserved.
          </p>
          <p className="text-sm md:text-base text-gray-500">
            Sản phẩm này không phải là thuốc và không có tác dụng thay thế thuốc
            chữa bệnh.
          </p>
        </div>
      </footer>
    </main>
  );
}
