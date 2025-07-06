import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { UserRoleAPI } from "../services/UserRole";
import { useState, useEffect } from "react";
import AlertBox from "../Components/AlertBox";
import GenericTable from "../Components/GenericTable";
import LoadingSpinner from "../Components/LoadingSpinner";
import EmptyState from "../Components/EmptyState";

export default function UserRole() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [userRole, setUserRole] = useState([]);
  const [dataForm, setDataForm] = useState({
    nama: "",
    email: "",
    password: "",
    role: "",
    status_user: "",
  });
  const [editId, setEditId] = useState(null);

  // Ambil data user role saat komponen pertama kali render
  useEffect(() => {
    loadUserRole();
  }, []);

  const loadUserRole = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await UserRoleAPI.fetchUserRole();
      setUserRole(Array.isArray(data) ? data : []);
    } catch (err) {
      setError("Gagal memuat user role");
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

      await UserRoleAPI.createUserRole({
        nama: dataForm.nama,
        email: dataForm.email,
        password: dataForm.password,
        role: dataForm.role,
        status_user: dataForm.status_user,
      });

      setSuccess("User berhasil ditambahkan!");
      setDataForm({
        nama: "",
        email: "",
        password: "",
        role: "",
        status_user: "",
      });
      setTimeout(() => setSuccess(""), 3000);
      loadUserRole();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Handle untuk aksi hapus data
  const handleDelete = async (id) => {
    const konfirmasi = window.confirm("Yakin ingin menghapus user ini?");
    if (!konfirmasi) return;

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await UserRoleAPI.deleteUserRole(id);

      setSuccess("User berhasil dihapus!");
      setTimeout(() => setSuccess(""), 3000);

      // Refresh data
      loadUserRole();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setDataForm({
      nama: item.nama,
      email: item.email,
      password: item.password,
      role: item.role,
      status_user: item.status_user,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      setSuccess("");
      await UserRoleAPI.updateUserRole(editId, dataForm);
      setSuccess("User berhasil diupdate!");
      setEditId(null);
      setDataForm({
        nama: "",
        email: "",
        password: "",
        role: "",
        status_user: "",
      });
      setTimeout(() => setSuccess(""), 3000);
      loadUserRole();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl w-full mx-auto p-6">
      {" "}
      {/* Ubah max-w-2xl ke max-w-6xl */}
      <div className="mb-6">
        <h2 className="font-arimo text-3xl font-bold text-gray-800 mb-2">
          User Role App
        </h2>
      </div>
      {error && <AlertBox type="error">{error}</AlertBox>}
      {success && <AlertBox type="success">{success}</AlertBox>}
      {/* User Role Table & State */}
      <div className="font-arimo bg-white rounded-2xl shadow-lg overflow-x-auto">
        <div className="px-6 py-4 ">
          <h3 className="font-arimo text-lg font-semibold text-abu500">
            Daftar User ({userRole.length})
          </h3>
        </div>

        {loading && <LoadingSpinner text="Memuat user..." />}

        {!loading && userRole.length === 0 && !error && (
          <EmptyState text="Belum ada user. Tambah user pertama!" />
        )}

        {!loading && userRole.length === 0 && error && (
          <EmptyState text="Terjadi Kesalahan. Coba lagi nanti." />
        )}

        {!loading && userRole.length > 0 ? (
          <div className="w-full">
            {" "}
            {/* Ubah min-w-[900px] ke w-full */}
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="font-arimo px-6 py-4 text-left font-bold text-gray-500 border-b border-gray-200">
                    #
                  </th>
                  <th className="font-arimo px-6 py-4 text-left font-bold text-gray-500 border-b border-gray-200">
                    Nama
                  </th>
                  <th className="font-arimo px-6 py-4 text-left font-bold text-gray-500 border-b border-gray-200">
                    Email
                  </th>
                  <th className="font-arimo px-6 py-4 text-left font-bold text-gray-500 border-b border-gray-200">
                    Password
                  </th>
                  <th className="font-arimo px-6 py-4 text-left font-bold text-gray-500 border-b border-gray-200">
                    Role
                  </th>
                  <th className="font-arimo px-6 py-4 text-left font-bold text-gray-500 border-b border-gray-200">
                    Status User
                  </th>
                  <th className="font-arimo px-6 py-4 text-left font-bold text-gray-500 border-b border-gray-200">
                    Created At
                  </th>
                </tr>
              </thead>
              <tbody>
                {userRole.map((user, idx) => (
                  <tr key={user.id}>
                    <td className="font-arimo px-6 py-4 border-b border-gray-200 align-top font-semibold text-gray-700">
                      {idx + 1}.
                    </td>
                    <td className="font-arimo px-6 py-4 border-b border-gray-200 align-top text-teal-700">
                      {user.nama}
                    </td>
                    <td className="font-arimo px-6 py-4 border-b border-gray-200 align-top text-gray-700">
                      {user.email}
                    </td>
                    <td className="font-arimo px-6 py-4 border-b border-gray-200 align-top text-gray-700">
                      {user.password}
                    </td>
                    <td className="font-arimo px-6 py-4 border-b border-gray-200 align-top text-gray-700">
                      {user.role}
                    </td>
                    <td className="font-arimo px-6 py-4 border-b border-gray-200 align-top text-gray-700">
                      {user.status_user}
                    </td>
                    <td className="font-arimo px-6 py-4 border-b border-gray-200 align-top text-gray-700">
                      {user.created_at}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </div>
  );
}
