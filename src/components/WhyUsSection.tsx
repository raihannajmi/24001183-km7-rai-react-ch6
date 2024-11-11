import {
  CheckCircleIcon,
  HandThumbUpIcon,
  TagIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

export default function WhyUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Us?</h2>
        <p className="text-gray-600 mb-10">
          Mengapa harus pilih Binar Car Rental?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <HandThumbUpIcon className="w-8 h-8 text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800">
              Mobil Lengkap
            </h3>
            <p className="text-gray-600 mt-2">
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
              terawat.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <TagIcon className="w-8 h-8 text-red-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800">Harga Murah</h3>
            <p className="text-gray-600 mt-2">
              Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
              mobil lain.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <ClockIcon className="w-8 h-8 text-blue-900 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800">
              Layanan 24 Jam
            </h3>
            <p className="text-gray-600 mt-2">
              Siap melayani kebutuhan Anda selama 24 jam nonstop, termasuk akhir
              minggu.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <CheckCircleIcon className="w-8 h-8 text-green-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800">
              Sopir Profesional
            </h3>
            <p className="text-gray-600 mt-2">
              Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
              tepat waktu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
