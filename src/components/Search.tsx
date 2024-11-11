import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type SearchParams = {
  driverType: string;
  rentalDate: Date | null;
  pickupTime: string;
  passengerCount: number;
};

type SearchComponentProps = {
  onSearch: (params: SearchParams) => void;
};

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
  const [driverType, setDriverType] = useState("Dengan sopir");
  const [rentalDate, setRentalDate] = useState<Date | null>(null);
  const [pickupTime, setPickupTime] = useState("");
  const [passengerCount, setPassengerCount] = useState<number>(1);

  const handleSearch = () => {
    onSearch({
      driverType,
      rentalDate,
      pickupTime,
      passengerCount,
    });
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Search for Cars</h2>
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700">
          Type Driver
        </label>
        <select
          value={driverType}
          onChange={(e) => setDriverType(e.target.value)}
          className="w-full mt-1 p-2 border rounded-md"
        >
          <option value="Dengan sopir">Dengan sopir</option>
          <option value="Tanpa sopir (Lepas kunci)">
            Tanpa sopir (Lepas kunci)
          </option>
        </select>
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700">
          Tanggal
        </label>
        <DatePicker
          selected={rentalDate}
          onChange={(date) => setRentalDate(date)}
          placeholderText="Pilih Tanggal"
          className="w-full mt-1 p-2 border rounded-md"
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700">
          Waktu Jemput
        </label>
        <select
          value={pickupTime}
          onChange={(e) => setPickupTime(e.target.value)}
          className="w-full mt-1 p-2 border rounded-md"
        >
          <option value="">Pilih Waktu</option>
          <option value="08:00 WIB">08:00 WIB</option>
          <option value="09:00 WIB">09:00 WIB</option>
          <option value="10:00 WIB">10:00 WIB</option>
          <option value="11:00 WIB">11:00 WIB</option>
          <option value="12:00 WIB">12:00 WIB</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700">
          Jumlah Penumpang (optional)
        </label>
        <input
          type="number"
          value={passengerCount}
          onChange={(e) => setPassengerCount(Number(e.target.value))}
          className="w-full mt-1 p-2 border rounded-md"
          placeholder="Jumlah Penumpang"
          min={1}
        />
      </div>
      <button
        onClick={handleSearch}
        className="w-full bg-green-500 text-white font-semibold py-2 rounded-md mt-3"
      >
        Cari Mobil
      </button>
    </div>
  );
};

export default SearchComponent;
