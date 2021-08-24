import react, { useEffect } from "react";
import Layout from "../Components/UI/Layout";
import Hero from "../Components/Home/Hero";
import About from "../Components/Home/About";
import Features from "../Components/Home/Features";
import OurTenants from "../Components/Home/OurTenants";
import Testimonial from "../Components/Home/Testimonial";
import Contact from "../Components/Home/Contact";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;

export default function Home() {
  useEffect(() => {
    new WOW().init();
  }, []);
  return (
    <Layout pageTitle="Garasi Food - SATU NAMA BERJUTA MAKANAN">
      <Hero />
      <About />
      <Features />
      <OurTenants />
      <Testimonial />
      <Contact />
    </Layout>
  );
}
