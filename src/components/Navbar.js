import { useRouter } from "next/router";
import { AiFillProduct } from "react-icons/ai";
import Image from "next/image";
import { TbPackageOff, TbCreditCardRefund } from "react-icons/tb";
import { CiCreditCard1 } from "react-icons/ci";
import Link from "next/link";
import { FcCustomerSupport } from "react-icons/fc";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCartShopping, FaLocationDot } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import { HiUser } from "react-icons/hi2";
import { IoIosArrowDown, IoIosArrowUp, IoIosLogIn } from "react-icons/io";
import { useState, useEffect } from "react";
import { FiPackage } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { RiMessage2Line } from "react-icons/ri";
import { motion } from "framer-motion";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { useCart } from "@/context/cartContext";
import SearchResults from "./SearchResults";
import { clothingProducts } from "@/data/product";

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 360 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};

export default function Navbar() {
  const router = useRouter();
  const { cartItems } = useCart();
  const isCartPage = router.pathname === "/cart";
  const [isAccOpen, setIsAccOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAccount = () => {
    setIsAccOpen(!isAccOpen);
    setIsHelpOpen(false);
  };

  const toggleHelp = () => {
    setIsHelpOpen(!isHelpOpen);
    setIsAccOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      const results = clothingProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(results);
      setShowResults(true);
    } else {
      setFilteredProducts([]);
      setShowResults(false);
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`flex justify-between z-50 top-0 sticky align-center p-[1rem] ${scrolled ? " bg-white shadow-md" : "bg-transparent"}`}>

      <div className="flex items-center">
        {isCartPage && (
          <button className="mr-3" onClick={toggleMenu}>
            {isMenuOpen ? <MdOutlineClose /> : <RxHamburgerMenu />}
          </button>
        )}
        {isMenuOpen && <div>{/* The Categories Go Here */}</div>}
        <div className="mr-3">
          <Link href={"/"}><Image src={'/logo.svg'} width={220} height={48} alt="" priority={true} /></Link>
        </div>
      </div>
      <div onSubmit={handleSearch} className="md:flex hidden sm:block w-96 gap-2">
        <input
          type="text"
          placeholder="Search Products, Brands and Categories"
          className="w-full py-2 px-4 focus:outline-none border rounded-md" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-700 text-white px-4 hover:shadow-md rounded-md py-2"
        >
          Search
        </button>
      </div>
      <div className="flex gap-4 items-center">
        <div className=" hover:cursor-pointer flex items-center">
          <Link className=" flex items-center" href={'/products'}>
            <span><AiFillProduct /></span>
          <span className="lg:ml-1 md:flex hidden">Our Products</span>
          </Link>
        </div>
        <motion.div
          initial={false}
          animate={isAccOpen ? "open" : "closed"}
          className="relative"
        >
          <motion.div
            initial="closed"
            animate={isAccOpen ? "open" : "closed"}
            variants={wrapperVariants}
            className="absolute top-full -left-[100px] transform -translate-x-[130px] mt-2 bg-white border overflow-hidden rounded-md shadow-md w-56"
          >
            <motion.div className="p-4 text-center">
              <motion.div variants={itemVariants}>
                <Link href={'/signup'}>
                <button className="w-full flex items-center py-2 rounded-md bg-yellow-500 px-4 text-left">
                  <motion.span variants={actionIconVariants}>
                    <IoIosLogIn />
                  </motion.span>
                  <span className="ml-1">Sign In</span>
                </button>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/">
                  <div className="flex w-full hover:text-yellow-500 items-center py-2 px-2 text-left">
                    <motion.span variants={actionIconVariants}>
                      <HiUser className="flex" />
                    </motion.span>
                    <span className="ml-1">Account</span>
                  </div>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/">
                  <div className="flex w-full items-center py-2 px-2 text-left">
                    <motion.span variants={actionIconVariants}>
                      <FiPackage className="flex" />
                    </motion.span>
                    <span className="ml-1">Orders</span>
                  </div>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/">
                  <div className="flex items-center w-full py-2 px-2 text-left">
                    <motion.span variants={actionIconVariants}>
                      <FaHeart />
                    </motion.span>
                    <span className="ml-1">Saved Items</span>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center hover:text-yellow-500 hover:cursor-pointer"
            onClick={toggleAccount}
          >
            <HiUser />
            <span className="lg:ml-1 md:flex hidden">Account</span>
            <motion.span className="md:flex hidden" variants={iconVariants}>
              {isAccOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </motion.span>
          </motion.div>
        </motion.div>
        {/* Help Center */}
        <div className="relative">
          <motion.div
            initial={false}
            animate={isHelpOpen ? "open" : "closed"}
            variants={wrapperVariants}
            className="absolute top-full -left-[100px] transform -translate-x-[130px] mt-2 bg-white border rounded-md shadow-md overflow-hidden w-64"
          >
            <motion.div className="p-4 text-center">
              <motion.div variants={itemVariants}>
                <div className="w-full flex items-center py-2 text-left">
                  <motion.span variants={actionIconVariants}>
                    <FcCustomerSupport className="flex" />
                  </motion.span>
                  <span className="ml-1">Help Center</span>
                </div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/">
                  <div className="flex w-full items-center py-2 text-left">
                    <motion.span variants={actionIconVariants}>
                      <HiUser className="flex" />
                    </motion.span>
                    <span className="ml-1">Place An Order</span>
                  </div>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/">
                  <div className="flex w-full items-center py-2 text-left">
                    <motion.span variants={actionIconVariants}>
                      <CiCreditCard1 className="flex" />
                    </motion.span>
                    <span className="ml-1">Payment Option</span>
                  </div>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/">
                  <div className="flex w-full items-center py-2 text-left">
                    <motion.span variants={actionIconVariants}>
                      <FaLocationDot className="flex" />
                    </motion.span>
                    <span className="ml-1">Track An Order</span>
                  </div>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/">
                  <div className="flex w-full items-center py-2 text-left">
                    <motion.span variants={actionIconVariants}>
                      <TbPackageOff className="flex" />
                    </motion.span>
                    <span className="ml-1">Cancel An Order</span>
                  </div>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link href="/">
                  <div className="flex w-full items-center py-2 text-left">
                    <motion.span variants={actionIconVariants}>
                      <TbCreditCardRefund className="flex" />
                    </motion.span>
                    <span className="ml-1">Returns & Refunds</span>
                  </div>
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <button className="w-full py-2 flex items-center rounded-md bg-yellow-500 px-4 text-left">
                  <span className="mr-1">Live Chat</span>
                  <span>
                    <RiMessage2Line />
                  </span>
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
          <div
            className="flex hover:text-yellow-500 items-center hover:cursor-pointer"
            onClick={toggleHelp}
          >
            <TfiHeadphoneAlt />
            <span className="lg:ml-1 md:flex hidden">Help</span>
            <motion.span
            variants={iconVariants}
            className="md:flex hidden">{isHelpOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</motion.span>
          </div>
        </div>
        <Link className="flex relative items-center gap-x-2" href={"/cart"}>
        <FaCartShopping />
        {cartItems && cartItems.length > 0 && (
           <span className="absolute top-0 right-14 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full -translate-y-2 translate-x-2">
             {cartItems.length}
           </span>
         )}
          <span className="lg:ml-1 md:flex hidden">Cart</span>
        </Link>
      </div>
        {/* <div onSubmit={handleSearch} className="md:hidden flex bottom-2 sm:block w-full gap-2">
        <input
          type="text"
          placeholder="Search Products, Brands and Categories"
          className="w-full py-2 px-4 focus:outline-none border rounded-md" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-700 text-white px-4 hover:shadow-md rounded-md py-2"
        >
          Search
        </button>
      </div> */}
      {showResults && <SearchResults results={filteredProducts} />}
    </nav>
  );
}
