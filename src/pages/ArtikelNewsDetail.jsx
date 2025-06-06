import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ArtikelNewsDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch("/data/artikelnews.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((a) => String(a.id) === String(id));
        setArticle(found);
      });
  }, [id]);

  if (!article) return <div className="p-4">Loading...</div>;

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow mt-8">
      <Link to="/ArtikelNews" className="text-teal-600 underline mb-4 inline-block">
        ← Kembali ke Daftar Artikel
      </Link>
      <img src={article.image} alt={article.judul} className="w-48 h-48 object-cover rounded mx-auto mb-4" />
      <h2 className="text-2xl font-bold mb-2">{article.judul}</h2>
      <div className="mb-2 text-gray-600">{article.tanggal}</div>
      <div className="mb-2">{article.isi}</div>
    </div>
  );
}