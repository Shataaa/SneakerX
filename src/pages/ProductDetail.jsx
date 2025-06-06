import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/data/Product.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => String(p.id) === String(id));
        setProduct(found);
      });
  }, [id]);

  if (!product) return <div className="p-4">Loading...</div>;

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow mt-8">
      <Link to="/ManajemenProduk" className="text-teal-600 underline mb-4 inline-block">
        ← Kembali ke Daftar Produk
      </Link>
      <img src={product.image} alt={product.name} className="w-48 h-48 object-cover rounded mx-auto mb-4" />
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <div className="mb-2 text-gray-600">{product.brand}</div>
      <div className="mb-2">Kategori: <span className="font-semibold">{product.category}</span></div>
      <div className="mb-2">Stok: <span className="font-semibold">{product.stock}</span></div>
      <div className="mb-2 font-bold text-teal-700">Rp{product.price.toLocaleString()}</div>
      <div className="mb-2">{product.description}</div>
    </div>
  );
}