import { useCart } from "@/context/cartContext";
import Image from "next/image";
import { FaCartPlus } from "react-icons/fa6";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Clothing Products Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {clothingProducts.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-md overflow-hidden">
            <Image 
              src={product.image} 
              alt={product.name} 
              width={500} 
              height={500} 
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <span>{product.icons}</span>
              </div>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-gray-800 font-bold">${product.price.toFixed(2)}</p>
              <div className="mt-2">
                <p className="text-sm text-gray-600">Brand: {product.brand}</p>
                <p className="text-sm text-gray-600">Material: {product.material}</p>
                <p className="text-sm text-gray-600">Stock: {product.stock}</p>
                <p className="text-sm text-gray-600">Rating: {product.rating} ({product.reviews} reviews)</p>
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-medium">Available Sizes:</h3>
                <div className="flex gap-2">
                  {product.sizes.map((size, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-200 rounded-md">{size}</span>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-medium">Available Colors:</h3>
                <div className="flex gap-2">
                  {product.colors.map((color, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-200 rounded-md">{color}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
  );
}
