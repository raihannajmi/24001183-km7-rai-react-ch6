import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  const handleRentClick = () => {
    navigate("/rent");
  };

  return (
    <section className="bg-blue-100 py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800">
            Sewa & Rental Mobil Terbaik di kawasan Anda
          </h1>
          <p className="mt-4 text-gray-600">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau.
          </p>
          <button
            onClick={handleRentClick}
            className="mt-6 bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
          >
            Mulai Sewa Mobil
          </button>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <img
            src="/images/img_car.png"
            alt="Car"
            className="w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}
