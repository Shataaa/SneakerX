import PageHeader from "../Components/PageHeader";
import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

export default function Karyawan() {
  const [employees, setEmployees] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    position: "",
    photo: "",
  });
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    position: "",
    photo: "",
  });

  useEffect(() => {
    fetch("/data/karyawan.json")
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error("Error fetching employee data:", error));
  }, []);

  const handleNewEmployeeChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddEmployee = () => {
    const newId =
      employees.length > 0 ? employees[employees.length - 1].id + 1 : 1;
    const newEmployeeData = { id: newId, ...newEmployee };
    setEmployees((prev) => [...prev, newEmployeeData]);
    setNewEmployee({ name: "", position: "", photo: "" });
    setShowAddForm(false);
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

      {showAddForm && (
        <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
          <h3 className="font-arimo text-xl font-semibold mb-4 text-abu500">
            Tambah Karyawan
          </h3>
          <div className="mb-4">
            <label className="font-arimo block text-gray-700">Nama</label>
            <input
              type="text"
              name="name"
              value={newEmployee.name}
              onChange={handleNewEmployeeChange}
              className="font-arimo w-full px-4 py-2 border rounded-lg text-abu500"
            />
          </div>
          <div className="mb-4">
            <label className="font-arimo block text-gray-700">Posisi</label>
            <input
              type="text"
              name="position"
              value={newEmployee.position}
              onChange={handleNewEmployeeChange}
              className="font-arimo w-full px-4 py-2 border rounded-lg text-abu500"
            />
          </div>
          <div className="mb-4">
            <label className="font-arimo block text-gray-700">Photo URL</label>
            <input
              type="text"
              name="photo"
              value={newEmployee.photo}
              onChange={handleNewEmployeeChange}
              className="font-arimo w-full px-4 py-2 border rounded-lg text-abu500"
            />
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handleAddEmployee}
              className="font-arimo bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600"
            >
              Simpan
            </button>
            <button
              onClick={() => setShowAddForm(false)}
              className="font-arimo bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              Batal
            </button>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0 bg-white rounded-2xl">
          <thead>
            <tr>
              <th className="font-arimo border-b border-gray-200 text-gray-400 px-6 py-3 text-left">
                NAMA
              </th>
              <th className="font-arimo border-b border-gray-200 text-gray-400 px-6 py-3 text-left">
                POSISI
              </th>
              <th className="font-arimo border-b border-gray-200 text-gray-400 px-6 py-3 text-left">
                PHOTO
              </th>
              <th className="font-arimo border-b border-gray-200 text-gray-400 px-6 py-3 text-left">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="border-t hover:bg-gray-50">
                <td className="font-arimo border-b border-gray-200 px-6 py-4 text-gray-800 font-semibold">
                  {employee.name}
                </td>
                <td className="font-arimo border-b border-gray-200 px-6 py-4 text-gray-800">
                  {employee.position}
                </td>
                <td className="font-arimo border-b border-gray-200 px-6 py-4">
                  <img
                    src={employee.photo}
                    alt={employee.name}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="font-arimo border-b border-gray-200 px-6 py-4">
                  <div className="flex space-x-2">
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-yellow-600">
                      <FaEdit />
                      <span>Edit</span>
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-600">
                      <FaTrash />
                      <span>Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
