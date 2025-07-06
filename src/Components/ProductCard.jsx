import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function ProductCard({
  product,
  onEdit,
  onDelete,
  isEditing,
  editForm,
  onEditChange,
  onEditSave,
  onEditCancel,
}) {
  return (
    <div className="font-arimo border rounded-lg shadow p-4 flex flex-col items-center bg-gray-50 relative">
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="font-arimo w-32 h-32 object-cover rounded mb-3"
        />
      )}
      <div className="font-arimo font-semibold text-lg mb-1">
        {product.name}
      </div>
      <div className="font-arimo text-sm text-gray-600 mb-1">
        {product.brand}
      </div>
      <div className="font-arimo text-sm text-gray-600 mb-1">
        Kategori: {product.category}
      </div>
      <div className="font-arimo text-sm text-gray-600 mb-1">
        Stok: {product.stock}
      </div>
      <div className="font-arimo text-teal-600 font-bold mb-2">
        {product.price
          ? `Rp ${Number(product.price).toLocaleString("id-ID")}`
          : ""}
      </div>
      <div className="font-arimo text-xs text-gray-500 mb-2 text-center">
        {product.description}
      </div>
      <div className="font-arimo flex gap-2 mt-2">
        <button
          onClick={() => onEdit(product)}
          className="font-arimo bg-yellow-500 text-white px-3 py-2 rounded-lg flex items-center space-x-2 hover:bg-yellow-600 text-sm"
        >
          <FaEdit />
          <span>Edit</span>
        </button>
        <button
          onClick={() => onDelete(product.id)}
          className="font-arimo bg-red-500 text-white px-3 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-600 text-sm"
        >
          <FaTrash />
          <span>Hapus</span>
        </button>
      </div>
      {/* Edit Form Overlay */}
      {isEditing && (
        <div className="font-arimo absolute left-0 top-0 w-full h-full bg-white bg-opacity-95 flex flex-col justify-center items-center z-10 p-4 rounded-lg shadow-lg">
          <ProductForm
            formData={editForm}
            onChange={onEditChange}
            onSubmit={onEditSave}
            onCancel={onEditCancel}
            isEdit
          />
        </div>
      )}
    </div>
  );
}

// Import ProductForm di atas file ini:
// import ProductForm from "./ProductForm";
