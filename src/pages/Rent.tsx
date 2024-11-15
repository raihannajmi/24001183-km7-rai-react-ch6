import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

interface Car {
  id: string;
  name: string;
  rentPerDay: number;
  image: string;
  description: string;
  capacity: number;
  year: number;
  transmission: string;
}

interface SearchFiltersProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  stock: string;
  setStock: React.Dispatch<React.SetStateAction<string>>;
  price: string;
  setPrice: React.Dispatch<React.SetStateAction<string>>;
  fetchProducts: () => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({
  name,
  setName,
  stock,
  setStock,
  price,
  setPrice,
  fetchProducts,
}) => {
  return (
    <section className="p-4 bg-gray-100">
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Search by Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Search by Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Search by Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={fetchProducts}
          className="px-4 py-2 text-white bg-blue-500 rounded-md"
        >
          Search
        </button>
      </div>
    </section>
  );
};

const Homepage: React.FC = () => {
  const [products, setProducts] = useState<Car[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Car[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const [name, setName] = useState<string>("");
  const [stock, setStock] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [perPage] = useState<number>(10);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get<Car[]>(
        "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
      );

      const data = response.data;
      if (data) {
        setProducts(data);
        setFilteredProducts(data); // Initialize filtered data
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) => {
      return (
        (name
          ? product.name.toLowerCase().includes(name.toLowerCase())
          : true) && (price ? product.rentPerDay <= parseFloat(price) : true)
      );
    });
    setFilteredProducts(filtered);
    setPage(1); // Reset to page 1 whenever filters change
  }, [name, stock, price, products]);

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < Math.ceil(filteredProducts.length / perPage)) setPage(page + 1);
  };

  const paginatedProducts = filteredProducts.slice(
    (page - 1) * perPage,
    page * perPage
  );

  return (
    <>
      <SearchFilters
        name={name}
        setName={setName}
        stock={stock}
        setStock={setStock}
        price={price}
        setPrice={setPrice}
        fetchProducts={fetchProducts}
      />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!error && !loading && (
        <>
          <section className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProducts.map((product, index) => (
              <div
                key={index}
                className="p-4 border rounded-md bg-white shadow-md"
              >
                <img
                  src={product.image}
                  alt="Car"
                  className="w-full h-40 object-cover mb-4"
                />
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-green-500 font-bold">{product.rentPerDay}</p>
                <p className="text-gray-600 mt-2 text-sm">
                  {product.description}
                </p>
                <div className="flex items-center justify-between text-gray-500 text-sm mt-4">
                  <span>{product.capacity}</span>
                  <span>{product.transmission}</span>
                  <span>{product.year}</span>
                </div>
                <button className="w-full px-4 py-2 mt-4 text-white bg-green-500 rounded-md">
                  Pilih Mobil
                </button>
              </div>
            ))}
          </section>

          <div className="flex justify-center space-x-4 mt-6">
            <button
              onClick={handlePreviousPage}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
            >
              Previous
            </button>
            <span className="px-4 py-2">Page {page}</span>
            <button
              onClick={handleNextPage}
              disabled={page === Math.ceil(filteredProducts.length / perPage)}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
            >
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Homepage;
