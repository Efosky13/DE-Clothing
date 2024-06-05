import "../styles/globals.css";
import { CartProvider } from "@/context/cartContext";
import { useRouter } from "next/router";
import { store } from "@/store/store";
import Layout from "@/components/Layout";
import {motion, AnimatePresence} from "framer-motion"

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return(
      <CartProvider>
    <Layout>
      <AnimatePresence mode="wait">
      <motion.div key={router.route}>
      <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
    </Layout>
    </CartProvider>
  )
}
