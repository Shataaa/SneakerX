import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import PageHeader from "../Components/PageHeader";

export default function CompanyProfileList() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/companies.json")
      .then((res) => res.json())
      .then((data) => {
        setCompanies(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Handler untuk tombol Edit dan Delete
  const handleEdit = (company) => {
    alert(`Edit data untuk: ${company.nama || company.email}`);
    // Implementasi edit bisa ditambahkan di sini
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus data ini?")) {
      setCompanies((prev) =>
        prev.filter((c, idx) => (c.id ? c.id : idx) !== id)
      );
    }
  };

  if (loading) {
    return (
      <div className="font-arimo max-w-4xl mx-auto bg-white p-4 rounded shadow text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="font-arimo overflow-x-auto">
      <PageHeader title="Dashboard" breadcrumb={["Company List"]} />
      <table className="font-arimo min-w-full bg-white rounded-2xl">
        <thead>
          <tr>
            <th className="font-arimo px-6 py-4 text-left font-bold text-gray-500 border-b border-gray-200">
              Nama
            </th>
            <th className="font-arimo px-6 py-4 text-left font-bold text-gray-500 border-b border-gray-200">
              Alamat
            </th>
            <th className="font-arimo px-6 py-4 text-left font-bold text-gray-500 border-b border-gray-200">
              Lokasi
            </th>
            <th className="font-arimo px-6 py-4 text-left font-bold text-gray-500 border-b border-gray-200">
              Telepon
            </th>
            <th className="font-arimo px-6 py-4 text-left font-bold text-gray-500 border-b border-gray-200">
              Email
            </th>
            <th className="font-arimo px-6 py-4 text-left font-bold text-gray-500 border-b border-gray-200">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, idx) => (
            <tr
              key={company.id || idx}
              className="font-arimo border-t hover:bg-gray-50"
            >
              <td className="font-arimo px-6 py-4 text-gray-700 border-b border-gray-200">
                <Link
                  to={`/company/${company.id}`}
                  className="font-arimo text-black hover:underline"
                >
                  {company.nama || "-"}
                </Link>
              </td>
              <td className="font-arimo px-6 py-4 text-gray-700 border-b border-gray-200">
                {company.alamat || "-"}
              </td>
              <td className="font-arimo px-6 py-4 text-gray-700 border-b border-gray-200">
                {company.lokasi || "-"}
              </td>
              <td className="font-arimo px-6 py-4 text-gray-700 border-b border-gray-200">
                {company.telepon || "-"}
              </td>
              <td className="font-arimo px-6 py-4 text-gray-700 border-b border-gray-200">
                {company.email}
              </td>
              <td className="font-arimo px-6 py-4 border-b border-gray-200">
                <div className="font-arimo flex flex-col space-y-2">
                  <button
                    onClick={() => handleDelete(company.id ? company.id : idx)}
                    className="font-arimo w-full bg-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                  >
                    <FaTrash />
                    <span className="font-arimo">Delete</span>
                  </button>
                  <button
                    onClick={() => handleEdit(company)}
                    className="font-arimo w-full bg-teal-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                  >
                    <FaEdit />
                    <span className="font-arimo">Edit</span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
