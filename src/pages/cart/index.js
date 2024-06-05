import Image from 'next/image';
import { useCart } from '@/context/cartContext';

export default function Cart() {
  const { cartItems } = useCart();

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="border-b py-2">
                <div className="flex items-center">
                  <Image src={item.image} alt={item.name} className="w-16 h-16 object-cover" width={400} height={400} />
                  <div className="ml-4">
                    <h2 className="text-xl">{item.name}</h2>
                    <p className="text-gray-700">${item.price.toFixed(2)}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
