import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function BookingDetail() {
  const { index } = useParams();
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/customer.json")
      .then((res) => res.json())
      .then(setCustomers);
    fetch("/data/Product.json")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  if (customers.length === 0 || products.length === 0) return <div>Loading...</div>;

  const customer = customers[index];
  if (!customer) return <div>Customer tidak ditemukan.</div>;

  // Ambil produk sesuai logic utama
  const bookedProducts = [];
  for (let i = 0; i < 3 && i < products.length; i++) {
    bookedProducts.push(products[(Number(index) + i) % products.length]);
  }
  const totalPrice = bookedProducts.reduce((sum, p) => sum + (p.price || 0), 0);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <Link to="/booking" className="text-blue-500 underline mb-6 inline-block">
          ← Kembali ke Booking
        </Link>
        <div className="flex flex-col items-center mb-6">
          {customer.avatar && (
            <img
              src={customer.avatar}
              alt={customer.customerName}
              className="w-24 h-24 rounded-full mb-3 shadow"
            />
          )}
          <h2 className="text-2xl font-bold mb-1 text-gray-800 text-center">
            Detail Booking: <span className="text-teal-700">{customer.customerName || `Customer ${Number(index) + 1}`}</span>
          </h2>
          <div className="text-gray-600 mb-1 text-center">{customer.email || "-"}</div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Produk yang Dibooking:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {bookedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-gray-50 rounded-lg shadow p-4 flex flex-col items-center transition hover:shadow-md"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded mb-3"
                />
                <div className="font-bold text-lg text-gray-800 text-center mb-1">{product.name}</div>
                <div className="text-gray-500 text-sm mb-1">{product.category}</div>
                <div className="text-teal-600 font-bold text-base">
                  Rp{product.price?.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-lg font-bold text-right text-gray-800">
            Total Harga: <span className="text-teal-700">Rp{totalPrice.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}