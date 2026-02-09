import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section - Mobile First */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hon-dau-ca.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4">
              🏆 Bộ đôi bảo vệ sức khỏe toàn diện
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              GINCI10 + PureVital Omega-3
            </h1>
            <p className="text-base md:text-lg mb-6 text-emerald-50 leading-relaxed">
              Thông mạch – Dưỡng não – Bảo vệ tim mạch
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-white text-emerald-700 px-6 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-all shadow-lg text-sm md:text-base">
                Mua ngay
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all text-sm md:text-base">
                Tìm hiểu thêm
              </button>
            </div>
          </div>
        </div>
        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path
              d="M0 40L80 35C160 30 320 20 480 25C640 30 800 50 960 55C1120 60 1280 50 1360 45L1440 40V80H0V40Z"
              fill="#f9fafb"
            />
          </svg>
        </div>
      </section>

      {/* Thành phần chính */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-900">
            Thành phần chính
          </h2>
          <p className="text-center text-gray-600 mb-8 text-sm md:text-base">
            Công thức kết hợp tối ưu từ thiên nhiên
          </p>

          <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8">
            <Image
              src="/thanh-phan.jpg"
              alt="Thành phần sản phẩm"
              width={2048}
              height={1537}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* PureVital Omega-3 */}
            <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🐟</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  PureVital Omega-3
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-0.5">●</span>
                  <span>
                    <strong>Dầu cá 800mg:</strong> Omega-3 ≥ 280mg (DHA ≥96mg,
                    EPA ≥144mg)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-0.5">●</span>
                  <span>
                    <strong>Dầu nhuyễn thể 100mg:</strong> Omega-3 ≥22mg (DHA
                    ≥5.5mg, EPA ≥12mg)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-0.5">●</span>
                  <span>Viên nang mềm, độ rã &lt;30 phút, dễ hấp thu</span>
                </li>
              </ul>
            </div>

            {/* GINCI10 */}
            <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🧠</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">GINCI10</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">●</span>
                  <span>
                    <strong>GABA 22.1mg:</strong> Giảm lo âu, ổn định thần kinh
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">●</span>
                  <span>
                    <strong>Citicoline:</strong> Bảo vệ tế bào não, chống oxy
                    hóa
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">●</span>
                  <span>
                    <strong>Ginkgo Biloba:</strong> Tăng tuần hoàn não, cải
                    thiện trí nhớ
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">●</span>
                  <span>
                    <strong>Magnesi, CoQ10:</strong> Làm dịu thần kinh, hỗ trợ
                    giấc ngủ
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cơ chế hoạt động */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-900">
            Cơ chế hoạt động
          </h2>
          <p className="text-center text-gray-600 mb-8 text-sm md:text-base">
            Bộ đôi kết hợp hoàn hảo cho sức khỏe toàn diện
          </p>

          <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8">
            <Image
              src="/co-che.jpg"
              alt="Cơ chế hoạt động"
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-100">
              <div className="text-2xl mb-2">🫀</div>
              <h4 className="font-bold text-gray-900 mb-1 text-sm">
                Bảo vệ tim mạch
              </h4>
              <p className="text-xs text-gray-600">
                EPA & DHA giảm cholesterol xấu, triglyceride, ổn định huyết áp
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-4 rounded-xl border border-emerald-100">
              <div className="text-2xl mb-2">🧠</div>
              <h4 className="font-bold text-gray-900 mb-1 text-sm">
                Nuôi dưỡng não bộ
              </h4>
              <p className="text-xs text-gray-600">
                DHA cấu tạo màng tế bào thần kinh, tăng trí nhớ và tập trung
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-4 rounded-xl border border-purple-100">
              <div className="text-2xl mb-2">🔄</div>
              <h4 className="font-bold text-gray-900 mb-1 text-sm">
                Tăng tuần hoàn não
              </h4>
              <p className="text-xs text-gray-600">
                Ginkgo Biloba tăng lưu lượng máu não, giảm chóng mặt đau đầu
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-xl border border-orange-100">
              <div className="text-2xl mb-2">👁️</div>
              <h4 className="font-bold text-gray-900 mb-1 text-sm">
                Bảo vệ thị lực
              </h4>
              <p className="text-xs text-gray-600">
                DHA hỗ trợ cấu trúc võng mạc, giảm mỏi mắt, thoái hóa
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-rose-50 p-4 rounded-xl border border-red-100">
              <div className="text-2xl mb-2">💪</div>
              <h4 className="font-bold text-gray-900 mb-1 text-sm">
                Giảm viêm & hỗ trợ khớp
              </h4>
              <p className="text-xs text-gray-600">
                Omega-3 chống viêm, giảm đau nhức khớp hiệu quả
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-4 rounded-xl border border-indigo-100">
              <div className="text-2xl mb-2">😴</div>
              <h4 className="font-bold text-gray-900 mb-1 text-sm">
                Cải thiện giấc ngủ
              </h4>
              <p className="text-xs text-gray-600">
                GABA, Magnesi giúp thư giãn, giảm căng thẳng, ngủ sâu hơn
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sức mạnh kết hợp */}
      <section className="py-10 md:py-16 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            Sức mạnh kết hợp
          </h2>
          <p className="text-center text-emerald-100 mb-8 text-sm md:text-base">
            1 + 1 = 3: Hiệu quả vượt trội khi dùng cùng nhau
          </p>

          <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8">
            <Image
              src="/suc-manh.jpg"
              alt="Sức mạnh kết hợp"
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-xl">🔬</span> GINCI10 - Thông mạch & Kích
                hoạt
              </h3>
              <ul className="space-y-2 text-sm text-emerald-50">
                <li>• GABA giúp dập tắt cảm giác lo âu ngay lập tức</li>
                <li>• Citicoline bảo vệ tế bào não khỏi stress oxy hóa</li>
                <li>• Bảo tồn năng lượng tế bào thần kinh (ATP)</li>
                <li>• Ginkgo Biloba tăng lưu thông máu lên não</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-xl">💧</span> PureVital - Nuôi dưỡng & Bảo
                vệ
              </h3>
              <ul className="space-y-2 text-sm text-emerald-50">
                <li>• EPA/DHA nuôi dưỡng màng tế bào thần kinh</li>
                <li>• Omega-3 giảm mỡ máu, chống xơ vữa động mạch</li>
                <li>• Điều hòa hormone căng thẳng cortisol</li>
                <li>• Dầu nhuyễn thể giúp hấp thu nhanh hơn</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 text-center">
            <p className="text-base md:text-lg font-medium">
              ✅ Kết hợp: Máu lưu thông tốt + Tế bào thần kinh được nuôi dưỡng
              đầy đủ
              <br />={" "}
              <strong>
                Não hoạt động minh mẫn, tim khỏe mạnh, tinh thần thoải mái
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* Ưu điểm vượt trội */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-900">
            Ưu điểm vượt trội
          </h2>
          <p className="text-center text-gray-600 mb-8 text-sm md:text-base">
            Lý do hàng ngàn khách hàng tin dùng
          </p>

          <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8">
            <Image
              src="/uu-diem.jpg"
              alt="Ưu điểm sản phẩm"
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div className="bg-white rounded-xl p-4 text-center shadow-md border border-gray-100">
              <div className="text-3xl mb-2">✓</div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">
                Thành phần tự nhiên
              </h4>
              <p className="text-xs text-gray-600">
                An toàn, không tác dụng phụ
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-md border border-gray-100">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">
                Hấp thu nhanh
              </h4>
              <p className="text-xs text-gray-600">
                Viên nang mềm, độ rã &lt;30 phút
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-md border border-gray-100">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">
                Hiệu quả cao
              </h4>
              <p className="text-xs text-gray-600">Hàm lượng EPA/DHA tối ưu</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-md border border-gray-100">
              <div className="text-3xl mb-2">🛡️</div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">
                Bảo vệ toàn diện
              </h4>
              <p className="text-xs text-gray-600">Tim - Não - Mắt - Khớp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Đối tượng sử dụng */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-900">
            Đối tượng sử dụng
          </h2>
          <p className="text-center text-gray-600 mb-8 text-sm md:text-base">
            Phù hợp cho nhiều nhóm người có nhu cầu khác nhau
          </p>

          <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8">
            <Image
              src="/quyen-luc.jpg"
              alt="Đối tượng sử dụng"
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
              <span className="text-2xl">👨‍💼</span>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">
                  Người làm việc trí óc
                </h4>
                <p className="text-xs text-gray-600">
                  Cần tập trung cao, hay căng thẳng, mất ngủ
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
              <span className="text-2xl">👴</span>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">
                  Người trung niên & cao tuổi
                </h4>
                <p className="text-xs text-gray-600">
                  Phòng ngừa suy giảm trí nhớ, tim mạch
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
              <span className="text-2xl">😰</span>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">
                  Người hay lo âu, mất ngủ
                </h4>
                <p className="text-xs text-gray-600">
                  Cần ổn định thần kinh, cải thiện giấc ngủ
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
              <span className="text-2xl">🏃</span>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">
                  Người có lối sống bận rộn
                </h4>
                <p className="text-xs text-gray-600">
                  Ít ngủ, dễ bị ốm, cần tăng đề kháng
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hướng dẫn sử dụng */}
      <section className="py-10 md:py-16 bg-gradient-to-br from-cyan-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            Hướng dẫn sử dụng
          </h2>
          <p className="text-center text-cyan-100 mb-8 text-sm md:text-base">
            Đơn giản, dễ thực hiện mỗi ngày
          </p>

          <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8">
            <Image
              src="/cach-dung.jpg"
              alt="Cách sử dụng"
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="font-bold">PureVital Omega-3</h3>
              </div>
              <ul className="space-y-2 text-sm text-cyan-50">
                <li>• Uống 1-2 viên/ngày sau bữa ăn</li>
                <li>• Uống với nước ấm để hấp thu tốt hơn</li>
                <li>• Duy trì đều đặn để thấy hiệu quả</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="font-bold">GINCI10</h3>
              </div>
              <ul className="space-y-2 text-sm text-cyan-50">
                <li>• Uống 1 viên/ngày trước khi ngủ</li>
                <li>• Hoặc theo chỉ dẫn của bác sĩ</li>
                <li>• Kết hợp với lối sống lành mạnh</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-cyan-100 text-sm mb-4">
              💡 Lưu ý: Sử dụng liên tục ít nhất 2-3 tháng để đạt hiệu quả tốt
              nhất
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Bắt đầu hành trình sức khỏe ngay hôm nay!
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm md:text-base">
            Bộ đôi GINCI10 + PureVital Omega-3 - Giải pháp toàn diện cho não bộ
            và tim mạch của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all shadow-lg text-base">
              🛒 Đặt mua ngay
            </button>
            <button className="bg-transparent border-2 border-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:border-white transition-all text-base">
              📞 Tư vấn miễn phí
            </button>
          </div>
          <p className="mt-6 text-gray-500 text-xs">
            Giao hàng toàn quốc • Thanh toán khi nhận hàng • Đổi trả trong 7
            ngày
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm mb-2">
            © 2026 PharmaCity. All rights reserved.
          </p>
          <p className="text-xs">
            Sản phẩm này không phải là thuốc và không có tác dụng thay thế thuốc
            chữa bệnh.
          </p>
        </div>
      </footer>
    </main>
  );
}
