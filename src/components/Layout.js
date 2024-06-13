import Navbar from "./Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import {Pacifico} from 'next/font/google';



export const paci=Pacifico({subsets:["latin"],
  weight:["400"],
})

const variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circIn",
    },
  },
};

const BarLoader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex gap-1 relative h-16 sm:h-3"
    >
      <motion.div variants={variants} className="lg:h-full w-2 bg-white" />
      <motion.div variants={variants} className="lg:h-full w-2 bg-white" />
      <motion.div variants={variants} className="lg:h-full w-2 bg-white" />
      <motion.div variants={variants} className="lg:h-full w-2 bg-white" />
      <motion.div variants={variants} className="lg:h-full w-2 bg-white" />
    </motion.div>
  );
};

export default function Layout({ children }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setTimeout(() => setLoading(false), 4000); // Loader stays for 4 seconds

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <div className={paci.className}>
     <Head>
        <title>De Clothing</title>
        <meta name="description" content="Clothing at its Peak" />
        <meta name="keywords" content="html, tailwindcss, js, javascript" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="De Clothing - Clothing at its Peak" />
        <meta property="og:description" content="Explore the latest trends in fashion with De Clothing. High-quality apparel for every occasion." />
        <meta property="og:image" content="https://decloth.vercel.app/de-cloth.png" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="De Clothing - Clothing at its Peak" />
        <meta name="twitter:description" content="Explore the latest trends in fashion with De Clothing. High-quality apparel for every occasion." />
        <meta name="twitter:image" content="https://yourwebsite.com/path/to/image.jpg" />
        <meta name="twitter:url" content="https://yourwebsite.com" />
      </Head>

      {loading && (
        <div className="fixed inset-0  bg-yellow-500 flex flex-col justify-center items-center z-50">
          <BarLoader />
          <p className="text-white lg:text-2xl sm:text-sm mt-4">Loading...</p>
        </div>
      )}

      <Navbar />
      <div className={loading ? "opacity-50" : "opacity-100"}>
        {children}
      </div>
          <Footer/>
    </div>
  );
}

