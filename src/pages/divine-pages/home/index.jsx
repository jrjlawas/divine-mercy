import Header from "../../divine-components/header";
import Hero from "../../divine-components/hero";
import About from "../../divine-components/about";
import Raffles from "../../divine-components/rafflesHome";
import Gallery from "../../divine-components/gallery";
import Contact from "../../divine-components/contact/components/Contact";
import CtaArea from "../../divine-components/cta";
import Footer from "../../divine-components/footer";
import BackToTop from "@/components/BackToTop.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Raffles />
      <Gallery />
      <Contact />
      <CtaArea />
      <Footer />
      <BackToTop />
    </>
  );
};
export default Home;
