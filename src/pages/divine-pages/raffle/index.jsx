import Header from "../../single-page/home/components/Header";
import RafflesPage from "../../divine-components/raffles";
import CtaArea from "@/components/layouts/CtaArea";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/BackToTop.jsx";

const DivineRaffle = () => {
  return (
    <>
      <Header />
      <RafflesPage />
      <CtaArea />
      <Footer />
      <BackToTop />
    </>
  );
};
export default DivineRaffle;
