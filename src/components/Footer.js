import { FaFacebook, FaInstagram, FaWhatsapp, FaSnapchat } from 'react-icons/fa6'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-yellow-600 h-[60vh] text-white py-10">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-bold mb-4">De Clothings</h4>
          <p>Clothing at its Peak.</p>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-bold mb-4">Customer Service</h4>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Help Center</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Returns</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Shipping</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Track Order</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <div><Link href="#" className="hover:text-blue-600"><FaFacebook /></Link></div>
            <div><Link href="https://wa.me/2349110136440" className="hover:text-green-700"><FaWhatsapp /></Link></div>
            <div><Link href="#" className="hover:text-red-600"><FaSnapchat /></Link></div>
            <div><Link href="https://www.instagram.com/threadsbyde?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-pink-600"><FaInstagram /></Link></div>
          </div>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-bold mb-4">Newsletter</h4>
          <p>Sign up for the latest updates and offers</p>
          <form className="mt-4">
            <input type="email" placeholder="Enter your email" required className="w-full p-2 rounded-md text-gray-900 mb-2" />
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="mt-10 text-center bottom-0 text-gray-500">
        <p>&copy; 2024 De Clothings. All rights reserved.</p>
      </div>
    </footer>
  )
}
