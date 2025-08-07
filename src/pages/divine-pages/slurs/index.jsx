import Header from "../../divine-components/header";
import HeroSlurs from "../../divine-components/heroSlurs";
import AboutSlurs from "../../divine-components/aboutSlurs";
import TeamSlurs from "../../divine-components/teamSlurs";
import Contact from "../../divine-components/contact/components/Contact";
import CtaArea from "../../divine-components/cta";
import Footer from "../../divine-components/footer";
import BackToTop from "@/components/BackToTop.jsx";

const Slurs = () => {
  return (
    <>
      <Header />
      <HeroSlurs />
      <AboutSlurs />
      <TeamSlurs />
      <Contact />
      <CtaArea />
      <Footer />
      <BackToTop />
    </>
  );
};
export default Slurs;
