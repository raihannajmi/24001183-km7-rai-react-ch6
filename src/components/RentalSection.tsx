import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function RentalSection() {
  return (
    <section className="bg-gray-50 py-20 mx-auto flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
        <img
          src="/images/img_service.png"
          alt="Service"
          className="w-full max-w-xs"
        />
      </div>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Best Car Rental for Any Kind of Trip
        </h2>
        <p className="text-gray-600 mb-10">
          Sewa mobil di sini bersama kami untuk jaminan harga terbaik dan
          pelayanan berkualitas.
        </p>
        <ul className="list-none space-y-4 text-gray-600 text-left max-w-md mx-auto">
          <li className="flex items-center">
            <span className="text-blue-500 mr-2">
              {" "}
              <CheckCircleIcon className="w-6 h-6" />
            </span>{" "}
            Sewa Mobil Dengan Supir di Bali 12 Jam
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 mr-2">
              <CheckCircleIcon className="w-6 h-6" />
            </span>{" "}
            Sewa Mobil Lepas Kunci di Bali 24 Jam
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 mr-2">
              <CheckCircleIcon className="w-6 h-6" />
            </span>{" "}
            Sewa Mobil Jangka Panjang Bulanan
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 mr-2">
              <CheckCircleIcon className="w-6 h-6" />
            </span>{" "}
            Gratis Antar - Jemput Mobil di Bandara
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 mr-2">
              <CheckCircleIcon className="w-6 h-6" />
            </span>{" "}
            Layanan Airport Transfer / Drop In Out
          </li>
        </ul>
      </div>
    </section>
  );
}
