import React, { useState } from "react";
import ProductList from "./Component/ProductList";
import ProductForm from "./Component/ProductForm";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 50000, quantity: 5 },
    { id: 2, name: "Mobile", price: 20000, quantity: 10 },
    { id: 3, name: "Headphones", price: 1500, quantity: 15 },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [message, setMessage] = useState("");

  const handleEdit = (product) => {
    setSelectedProduct({ ...product });
    setMessage("");
  };

  const handleChange = (field, value) => {
    setSelectedProduct((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleUpdate = () => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === selectedProduct.id
          ? {
              ...selectedProduct,
              price: Number(selectedProduct.price),
              quantity: Number(selectedProduct.quantity),
            }
          : product
      )
    );

    setMessage("Product updated successfully!");
    setSelectedProduct(null);
  };

  return (
    <div className="app">
      <h1>Product Management System</h1>
      <p className="subtitle">Update Operation</p>

      {message && <p className="success">{message}</p>}

      <ProductList
        products={products}
        onEdit={handleEdit}
      />

      {selectedProduct && (
        <ProductForm
          product={selectedProduct}
          onChange={handleChange}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
}

export default App;