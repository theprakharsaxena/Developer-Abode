import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Chat from "../components/Chat";
// import Tagmanager from "../components/tagmanager";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon/logo.ico" />
        {/* <Tagmanager /> */}
      </Head>
      <Chat />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </>
  );
}
