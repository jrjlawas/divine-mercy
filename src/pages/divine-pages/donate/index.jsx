import Header from "../../single-page/home/components/Header";
import DonatePage from "../../divine-components/donate";
import CtaArea from "@/components/layouts/CtaArea";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/BackToTop.jsx";

const DivineDonate = () => {
  return (
    <>
      <Header />
      <DonatePage />
      <CtaArea />
      <Footer />
      <BackToTop />
    </>
  );
};
export default DivineDonate;
