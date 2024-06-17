import { useCart } from "@/context/cartContext";
import { TbCurrencyNaira } from "react-icons/tb";
import Image from "next/image";
import { FaCartPlus } from "react-icons/fa6";
import Link from 'next/link';

export default function ProductCard({ product }) {

  const { addToCart } = useCart();
  const slug = product.name.toLowerCase().replace(/\s+/g, '-');

  return (
    <Link href={`/products/${slug}`}>
      <div className="border rounded-lg overflow-hidden hover:shadow-2xl cursor-pointer">
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
          width={300}
          height={300}
        />
        <div className="p-4">
          <div className="flex items-center mb-2">
            {product.icons}
            <h2 className="text-xl font-semibold ml-2">{product.name}</h2>
          </div>
          <p className="text-gray-700 mb-2">{product.category}</p>
          <p className="text-gray-700 mb-2 flex items-center">
            <TbCurrencyNaira />
            {product.price.toFixed(2)}
          </p>
          {/* <p className="text-gray-700 mb-4">{product.description}</p> */}
          <p className="text-gray-700 mb-2 flex text-center gap-2 items-center">
            Brand: {product.brand}
          </p>
          <p className="text-gray-700 mb-2">Material: {product.material}</p>
          <p className="text-gray-700 mb-2">
            Rating: {product.rating} ({product.reviews} reviews)
          </p>
          <div className="flex space-x-2 mt-4">
            {product.colors.map((color, index) => (
              <span key={index} className="bg-gray-200 rounded-md px-2 py-1">
                {color}
              </span>
            ))}
          </div>
          <button
            className="flex text-center items-center align-middle object-center bg-yellow-500 p-4 rounded-md my-4"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
          >
            <span>
              <FaCartPlus />
            </span>
            <span className="ml-1">Add to Cart</span>
          </button>
        </div>
      </div>
    </Link>
  );
}
