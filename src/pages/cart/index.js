import { useSelector } from "react-redux"


export default function Index() {
    const cartItems = useSelector(state => state.cart.items);
  return (
    <div>
      <div>
        {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
        ):( <div>{cartItems.map(item => <div key={item.id}>
            {item.name} - ${item.price}
        </div>
    )}
        </div>
    )}
      </div>
    </div>
  )
}