import PageHeader from "../Components/PageHeader";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Booking() {
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);

  // Fetch data dari customer.json
  useEffect(() => {
    fetch("/data/customer.json")
      .then((response) => response.json())
      .then((data) => setCustomers(data))
      .catch((error) => console.error("Error fetching customer data:", error));
  }, []);

  // Fetch data dari product.json
  useEffect(() => {
    fetch("/data/Product.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  // Fungsi untuk mengambil produk unik per customer (berdasarkan index/id)
  const getProductsForCustomer = (index) => {
    if (products.length === 0) return [];
    // Ambil 3 produk berurutan mulai dari index, wrap jika lebih dari panjang array
    const booked = [];
    for (let i = 0; i < 3 && i < products.length; i++) {
      booked.push(products[(index + i) % products.length]);
    }
    return booked;
  };

  return (
    <div className="p-4">
      {/* PageHeader */}
      <PageHeader title="Dashboard" breadcrumb={["Booking List"]} />

      {/* Booking Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse bg-white rounded-lg shadow-md">
          <thead>
            <tr className="text-left text-gray-500 text-sm uppercase tracking-wider">
              <th className="px-6 py-3">Nama</th>
              <th className="px-6 py-3">Produk yang Dibooking</th>
              <th className="px-6 py-3">Total Harga</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => {
              const bookedProducts = getProductsForCustomer(index); // Produk yang dibooking pelanggan
              const totalPrice = bookedProducts.reduce(
                (sum, product) => sum + (product.price || 0),
                0
              ); // Hitung total harga
              return (
                <tr key={index} className="border-t hover:bg-gray-50">
                  {/* Nama, Email, dan Avatar */}
                  <td className="px-6 py-4 text-gray-800">
                    <div className="flex items-center space-x-4">
                      {customer.avatar && (
                        <img
                          src={customer.avatar}
                          alt={customer.customerName}
                          className="w-12 h-12 object-cover rounded-full"
                        />
                      )}
                      <div>
                        <div className="font-semibold">
                          <Link
                            to={`/booking/${index}`}
                            className="text-blue-600 hover:underline"
                          >
                            {customer.customerName || `Customer ${index + 1}`}
                          </Link>
                        </div>
                        <div className="text-sm text-gray-500">
                          {customer.email || ""}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Produk yang Dibooking (Nama + Gambar) */}
                  <td className="px-6 py-4 text-gray-800">
                    <ul className="space-y-2">
                      {bookedProducts.map((product) => (
                        <li
                          key={product.id}
                          className="flex items-center space-x-4"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 object-cover rounded-md"
                          />
                          <span>
                            {product.name} - Rp{product.price?.toLocaleString()}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </td>

                  {/* Total Harga */}
                  <td className="px-6 py-4 text-gray-800 font-semibold">
                    Rp{totalPrice.toLocaleString()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
