import PageHeader from "../Components/PageHeader";
import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa"; // Import ikon Edit, Delete, dan Add

export default function Karyawan() {
  const [employees, setEmployees] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false); // State untuk menampilkan atau menyembunyikan form tambah karyawan
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    position: "",
    photo: "",
  }); // State untuk form tambah karyawan
  const [editingEmployee, setEditingEmployee] = useState(null); // State untuk menyimpan karyawan yang sedang diedit
  const [editFormData, setEditFormData] = useState({
    name: "",
    position: "",
    photo: "",
  }); // State untuk form edit karyawan

  // Fetch data dari karyawan.json
  useEffect(() => {
    fetch("/data/karyawan.json")
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error("Error fetching employee data:", error));
  }, []);

  // Handle perubahan input form tambah karyawan
  const handleNewEmployeeChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prev) => ({ ...prev, [name]: value }));
  };

  // Handle tambah karyawan
  const handleAddEmployee = () => {
    const newId =
      employees.length > 0 ? employees[employees.length - 1].id + 1 : 1; // Generate ID baru
    const newEmployeeData = { id: newId, ...newEmployee };
    setEmployees((prev) => [...prev, newEmployeeData]); // Tambahkan karyawan baru ke daftar
    setNewEmployee({ name: "", position: "", photo: "" }); // Reset form tambah karyawan
    setShowAddForm(false); // Sembunyikan form setelah menambahkan karyawan
  };

  // Handle delete karyawan
  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  // Handle edit karyawan
  const handleEdit = (employee) => {
    setEditingEmployee(employee.id); // Set ID karyawan yang sedang diedit
    setEditFormData({
      name: employee.name,
      position: employee.position,
      photo: employee.photo,
    }); // Isi form dengan data karyawan
  };

  // Handle perubahan input form edit karyawan
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle simpan perubahan setelah edit
  const handleSaveEdit = () => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === editingEmployee
        ? { ...employee, ...editFormData }
        : employee
    );
    setEmployees(updatedEmployees);
    setEditingEmployee(null); // Reset editing state
    setEditFormData({ name: "", position: "", photo: "" }); // Reset form edit
  };

  return (
    <div className="p-4">
      <PageHeader title="Dashboard" breadcrumb={["List Karyawan"]} />
      {!showAddForm && (
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 flex items-center space-x-2 mb-6"
        >
          <FaPlus />
          <span>Tambah Karyawan</span>
        </button>
      )}

      {/* Form Tambah Karyawan */}
      {showAddForm && (
        <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Tambah Karyawan</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Nama</label>
            <input
              type="text"
              name="name"
              value={newEmployee.name}
              onChange={handleNewEmployeeChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Posisi</label>
            <input
              type="text"
              name="position"
              value={newEmployee.position}
              onChange={handleNewEmployeeChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Photo URL</label>
            <input
              type="text"
              name="photo"
              value={newEmployee.photo}
              onChange={handleNewEmployeeChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handleAddEmployee}
              className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600"
            >
              Simpan
            </button>
            <button
              onClick={() => setShowAddForm(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              Batal
            </button>
          </div>
        </div>
      )}

      {/* Employee Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0 bg-white">
          <thead>
            <tr>
              <th className="border-b border-gray-200 text-gray-400">NAMA</th>
              <th className="border-b border-gray-200 text-gray-400">POSISI</th>
              <th className="border-b border-gray-200 text-gray-400">PHOTO</th>
              <th className="border-b border-gray-200 text-gray-400">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <React.Fragment key={employee.id}>
                <tr className="border-t hover:bg-gray-50">
                  {/* Name */}
                  <td className="border-b border-gray-200 px-6 py-4 text-gray-800 font-semibold">
                    {employee.name}
                  </td>

                  {/* Position */}
                  <td className="border-b border-gray-200 px-6 py-4 text-gray-800">
                    {employee.position}
                  </td>

                  {/* Photo */}
                  <td className="border-b border-gray-200 px-6 py-4">
                    <img
                      src={employee.photo}
                      alt={employee.name}
                      className="w-10 h-10 rounded-full"
                    />
                  </td>

                  {/* Action */}
                  <td className="border-b border-gray-200 px-6 py-4 flex space-x-2">
                    <button
                      onClick={() => handleEdit(employee)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-yellow-600"
                    >
                      <FaEdit />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => handleDelete(employee.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-600"
                    >
                      <FaTrash />
                      <span>Delete</span>
                    </button>
                  </td>
                </tr>

                {/* Edit Form */}
                {editingEmployee === employee.id && (
                  <tr>
                    <td colSpan="4" className="bg-gray-100 p-4">
                      <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">
                          Edit Karyawan
                        </h3>
                        <div className="mb-4">
                          <label className="block text-gray-700">Nama</label>
                          <input
                            type="text"
                            name="name"
                            value={editFormData.name}
                            onChange={handleEditChange}
                            className="w-full px-4 py-2 border rounded-lg"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700">Posisi</label>
                          <input
                            type="text"
                            name="position"
                            value={editFormData.position}
                            onChange={handleEditChange}
                            className="w-full px-4 py-2 border rounded-lg"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700">
                            Photo URL
                          </label>
                          <input
                            type="text"
                            name="photo"
                            value={editFormData.photo}
                            onChange={handleEditChange}
                            className="w-full px-4 py-2 border rounded-lg"
                          />
                        </div>
                        <button
                          onClick={handleSaveEdit}
                          className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                        >
                          Simpan
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
