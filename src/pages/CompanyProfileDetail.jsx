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

  if (!company) return <div className="font-arimo p-4">Loading...</div>;

  return (
    <div className="font-arimo max-w-xl mx-auto bg-white p-6 rounded shadow mt-8">
      <Link
        to="/CompanyProfileList"
        className="font-arimo text-teal-600 underline mb-4 inline-block"
      >
        ← Kembali ke Daftar Perusahaan
      </Link>
      <h2 className="font-arimo text-2xl font-bold mb-2 text-abu500">
        {company.nama}
      </h2>
      <div className="font-arimo mb-2 text-abu500">
        Alamat: {company.alamat}
      </div>
      <div className="font-arimo mb-2 text-abu500">
        Lokasi: {company.lokasi}
      </div>
      <div className="font-arimo mb-2 text-abu500">
        Telepon: {company.telepon}
      </div>
      <div className="font-arimo mb-2 text-abu500">Email: {company.email}</div>
      {/* Tambahkan detail lain sesuai kebutuhan */}
    </div>
  );
}
