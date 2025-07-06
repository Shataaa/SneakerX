import React from "react";

export default function ProductForm({
  formData,
  onChange,
  onSubmit,
  onCancel,
  isEdit = false,
}) {
  return (
    <div className="font-arimo mb-6 p-4 bg-gray-100 rounded-lg shadow-md w-full max-w-lg mx-auto">
      <h3 className="font-arimo text-xl font-semibold mb-4">
        {isEdit ? "Edit Produk" : "Tambah Produk"}
      </h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="font-arimo"
      >
        <div className="font-arimo mb-4">
          <label className="font-arimo block text-gray-700">Nama Produk</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onChange}
            className="font-arimo w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="font-arimo mb-4">
          <label className="font-arimo block text-gray-700">Brand</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={onChange}
            className="font-arimo w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="font-arimo mb-4">
          <label className="font-arimo block text-gray-700">Harga</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={onChange}
            className="font-arimo w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="font-arimo mb-4">
          <label className="font-arimo block text-gray-700">Kategori</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={onChange}
            className="font-arimo w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="font-arimo mb-4">
          <label className="font-arimo block text-gray-700">URL Gambar</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={onChange}
            className="font-arimo w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="font-arimo mb-4">
          <label className="font-arimo block text-gray-700">Deskripsi</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={onChange}
            className="font-arimo w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="font-arimo mb-4">
          <label className="font-arimo block text-gray-700">Stok</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={onChange}
            className="font-arimo w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="font-arimo flex space-x-4">
          <button
            type="submit"
            className="font-arimo bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600"
          >
            Simpan
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="font-arimo bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}
