// src/components/ProductList.js
import Link from 'next/link';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Link href={`/products/${product.id}`} key={product.id}>
          <div className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
