import { AiFillEdit } from "react-icons/ai";
import { FAQAPI } from "../services/FAQAPI";
import { useState, useEffect } from "react";
import AlertBox from "../Components/AlertBox";
import LoadingSpinner from "../Components/LoadingSpinner";
import EmptyState from "../Components/EmptyState";
import { AiFillDelete } from "react-icons/ai";

export default function FAQ() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [faqs, setFaqs] = useState([]);
  const [dataForm, setDataForm] = useState({
    question: "",
    answer: "",
  });
  const [editId, setEditId] = useState(null);

  // Ambil data FAQ saat komponen pertama kali render
  useEffect(() => {
    loadFAQ();
  }, []);

  const loadFAQ = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await FAQAPI.fetchFAQ();
      setFaqs(Array.isArray(data) ? data : []);
    } catch (err) {
      setError("Gagal memuat FAQ");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await FAQAPI.createFAQ({
        title: dataForm.question,
        jawaban: dataForm.answer,
      });

      setSuccess("FAQ berhasil ditambahkan!");
      setDataForm({ question: "", answer: "" });
      setTimeout(() => setSuccess(""), 3000);
      loadFAQ();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Handle untuk aksi hapus data
  const handleDelete = async (id) => {
    const konfirmasi = window.confirm("Yakin ingin menghapus FAQ ini?");
    if (!konfirmasi) return;

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await FAQAPI.deleteFAQ(id);

      setSuccess("FAQ berhasil dihapus!");
      setTimeout(() => setSuccess(""), 3000);

      // Refresh data
      loadFAQ();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (faq) => {
    setEditId(faq.id);
    setDataForm({
      question: faq.title,
      answer: faq.jawaban,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      setSuccess("");
      await FAQAPI.updateFAQ(editId, {
        title: dataForm.question,
        jawaban: dataForm.answer,
      });
      setSuccess("FAQ berhasil diupdate!");
      setEditId(null);
      setDataForm({ question: "", answer: "" });
      setTimeout(() => setSuccess(""), 3000);
      loadFAQ();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-arimo max-w-6xl w-full mx-auto p-6">
      <div className="font-arimo mb-6">
        <h2 className="font-arimo text-3xl font-bold text-gray-800 mb-2">
          FAQ App
        </h2>
      </div>

      {error && <AlertBox type="error">{error}</AlertBox>}
      {success && <AlertBox type="success">{success}</AlertBox>}

      {/* Form Card */}
      <div className="font-arimo bg-white rounded-2xl shadow-lg p-6">
        <h3 className="font-arimo text-lg font-semibold text-gray-800 mb-4">
          Tambah FAQ Baru
        </h3>
        <form
          onSubmit={editId ? handleUpdate : handleSubmit}
          className="font-arimo space-y-4 text-abu500"
        >
          <input
            type="text"
            name="question"
            value={dataForm.question}
            placeholder="Pertanyaan"
            onChange={handleChange}
            disabled={loading}
            required
            className="font-arimo w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none
                        focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all
                        duration-200"
          />
          <textarea
            name="answer"
            value={dataForm.answer}
            placeholder="Isi jawaban"
            onChange={handleChange}
            disabled={loading}
            required
            rows="2"
            className="font-arimo w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none
                        focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all
                        duration-200 resize-none"
          />
          <button
            type="submit"
            className="font-arimo px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold
                        rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500
                        focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
                        transition-all duration-200 shadow-lg"
            disabled={loading}
          >
            {loading
              ? "Mohon Tunggu..."
              : editId
              ? "Update Catatan"
              : "Tambah Catatan"}
          </button>
          {editId && (
            <button
              type="button"
              onClick={() => {
                setEditId(null);
                setDataForm({ question: "", answer: "" });
              }}
              className="font-arimo ml-2 px-6 py-3 bg-gray-400 text-white rounded-2xl"
            >
              Batal Edit
            </button>
          )}
        </form>
      </div>

      {/* Notes Table & State */}
      <div className="font-arimo bg-white rounded-2xl shadow-lg overflow-x-auto mt-10">
        <div className="font-arimo w-full">
          <div className="font-arimo px-6 py-4 ">
            <h3 className="font-arimo text-lg text-abu500 font-semibold">
              Daftar FAQ ({faqs.length})
            </h3>
          </div>

          {loading && <LoadingSpinner text="Memuat FAQ..." />}

          {!loading && faqs.length === 0 && !error && (
            <EmptyState text="Belum ada FAQ. Tambah FAQ pertama!" />
          )}

          {!loading && faqs.length === 0 && error && (
            <EmptyState text="Terjadi Kesalahan. Coba lagi nanti." />
          )}

          {!loading && faqs.length > 0 ? (
            <table className="font-arimo min-w-full bg-white">
              <thead>
                <tr>
                  <th className="font-arimo px-6 py-4 text-left font-bold text-abu500 border-b border-gray-200">
                    #
                  </th>
                  <th className="font-arimo px-6 py-4 text-left font-bold text-abu500 border-b border-gray-200">
                    Pertanyaan
                  </th>
                  <th className="font-arimo px-6 py-4 text-left font-bold text-abu500 border-b border-gray-200">
                    Jawaban
                  </th>
                  <th className="font-arimo px-6 py-4 text-left font-bold text-abu500 border-b border-gray-200">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {faqs.map((faq, index) => (
                  <tr key={faq.id}>
                    <td className="font-arimo px-6 py-4 border-b border-gray-200 text-abu500">
                      {index + 1}.
                    </td>
                    <td className="font-arimo px-6 py-4 border-b border-gray-200">
                      <div className="font-arimo font-semibold text-teal-600">
                        {faq.title}
                      </div>
                    </td>
                    <td className="font-arimo px-6 py-4 border-b border-gray-200 break-words">
                      <div className="font-arimo text-gray-600">
                        {faq.jawaban}
                      </div>
                    </td>
                    <td className="font-arimo px-6 py-4 border-b border-gray-200">
                      <div className="font-arimo flex flex-col space-y-2">
                        <button
                          onClick={() => handleEdit(faq)}
                          className="font-arimo w-full bg-teal-500 hover:bg-teal-700 transition-colors text-white px-4 py-2 rounded-lg flex items-center gap-2"
                        >
                          <AiFillEdit className="font-arimo text-2xl text-yellow-500" />
                        </button>
                        <button
                          onClick={() => handleDelete(faq.id)}
                          className="font-arimo w-full px-4 py-2 rounded-lg flex items-center gap-2 bg-red-200 hover:bg-red-400 transition-colors"
                        >
                          <AiFillDelete className="font-arimo text-2xl text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
        </div>
      </div>
    </div>
  );
}
