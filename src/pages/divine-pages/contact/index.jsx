import Header from "../../single-page/home/components/Header";
import ContactPage from "../../divine-components/contact";
import CtaArea from "@/components/layouts/CtaArea";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/BackToTop.jsx";

const DivineContact = () => {
  return (
    <>
      <Header />
      <ContactPage />
      <CtaArea />
      <Footer />
      <BackToTop />
    </>
  );
};
export default DivineContact;
