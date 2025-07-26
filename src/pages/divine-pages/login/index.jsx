import Header from "../../single-page/home/components/Header";
import HeroPage from "../../divine-components/heroLogin";
import LoginForm from "../../divine-components/loginForm";
import Footer from "../../divine-components/footer";
import BackToTop from "@/components/BackToTop.jsx";
import CtaArea from "@/components/layouts/CtaArea";

const LoginPage = () => {
  return (
    <>
      <Header />
      <HeroPage />
      <LoginForm />
      <CtaArea />
      <Footer />
      <BackToTop />
    </>
  );
};
export default LoginPage;
