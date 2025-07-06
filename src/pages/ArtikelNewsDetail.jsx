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

  if (!article) return <div className="font-arimo p-4">Loading...</div>;

  return (
    <div className="font-arimo max-w-xl mx-auto bg-white p-6 rounded shadow mt-8">
      <Link
        to="/ArtikelNews"
        className="font-arimo text-teal-600 underline mb-4 inline-block"
      >
        ← Kembali ke Daftar Artikel
      </Link>
      <img
        src={article.image}
        alt={article.judul}
        className="font-arimo w-48 h-48 object-cover rounded mx-auto mb-4"
      />
      <h2 className="font-arimo text-2xl font-bold mb-2 text-teal-700">
        {article.judul}
      </h2>
      <div className="font-arimo mb-2 text-abu500">{article.tanggal}</div>
      <div className="font-arimo mb-2 text-abu500">{article.isi}</div>
    </div>
  );
}
