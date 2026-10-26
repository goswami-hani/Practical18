import React from "react";

function ProductList({ products, onEdit }) {
  return (
    <div className="list-container">
      <h2>Product List</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>₹{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button onClick={() => onEdit(product)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;