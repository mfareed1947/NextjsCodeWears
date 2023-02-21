import '@/styles/globals.css'
import Navbar from "Components/Navbar";
import Footer from "Components/Footer";
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from 'next/router';

export default function App({ Component, pageProps }) {
  const progress = new ProgressBar({
    size: 2,
    color: "#EC407A",
    className: "z-50",
    delay: 100

  })

  Router.events.on('routeChangeStart', progress.start)
  Router.events.on('routeChangeComplete', progress.finish)
  Router.events.on('routeChangeError', progress.finish)

  return <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
}
