import { useState } from "react"
import { BiSolidCategory } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";
import Link from "next/link";
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

export default function Header() {
    const [isCatOpen, setIsCatOpen] = useState(false);

    const toggleCat = () => {
        setIsCatOpen(!isCatOpen);
    }
    const toggleCatUp = () => {
        setIsCatOpen(false);
    }
  return (
    <div className=" bg-white">
    <div className=" relative">
    <motion.div
            initial={false}
            animate={isCatOpen ? "open" : "closed"}
            variants={wrapperVariants}
            className="absolute top-full left-[50px] transform -translate-x-[60px] mt-2 bg-white border rounded-md shadow-md overflow-hidden w-64"
          >
            {
                clothingProducts.map(cp => {
                    return (
                        <motion.div variants={itemVariants} key={cp.id} className=" items-center flex">
                            <Link href={`/`} className=" flex items-center">
                                    <motion.span
                                    variants={actionIconVariants}>{cp.icons}</motion.span>
                                    <span className=" ml-1">{cp.name}</span>
                            </Link>
                        </motion.div>
                    )
                })
            }
            </motion.div>
      <div className=" flex items-center">
        
        <span><BiSolidCategory /></span>
        <span className="ml-1" onMouseEnter={toggleCat} onMouseLeave={ toggleCatUp}>Categories</span>
        <motion.span
        variants={iconVariants}>{isCatOpen ? <IoIosArrowUp /> : <IoIosArrowDown /> }</motion.span>
      </div>
    </div>
    </div>
  )
}
