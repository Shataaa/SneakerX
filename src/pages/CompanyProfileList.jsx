import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

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
      setCompanies((prev) => prev.filter((c, idx) => (c.id ? c.id : idx) !== id));
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto bg-white p-4 rounded shadow text-center">
        Loading...
      </div>
    );
  }

  return (
    
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse bg-white rounded-lg shadow-md">
          <thead>
            <tr className="text-left text-gray-500 text-sm uppercase tracking-wider">
              <th className="px-4 py-3">Nama</th>
              <th className="px-4 py-3">Alamat</th>
              <th className="px-4 py-3">Lokasi</th>
              <th className="px-4 py-3">Telepon</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, idx) => (
              <tr key={company.id || idx} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-800 font-semibold">
                  <Link
                    to={`/company/${company.id}`}
                    className="text-black hover:underline"
                  >
                    {company.nama || "-"}
                  </Link>
                </td>
                <td className="px-4 py-3 text-gray-800">{company.alamat || "-"}</td>
                <td className="px-4 py-3 text-gray-800">{company.lokasi || "-"}</td>
                <td className="px-4 py-3 text-gray-800">{company.telepon || "-"}</td>
                <td className="px-4 py-3 text-gray-800">{company.email}</td>
                <td className="px-4 py-3 flex space-x-2">
                  <button
                    onClick={() => handleEdit(company)}
                    className="bg-yellow-500 text-white px-3 py-2 rounded-lg flex items-center space-x-2 hover:bg-yellow-600 text-sm"
                  >
                    <FaEdit />
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={() => handleDelete(company.id ? company.id : idx)}
                    className="bg-red-500 text-white px-3 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-600 text-sm"
                  >
                    <FaTrash />
                    <span>Delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}