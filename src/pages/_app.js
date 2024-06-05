import "../styles/globals.css";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import { store } from "@/store/store";
import Layout from "@/components/Layout";
import {motion, AnimatePresence} from "framer-motion"

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return(
    <Layout>
      <AnimatePresence mode="wait">
      <Provider store={store}>
      <motion.div key={router.route}>
      <Component {...pageProps} />
      </motion.div>
    </Provider>
    </AnimatePresence>
    </Layout>
  )
}
