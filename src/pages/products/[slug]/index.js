import { useRouter } from 'next/router';
import { clothingProducts } from '@/data/product';
import Image from 'next/image';
import { TbCurrencyNaira } from "react-icons/tb";
import { FaCartPlus } from "react-icons/fa6";
import { useCart } from '@/context/cartContext';

export default function ProductPage() {
  const router = useRouter();
  const { slug } = router.query;

  const product = clothingProducts.find(p => p.name.toLowerCase().replace(/\s+/g, '-') === slug);
  
  const { addToCart } = useCart();

  if (!product) {
    return <div>Product not found</div>;
  }


  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col items-center">
        <Image src={product.image} alt={product.name} width={300} height={300} className="w-full h-64 object-cover container" />
        <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
        <div className="text-gray-700 mb-2 flex items-center">
          <TbCurrencyNaira />
          {product.price.toFixed(2)}
        </div>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-gray-700 mb-2 flex text-center gap-2 items-center">
          Brand: {product.brand}
        </p>
        <p className="text-gray-700 mb-2">Material: {product.material}</p>
        <p className="text-gray-700 mb-2">
          Rating: {product.rating} ({product.reviews} reviews)
        </p>
        <div className="mt-4">
          <h3 className="text-sm font-medium">Available Sizes:</h3>
          <div className="flex gap-2">
            {product.sizes.map((size, index) => (
              <span key={index} className="px-2 py-1 bg-gray-200 rounded-md">
                {size}
              </span>
            ))}
          </div>
        </div>
        <div className="flex space-x-2 mt-4">
          {product.colors.map((color, index) => (
            <span key={index} className="bg-gray-200 rounded-md px-2 py-1">
              {color}
            </span>
          ))}
        </div>
        <button
          className="flex text-center items-center align-middle object-center bg-yellow-500 p-4 rounded-md my-4"
          onClick={() => addToCart(product)}
        >
          <span>
            <FaCartPlus />
          </span>
          <span className="ml-1">Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
