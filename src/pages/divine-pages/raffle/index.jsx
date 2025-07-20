import Header from "../../single-page/home/components/Header";
import RafflesPage from "../../divine-components/raffles";
import CtaArea from "../../divine-components/cta";
import Footer from "../../divine-components/footer";
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
