import Header from "../../single-page/home/components/Header";
import RaffleDetailsPage from "../../divine-components/raffleDetails";
import CtaArea from "@/components/layouts/CtaArea";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/BackToTop.jsx";

const DivineRaffleDetails = () => {
  return (
    <>
      <Header />
      <RaffleDetailsPage />
      {/* <RafflesPage /> */}
      <CtaArea />
      <Footer />
      <BackToTop />
    </>
  );
};
export default DivineRaffleDetails;
