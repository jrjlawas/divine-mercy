import About from './components/About';
import Blog from './components/Blog';
import Causes from './components/Causes';
import EventArea from './components/EventArea';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import TopBanner from "@/components/layouts/TopBanner.jsx";
import TopBar from "@/components/layouts/TopBar";
import CtaArea from "@/components/layouts/CtaArea.jsx";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/BackToTop.jsx";
const HomePage = () => {
  return <>
            <TopBanner />
            <TopBar />
            <Hero />
            <About />
            <Causes />
            <EventArea />
            <Testimonial />
            <Gallery />
            <Team />
            <Blog />
            <CtaArea />
            <Footer />
            <BackToTop />
        </>;
};
export default HomePage;