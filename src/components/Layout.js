import Navbar from "./Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    <div className="mx-6">
      <Head>
        <title>De Clothing</title>
        <meta name="description" content="Clothing at its Peak" />
        <meta name="keywords" content="html, tailwindcss, js, javascript" />
        <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
      </Head>

      {loading && (
        <div className="fixed inset-0  bg-yellow-500 flex flex-col justify-center items-center z-50">
          <BarLoader />
          <p className="text-white text-2xl mt-4">Loading...</p>
        </div>
      )}

      <Navbar />
      <div className={loading ? "opacity-50" : "opacity-100"}>
        {children}
      </div>
    </div>
  );
}

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
      className="flex gap-1 relative h-16"
    >
      <motion.div variants={variants} className="h-full w-2 bg-white" />
      <motion.div variants={variants} className="h-full w-2 bg-white" />
      <motion.div variants={variants} className="h-full w-2 bg-white" />
      <motion.div variants={variants} className="h-full w-2 bg-white" />
      <motion.div variants={variants} className="h-full w-2 bg-white" />
      <motion.span className="flex-col"></motion.span>
    </motion.div>
  );
};
