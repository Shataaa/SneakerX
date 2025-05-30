import PageHeader from "../Components/PageHeader";
import React, { useState, useEffect } from "react";
import { FaTrash, FaPen } from "react-icons/fa"; // Import ikon Delete dan Reply

export default function Customer() {
  const [customers, setCustomers] = useState([]);
  const [replyingTo, setReplyingTo] = useState(null); // State untuk menyimpan ID customer yang sedang direply
  const [replyText, setReplyText] = useState(""); // State untuk menyimpan teks reply

  // Fetch data dari customer.json
  useEffect(() => {
    fetch("/data/customer.json")
      .then((response) => response.json())
      .then((data) => setCustomers(data))
      .catch((error) => console.error("Error fetching customer data:", error));
  }, []);

  // Function untuk menghapus customer
  const handleDelete = (customerId) => {
    const updatedCustomers = customers.filter(
      (customer) => customer.customerId !== customerId
    );
    setCustomers(updatedCustomers);
  };

  // Function untuk membuka input reply
  const handleReply = (customerId) => {
    if (replyingTo === customerId) {
      // Jika tombol Reply ditekan lagi, tutup input
      setReplyingTo(null);
    } else {
      setReplyingTo(customerId); // Set ID customer yang sedang direply
      setReplyText(""); // Reset teks reply
    }
  };

  // Function untuk mengirim reply
  const handleSendReply = (customerId) => {
    alert(
      `Reply sent to customer with ID: ${customerId}\nMessage: ${replyText}`
    );
    setReplyingTo(null); // Tutup input setelah reply dikirim
  };

  return (
    <div className="p-4">
      {/* PageHeader */}
      <PageHeader title="Dashboard" breadcrumb={["Customer Review"]} />

      {/* Customer Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse bg-white rounded-lg shadow-md">
          <thead>
            <tr className="text-left text-gray-500 text-sm uppercase tracking-wider">
              <th className="px-6 py-3">Nama</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Review</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <React.Fragment key={index}>
                <tr className="border-t hover:bg-gray-50">
                  {/* Nama dan Avatar */}
                  <td className="px-6 py-4 text-gray-800">
                    <div className="flex items-center space-x-4">
                      {/* Avatar */}
                      <img
                        src={customer.avatar}
                        alt={customer.customerName}
                        className="w-10 h-10 rounded-full"
                      />
                      {/* Nama dan Email */}
                      <div>
                        <div className="font-semibold">
                          {customer.customerName}
                        </div>
                        <div className="text-sm text-gray-500">
                          {customer.email}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-white ${
                        customer.status === "Online"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {customer.status}
                    </span>
                  </td>

                  {/* Review */}
                  <td className="px-6 py-4 text-gray-800">{customer.review}</td>

                  {/* Action */}
                  <td className="px-6 py-4 flex space-x-2">
                    <button
                      onClick={() => handleDelete(customer.customerId)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-600"
                    >
                      <FaTrash />
                      <span>Delete</span>
                    </button>
                    <button
                      onClick={() => handleReply(customer.customerId)}
                      className="bg-teal-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-600"
                    >
                      <FaPen />
                      <span>Reply</span>
                    </button>
                  </td>
                </tr>

                {/* Input Reply */}
                {replyingTo === customer.customerId && (
                  <tr>
                    <td colSpan="5" className="px-6 py-4">
                      <div className="flex items-center space-x-4">
                        <input
                          type="text"
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          placeholder="Type your reply here..."
                          className="w-full border border-gray-300 p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                          onClick={() => handleSendReply(customer.customerId)}
                          className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600"
                        >
                          Send
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
