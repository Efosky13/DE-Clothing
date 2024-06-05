// src/components/ProductCard.js
import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <Image src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex items-center mb-2">
          {product.icons}
          <h2 className="text-xl font-semibold ml-2">{product.name}</h2>
        </div>
        <p className="text-gray-700 mb-2">{product.category}</p>
        <p className="text-gray-700 mb-2">${product.price.toFixed(2)}</p>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-gray-700 mb-2">Brand: {product.brand}</p>
        <p className="text-gray-700 mb-2">Material: {product.material}</p>
        <p className="text-gray-700 mb-2">Rating: {product.rating} ({product.reviews} reviews)</p>
        <div className="flex space-x-2 mt-4">
          {product.colors.map((color, index) => (
            <span key={index} className="inline-block w-6 h-6 rounded-full" style={{ backgroundColor: color.toLowerCase() }}></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
