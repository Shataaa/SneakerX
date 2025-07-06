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
    <div className="font-arimo p-4">
      {/* PageHeader */}
      <PageHeader title="Dashboard" breadcrumb={["Customer Review"]} />

      {/* Customer Table */}
      <div className="font-arimo overflow-x-auto">
        <table className="font-arimo min-w-full bg-white rounded-2xl">
          <thead>
            <tr>
              <th className="font-arimo px-6 py-4 text-left font-bold text-abu500 border-b border-gray-200">
                Nama
              </th>
              <th className="font-arimo px-6 py-4 text-left font-bold text-abu500 border-b border-gray-200">
                STATUS
              </th>
              <th className="font-arimo px-6 py-4 text-left font-bold text-abu500 border-b border-gray-200">
                REVIEW
              </th>
              <th className="font-arimo px-6 py-4 text-left font-bold text-abu500 border-b border-gray-200">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <React.Fragment key={index}>
                <tr className="font-arimo border-t hover:bg-gray-50">
                  {/* Nama dan Avatar */}
                  <td className="font-arimo px-6 py-4 text-abu500 border-b border-gray-200">
                    <div className="font-arimo flex items-center gap-3">
                      {/* Avatar */}
                      <img
                        src={customer.avatar}
                        alt={customer.customerName}
                        className="font-arimo w-10 h-10 rounded-full"
                      />
                      {/* Nama dan Email */}
                      <div>
                        <div className="font-arimo font-bold text-abu500">
                          {customer.customerName}
                        </div>
                        <div className="font-arimo text-abu500 text-sm">
                          {customer.email}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="font-arimo px-6 py-4 border-b border-gray-200">
                    {customer.status === "Online" ? (
                      <span className="font-arimo bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Online
                      </span>
                    ) : (
                      <span className="font-arimo bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Offline
                      </span>
                    )}
                  </td>

                  {/* Review */}
                  <td className="font-arimo px-6 py-4 border-b border-gray-200 text-abu500">
                    {customer.review}
                  </td>

                  {/* Action */}
                  <td className="font-arimo px-6 py-4 border-b border-gray-200">
                    <div className="font-arimo flex flex-col space-y-2">
                      <button
                        onClick={() => handleDelete(customer.customerId)}
                        className="font-arimo w-full bg-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                      >
                        <FaTrash />
                        <span className="font-arimo">Delete</span>
                      </button>
                      <button
                        onClick={() => handleReply(customer.customerId)}
                        className="font-arimo w-full bg-teal-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                      >
                        <FaPen />
                        <span className="font-arimo">Reply</span>
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Input Reply */}
                {replyingTo === customer.customerId && (
                  <tr>
                    <td colSpan="5" className="font-arimo px-6 py-4">
                      <div className="font-arimo flex items-center space-x-4">
                        <input
                          type="text"
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          placeholder="Type your reply here..."
                          className="font-arimo w-full border border-gray-200 p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-abu500"
                        />
                        <button
                          onClick={() => handleSendReply(customer.customerId)}
                          className="font-arimo bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600"
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
