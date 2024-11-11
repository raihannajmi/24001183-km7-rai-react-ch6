import React, { useEffect, useState } from "react";
import axios from "axios";

type Car = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  passengers: number;
  year: number;
  manual: boolean;
};

const CarListComponent: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get<Car[]>(
          "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
        );
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };
    fetchCars();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {cars.map((car) => (
        <div key={car.id} className="border rounded-lg shadow-md p-4 bg-white">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-40 object-cover rounded"
          />
          <h3 className="mt-2 font-semibold text-lg">{car.name}</h3>
          <p className="text-sm text-gray-500">{car.description}</p>
          <p className="text-green-600 font-semibold">Rp {car.price} / hari</p>
          <div className="flex items-center justify-between mt-2">
            <span>{car.passengers} orang</span>
            <span>{car.manual ? "Manual" : "Automatic"}</span>
            <span>{car.year}</span>
          </div>
          <button className="w-full bg-green-500 text-white py-2 rounded-md mt-3">
            Pilih Mobil
          </button>
        </div>
      ))}
    </div>
  );
};

export default CarListComponent;
