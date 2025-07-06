import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { KontakAPI } from "../services/KontakAPI";
import { useState, useEffect } from "react";
import AlertBox from "../Components/AlertBox";
import GenericTable from "../Components/GenericTable";
import LoadingSpinner from "../Components/LoadingSpinner";
import EmptyState from "../Components/EmptyState";

export default function Kontak() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [kontak, setKontak] = useState([]);
  const [dataForm, setDataForm] = useState({
    namaPengirim: "",
    email: "",
    subjekPesan: "",
    isiPesan: "",
    tanggalKirim: "",
    status: "",
  });
  const [editId, setEditId] = useState(null);

  // Ambil data kontak saat komponen pertama kali render
  useEffect(() => {
    loadKontak();
  }, []);

  const loadKontak = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await KontakAPI.fetchKontak();
      setKontak(Array.isArray(data) ? data : []);
    } catch (err) {
      setError("Gagal memuat kontak");
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

      await KontakAPI.createKontak({
        namaPengirim: dataForm.namaPengirim,
        email: dataForm.email,
        subjekPesan: dataForm.subjekPesan,
        isiPesan: dataForm.isiPesan,
        tanggalKirim: dataForm.tanggalKirim,
        status: dataForm.status,
      });

      setSuccess("Kontak berhasil ditambahkan!");
      setDataForm({
        namaPengirim: "",
        email: "",
        subjekPesan: "",
        isiPesan: "",
        tanggalKirim: "",
        status: "",
      });
      setTimeout(() => setSuccess(""), 3000);
      loadKontak();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Handle untuk aksi hapus data
  const handleDelete = async (id) => {
    const konfirmasi = window.confirm("Yakin ingin menghapus kontak ini?");
    if (!konfirmasi) return;

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await KontakAPI.deleteKontak(id);

      setSuccess("Kontak berhasil dihapus!");
      setTimeout(() => setSuccess(""), 3000);

      // Refresh data
      loadKontak();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setDataForm({
      namaPengirim: item.namaPengirim,
      email: item.email,
      subjekPesan: item.subjekPesan,
      isiPesan: item.isiPesan,
      tanggalKirim: item.tanggalKirim,
      status: item.status,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      setSuccess("");
      await KontakAPI.updateKontak(editId, dataForm);
      setSuccess("Kontak berhasil diupdate!");
      setEditId(null);
      setDataForm({
        namaPengirim: "",
        email: "",
        subjekPesan: "",
        isiPesan: "",
        tanggalKirim: "",
        status: "",
      });
      setTimeout(() => setSuccess(""), 3000);
      loadKontak();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl w-full mx-auto p-6">
      <div className="mb-6">
        <h2 className="font-arimo text-3xl font-bold text-gray-800 mb-2">
          Kontak App
        </h2>
      </div>

      {error && <AlertBox type="error">{error}</AlertBox>}
      {success && <AlertBox type="success">{success}</AlertBox>}

      {/* Kontak Table & State */}
      <div className="bg-white rounded-2xl shadow-lg overflow-x-auto mt-10">
        <div className="w-full">
          <div className="px-6 py-4 ">
            <h3 className="font-arimo text-lg font-semibold text-abu500">
              Daftar Kontak ({kontak.length})
            </h3>
          </div>

          {loading && <LoadingSpinner text="Memuat kontak..." />}

          {!loading && kontak.length === 0 && !error && (
            <EmptyState text="Belum ada kontak. Tambah kontak pertama!" />
          )}

          {!loading && kontak.length === 0 && error && (
            <EmptyState text="Terjadi Kesalahan. Coba lagi nanti." />
          )}

          {!loading && kontak.length > 0 ? (
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="font-arimo px-6 py-4 text-left font-bold text-abu500 border-b border-gray-200">
                    #
                  </th>
                  <th className="font-arimo px-6 py-4 text-left font-bold text-abu500 border-b border-gray-200">
                    Nama
                  </th>
                  <th className="font-arimo px-6 py-4 text-left font-bold text-abu500 border-b border-gray-200">
                    Email
                  </th>
                  <th className="font-arimo px-6 py-4 text-left font-bold text-abu500 border-b border-gray-200">
                    Pesan
                  </th>
                  <th className="font-arimo px-6 py-4 text-left font-bold text-abu500 border-b border-gray-200">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {kontak.map((item, index) => (
                  <tr key={item.id}>
                    <td className="font-arimo px-6 py-4 border-b border-gray-200 align-top font-semibold text-abu500">
                      {index + 1}.
                    </td>
                    <td className="font-arimo px-6 py-4 border-b border-gray-200 align-top">
                      <div className="font-semibold text-teal-600">
                        {item.namaPengirim}
                      </div>
                    </td>
                    <td className="font-arimo px-6 py-4 border-b border-gray-200 align-top">
                      <div className="text-abu500">{item.email}</div>
                    </td>
                    <td className="font-arimo px-6 py-4 border-b border-gray-200 align-top max-w-xs">
                      <div className="text-abu500">{item.isiPesan}</div>
                    </td>
                    <td className="font-arimo px-6 py-4 border-b border-gray-200 align-top">
                      <div className="flex gap-2 items-center">
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="font-arimo px-3 py-1 bg-red-100 rounded hover:bg-red-200 transition-colors"
                          title="Hapus"
                        >
                          <AiFillDelete className="text-2xl text-red-500" />
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
