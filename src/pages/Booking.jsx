import PageHeader from "../Components/PageHeader";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaPen } from "react-icons/fa";

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

  const handleDelete = (id) => {
    // Logika untuk menghapus data booking
    console.log("Delete booking with id:", id);
  };

  const handleReply = (id) => {
    // Logika untuk membalas atau mengedit data booking
    console.log("Reply to booking with id:", id);
  };

  return (
    <div className="p-4">
      {/* PageHeader */}
      <PageHeader title="Dashboard" breadcrumb={["Booking List"]} />

      {/* Booking Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-2xl">
          <thead>
            <tr>
              <th className="px-6 py-4 text-left font-bold text-gray-500 border-b border-gray-200">
                Produk
              </th>
              <th className="px-6 py-4 text-left font-bold text-gray-500 border-b border-gray-200">
                Harga
              </th>
              <th className="px-6 py-4 text-left font-bold text-gray-500 border-b border-gray-200">
                Jumlah
              </th>
              <th className="px-6 py-4 text-left font-bold text-gray-500 border-b border-gray-200">
                Action
              </th>
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
                  <td className="px-6 py-4 text-gray-700 border-b border-gray-200">
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
                  <td className="px-6 py-4 text-gray-700 border-b border-gray-200">
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
                  <td className="px-6 py-4 text-gray-700 border-b border-gray-200">
                    Rp{totalPrice.toLocaleString()}
                  </td>

                  {/* Action Buttons */}
                  <td className="px-6 py-4 text-gray-700 border-b border-gray-200">
                    <div className="flex flex-col space-y-2">
                      <button
                        onClick={() => handleDelete(customer.id)}
                        className="w-full bg-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                      >
                        <FaTrash />
                        <span>Delete</span>
                      </button>
                      <button
                        onClick={() => handleReply(customer.id)}
                        className="w-full bg-teal-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                      >
                        <FaPen />
                        <span>Reply</span>
                      </button>
                    </div>
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
