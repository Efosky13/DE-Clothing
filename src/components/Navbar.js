import { useRouter } from "next/router"
import Link from "next/link"
import {FaCartShopping} from 'react-icons/fa6'


export default function Navbar() {
  const router = useRouter();
  const isCartPage = router.pathname === '/cart'
  return (
    <nav className=" flex justify-between align-center p-[1rem]">
      <div>
        Logo
      </div>
      {/* Search Bar */}
      <div>

      </div>
      <div>
        <Link className=" flex gap-x-3" href={'/cart'}><FaCartShopping /><span>Cart</span></Link>
      </div>
    </nav>
  )
}
