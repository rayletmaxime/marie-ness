import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Player from "./components/Player";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Disco from "./components/Disco";

export default function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Disco />
      <Newsletter />
      <Footer />
      <Player />
    </>
  );
}
