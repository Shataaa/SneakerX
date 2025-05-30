import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

export default function LowonganKerja() {
  const [jobs, setJobs] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newJob, setNewJob] = useState({
    posisi: "",
    perusahaan: "",
    lokasi: "",
    deskripsi: "",
  });
  const [editingJob, setEditingJob] = useState(null);
  const [editFormData, setEditFormData] = useState({
    posisi: "",
    perusahaan: "",
    lokasi: "",
    deskripsi: "",
  });

  // Fetch data dari jobs.json
  useEffect(() => {
    fetch("/data/jobs.json")
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error fetching jobs data:", error));
  }, []);

  // Handle perubahan input form tambah
  const handleNewJobChange = (e) => {
    const { name, value } = e.target;
    setNewJob((prev) => ({ ...prev, [name]: value }));
  };

  // Handle tambah lowongan
  const handleAddJob = () => {
    const newId = jobs.length > 0 ? jobs[jobs.length - 1].id + 1 : 1;
    const newJobData = { id: newId, ...newJob };
    setJobs((prev) => [...prev, newJobData]);
    setNewJob({ posisi: "", perusahaan: "", lokasi: "", deskripsi: "" });
    setShowAddForm(false);
  };

  // Handle delete lowongan
  const handleDelete = (id) => {
    const updatedJobs = jobs.filter((job) => job.id !== id);
    setJobs(updatedJobs);
  };

  // Handle edit lowongan
  const handleEdit = (job) => {
    setEditingJob(job.id);
    setEditFormData({
      posisi: job.posisi,
      perusahaan: job.perusahaan,
      lokasi: job.lokasi,
      deskripsi: job.deskripsi,
    });
  };

  // Handle perubahan input form edit
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle simpan perubahan setelah edit
  const handleSaveEdit = () => {
    const updatedJobs = jobs.map((job) =>
      job.id === editingJob ? { ...job, ...editFormData } : job
    );
    setJobs(updatedJobs);
    setEditingJob(null);
    setEditFormData({ posisi: "", perusahaan: "", lokasi: "", deskripsi: "" });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Manajemen Lowongan Kerja</h2>

      {/* Button Tambah Lowongan */}
      {!showAddForm && (
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 flex items-center space-x-2 mb-6"
        >
          <FaPlus />
          <span>Tambah Lowongan</span>
        </button>
      )}

      {/* Form Tambah Lowongan */}
      {showAddForm && (
        <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Tambah Lowongan</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Posisi</label>
            <input
              type="text"
              name="posisi"
              value={newJob.posisi}
              onChange={handleNewJobChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Perusahaan</label>
            <input
              type="text"
              name="perusahaan"
              value={newJob.perusahaan}
              onChange={handleNewJobChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Lokasi</label>
            <input
              type="text"
              name="lokasi"
              value={newJob.lokasi}
              onChange={handleNewJobChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Deskripsi</label>
            <textarea
              name="deskripsi"
              value={newJob.deskripsi}
              onChange={handleNewJobChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handleAddJob}
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

      {/* Jobs Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse bg-white rounded-lg shadow-md">
          <thead>
            <tr className="text-left text-gray-500 text-sm uppercase tracking-wider">
              <th className="px-6 py-3">Posisi</th>
              <th className="px-6 py-3">Perusahaan</th>
              <th className="px-6 py-3">Lokasi</th>
              <th className="px-6 py-3">Deskripsi</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <React.Fragment key={job.id}>
                <tr className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-800 font-semibold">
                    {job.posisi}
                  </td>
                  <td className="px-6 py-4 text-gray-800">{job.perusahaan}</td>
                  <td className="px-6 py-4 text-gray-800">{job.lokasi}</td>
                  <td className="px-6 py-4 text-gray-800">{job.deskripsi}</td>
                  <td className="px-6 py-4 flex space-x-2">
                    <button
                      onClick={() => handleEdit(job)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-yellow-600"
                    >
                      <FaEdit />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => handleDelete(job.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-600"
                    >
                      <FaTrash />
                      <span>Delete</span>
                    </button>
                  </td>
                </tr>
                {/* Edit Form */}
                {editingJob === job.id && (
                  <tr>
                    <td colSpan="5" className="bg-gray-100 p-4">
                      <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">
                          Edit Lowongan
                        </h3>
                        <div className="mb-4">
                          <label className="block text-gray-700">Posisi</label>
                          <input
                            type="text"
                            name="posisi"
                            value={editFormData.posisi}
                            onChange={handleEditChange}
                            className="w-full px-4 py-2 border rounded-lg"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700">Perusahaan</label>
                          <input
                            type="text"
                            name="perusahaan"
                            value={editFormData.perusahaan}
                            onChange={handleEditChange}
                            className="w-full px-4 py-2 border rounded-lg"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700">Lokasi</label>
                          <input
                            type="text"
                            name="lokasi"
                            value={editFormData.lokasi}
                            onChange={handleEditChange}
                            className="w-full px-4 py-2 border rounded-lg"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700">Deskripsi</label>
                          <textarea
                            name="deskripsi"
                            value={editFormData.deskripsi}
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
                        <button
                          onClick={() => setEditingJob(null)}
                          className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                        >
                          Batal
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