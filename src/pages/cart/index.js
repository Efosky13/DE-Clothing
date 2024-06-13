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
          <div className=' grid grid-cols-2 gap-2 py-2 rounded-md'>
            {cartItems.map((item, index) => (
              <div key={index}>
                <div className="flex items-center border-b-2 hover:shadow-md">
                  <Image src={item.image} alt={item.name} className="w-16 ml-3 rounded-md h-16 object-cover" width={400} height={400} />
                  <div className=' justify-between'>
                  <div className="ml-4">
                    <h2 className="text-xl">{item.name}</h2>
                    <p className="text-gray-700">${item.price.toFixed(2)}</p>
                  </div>
                <button className=' ml-4'>Place Order</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}