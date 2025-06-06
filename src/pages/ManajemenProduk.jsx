import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import ProductForm from "../Components/ProductForm";
import ProductCard from "../Components/ProductCard";

export default function ManajemenProduk() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    brand: "",
    price: "",
    category: "",
    image: "",
    description: "",
    stock: "",
  });
  const [editingProduct, setEditingProduct] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    brand: "",
    price: "",
    category: "",
    image: "",
    description: "",
    stock: "",
  });

  useEffect(() => {
    fetch("/data/Product.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Tambah produk
  const handleNewProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };
  const handleAddProduct = () => {
    const newId =
      products.length > 0
        ? (products[products.length - 1].id || products.length) + 1
        : 1;
    const newProductData = {
      id: newId,
      ...newProduct,
      price: Number(newProduct.price),
      stock: Number(newProduct.stock),
    };
    setProducts((prev) => [...prev, newProductData]);
    setNewProduct({
      name: "",
      brand: "",
      price: "",
      category: "",
      image: "",
      description: "",
      stock: "",
    });
    setShowAddForm(false);
  };

  // Hapus produk
  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus produk ini?")) {
      setProducts((prev) => prev.filter((product) => product.id !== id));
    }
  };

  // Edit produk
  const handleEdit = (product) => {
    setEditingProduct(product.id);
    setEditFormData({
      name: product.name || "",
      brand: product.brand || "",
      price: product.price || "",
      category: product.category || "",
      image: product.image || "",
      description: product.description || "",
      stock: product.stock || "",
    });
  };
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSaveEdit = () => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === editingProduct
          ? {
              ...product,
              ...editFormData,
              price: Number(editFormData.price),
              stock: Number(editFormData.stock),
            }
          : product
      )
    );
    setEditingProduct(null);
    setEditFormData({
      name: "",
      brand: "",
      price: "",
      category: "",
      image: "",
      description: "",
      stock: "",
    });
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto bg-white p-4 rounded shadow text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Daftar Produk</h2>
      {!showAddForm && (
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 flex items-center space-x-2 mb-6"
        >
          <FaPlus />
          <span>Tambah Produk</span>
        </button>
      )}
      {showAddForm && (
        <ProductForm
          formData={newProduct}
          onChange={handleNewProductChange}
          onSubmit={handleAddProduct}
          onCancel={() => setShowAddForm(false)}
        />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onEdit={handleEdit}
            onDelete={handleDelete}
            isEditing={editingProduct === product.id}
            editForm={editFormData}
            onEditChange={handleEditChange}
            onEditSave={handleSaveEdit}
            onEditCancel={() => setEditingProduct(null)}
          />
        ))}
      </div>
    </div>
  );
}