import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CompanyProfileDetail() {
  const { id } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    fetch("/data/companies.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((c) => String(c.id) === String(id));
        setCompany(found);
      });
  }, [id]);

  if (!company) return <div className="p-4">Loading...</div>;

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow mt-8">
      <Link to="/CompanyProfileList" className="text-teal-600 underline mb-4 inline-block">
        ← Kembali ke Daftar Perusahaan
      </Link>
      <h2 className="text-2xl font-bold mb-2">{company.nama}</h2>
      <div className="mb-2">Alamat: {company.alamat}</div>
      <div className="mb-2">Lokasi: {company.lokasi}</div>
      <div className="mb-2">Telepon: {company.telepon}</div>
      <div className="mb-2">Email: {company.email}</div>
      {/* Tambahkan detail lain sesuai kebutuhan */}
    </div>
  );
}