import Hero from "@/components/helper/hero";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Head>
        <title>Your Website Name</title>
      </Head>
      <div className="min-h-screen dark:bg-[#030014] dark:overflow-y-scroll dark:overflow-x-hidden">
        <Navbar />
        <Hero />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
