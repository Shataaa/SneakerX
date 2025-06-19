import { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import PageHeader from "../Components/PageHeader";

export default function ArtikelNews() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    image: "",
    judul: "",
    tanggal: "",
    isi: "",
  });

  useEffect(() => {
    fetch("/data/artikelnews.json")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    setFormData({ image: "", judul: "", tanggal: "", isi: "" });
    setEditingId(null);
    setShowForm(true);
  };

  const handleEdit = (article) => {
    setFormData({
      image: article.image,
      judul: article.judul,
      tanggal: article.tanggal,
      isi: article.isi,
    });
    setEditingId(article.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus artikel ini?")) {
      setArticles((prev) => prev.filter((a) => a.id !== id));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setArticles((prev) =>
        prev.map((a) =>
          a.id === editingId ? { ...a, ...formData } : a
        )
      );
    } else {
      const newId = articles.length > 0 ? articles[articles.length - 1].id + 1 : 1;
      setArticles((prev) => [
        ...prev,
        { id: newId, ...formData },
      ]);
    }
    setShowForm(false);
    setEditingId(null);
    setFormData({ image: "", judul: "", tanggal: "", isi: "" });
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({ image: "", judul: "", tanggal: "", isi: "" });
  };

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto bg-white p-4 rounded shadow text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto bg-white p-4 rounded-2xl">
      <PageHeader title="Dashboard" breadcrumb={["Artikel News"]}/>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Daftar Artikel News</h2>
        <button
          onClick={handleAdd}
          className="bg-teal-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-teal-600"
        >
          <FaPlus />
          <span>Tambah Artikel</span>
        </button>
      </div>

      {/* Form Tambah/Edit */}
      {showForm && (
        <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">
            {editingId ? "Edit Artikel" : "Tambah Artikel"}
          </h3>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Gambar (URL)</label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleFormChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Judul</label>
              <input
                type="text"
                name="judul"
                value={formData.judul}
                onChange={handleFormChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Tanggal</label>
              <input
                type="date"
                name="tanggal"
                value={formData.tanggal}
                onChange={handleFormChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Isi Berita</label>
              <textarea
                name="isi"
                value={formData.isi}
                onChange={handleFormChange}
                className="w-full px-4 py-2 border rounded-lg"
                rows={4}
                required
              />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600"
              >
                Simpan
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
              >
                Batal
              </button>
            </div>
          </form>
        </div>
      )}

      {/* List Artikel */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-2xl">
          <thead>
            <tr className="text-left text-gray-700 border-b border-gray-200 text-sm uppercase tracking-wider">
              <th className="px-4 py-3">Gambar</th>
              <th className="px-4 py-3">Judul</th>
              <th className="px-4 py-3">Tanggal</th>
              <th className="px-4 py-3">Isi Berita</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article.id} className="text-gray-700 border-b border-gray-200 hover:bg-gray-50 align-top">
                <td className="px-4 py-3 w-24">
                  <img
                    src={article.image}
                    alt={article.judul}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-3 font-semibold w-48">
                  <Link
                    to={`/artikel/${article.id}`}
                    className="text-black hover:underline"
                  >
                    {article.judul}
                  </Link>
                </td>
                <td className="px-4 py-3 w-32">{article.tanggal}</td>
                <td className="px-4 py-3 break-words">{article.isi}</td>
                <td className="px-4 py-3 flex gap-2">
                  <button
                    onClick={() => handleEdit(article)}
                    className="bg-yellow-500 text-white px-3 py-2 rounded-lg flex items-center space-x-2 hover:bg-yellow-600 text-sm"
                  >
                    <FaEdit />
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={() => handleDelete(article.id)}
                    className="bg-red-500 text-white px-3 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-600 text-sm"
                  >
                    <FaTrash />
                    <span>Hapus</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}