import { useCart } from "@/context/cartContext";
import Image from "next/image";
import { FaCartPlus } from "react-icons/fa6";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <Image src={product.image} alt={product.name} className="w-full h-48 object-cover" width={300} height={300} />
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
        <button
          className="flex text-center items-center align-middle object-center bg-yellow-500 p-4 rounded-md my-4"
          onClick={() => addToCart(product)}
        >
          <span><FaCartPlus /></span>
          <span className="ml-1">Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
