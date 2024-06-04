import Navbar from "./Navbar"
import Head from "next/head"

export default function Layout({children}) {
  return (
    <div className="mx-6">
      <Head>
        <title>De Clothing</title>
        <meta name="description" content="Clothing at its Peak" />
        <meta name="keywords" content="html, tailwindcss, js, javascript" />
        <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
      </Head>

        <Navbar />
      {children}
    </div>
  )
}
