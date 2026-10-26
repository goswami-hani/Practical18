import React from "react";

function ProductForm({ product, onChange, onUpdate }) {
  if (!product) {
    return <p>Please select a product to update.</p>;
  }

  return (
    <div className="form-container">
      <h2>Update Product</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onUpdate();
        }}
      >
        <label>Product Name</label>
        <input
          type="text"
          value={product.name}
          onChange={(e) => onChange("name", e.target.value)}
          required
        />

        <label>Price (₹)</label>
        <input
          type="number"
          min="0"
          step="0.01"
          value={product.price}
          onChange={(e) => onChange("price", e.target.value)}
          required
        />

        <label>Quantity</label>
        <input
          type="number"
          min="0"
          step="1"
          value={product.quantity}
          onChange={(e) => onChange("quantity", e.target.value)}
          required
        />

        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default ProductForm;