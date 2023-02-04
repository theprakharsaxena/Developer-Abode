import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon/logo.ico" />
        <script defer src="/_vercel/insights/script.js"></script>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Analytics/>
    </>
  );
}
