import { useRef } from 'react';
import hero1 from '@/assets/img/shape/vl-hero-shape-1.1.png';
import hero2 from '@/assets/img/shape/vl-hero-shape-1.2.png';
import titleIcon from '@/assets/img/icons/vl-sub-title-icon.svg';
import { FaAngleLeft, FaAngleRight, FaArrowRight, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
const Hero = () => {
  const settings = {
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    fade: true,
    cssEase: 'ease-in-out',
    touchThreshold: 100,
    arrows: false,
    dots: false
  };
  const sliderRef = useRef(null);
  return <div className="vl-banner p-relative fix">
            <Slider ref={sliderRef} {...settings} className="slider-active-1">
                <div className="vl-hero-slider vl-hero-bg slick-slide slick-current slick-active">
                    <div className="vl-hero-shape shape-1">
                        <img src={hero1} alt='hero1' />
                    </div>
                    <div className="vl-hero-shape shape-2">
                        <img src={hero2} alt='hero2' />
                    </div>
                    <div className="vl-hero-social d-none d-lg-block">
                        <h4 className="title">Follow Us:</h4>
                        <div className="vl-hero-social-icon">
                            <ul>
                                <li><a className='d-flex align-items-center justify-content-center' href="#"><FaFacebookF className="fa-brands fa-facebook-f" /></a></li>
                                <li><a className='d-flex align-items-center justify-content-center' href="#"><FaInstagram className="fa-brands fa-instagram" /></a></li>
                                <li><a className='d-flex align-items-center justify-content-center' href="#"><FaTwitter className="fa-brands fa-twitter" /></a></li>
                                <li><a className='d-flex align-items-center justify-content-center' href="#"><FaGithub className="fa-brands fa-github" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <div className="vl-hero-section-title">
                                    <h5 className="vl-subtitle"><span><img src={titleIcon} alt='titleIcon' /></span> Recognizing Our
                                        Disaster Relief Heroes</h5>
                                    <h1 className="vl-title text-anime-style-3">Disaster Relief Funding</h1>
                                    <p>In times of crisis, when disaster strikes and hope seems lost, <br /> there emerge
                                        unsung heroes who rise to the occasion.</p>
                                    <div className="vl-hero-btn">
                                        <a href="/pages/contact" className="header-btn1">Join The Relief
                                            Effort <span><FaArrowRight /></span></a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={5} />
                        </Row>
                    </Container>
                </div>

                <div className="vl-hero-slider vl-hero-bg slick-slide slick-current slick-active">
                    <div className="vl-hero-shape shape-1">
                        <img src={hero1} alt='hero1' />
                    </div>
                    <div className="vl-hero-shape shape-2">
                        <img src={hero2} alt='hero2' />
                    </div>
                    <div className="vl-hero-social d-none d-lg-block">
                        <h4 className="title">Follow Us:</h4>
                        <div className="vl-hero-social-icon">
                            <ul>
                                <li><a className='d-flex align-items-center justify-content-center' href="#"><FaFacebookF /></a></li>
                                <li><a className='d-flex align-items-center justify-content-center' href="#"><FaInstagram /></a></li>
                                <li><a className='d-flex align-items-center justify-content-center' href="#"><FaTwitter /></a></li>
                                <li><a className='d-flex align-items-center justify-content-center' href="#"><FaGithub /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <div className="vl-hero-section-title">
                                    <h5 className="vl-subtitle"><span><img src={titleIcon} alt='titleIcon' /></span> Recognizing Our
                                        Disaster Relief Heroes</h5>
                                    <h1 className="vl-title text-anime-style-3">Disaster Relief Funding</h1>
                                    <p>In times of crisis, when disaster strikes and hope seems lost, <br /> there emerge
                                        unsung heroes who rise to the occasion.</p>
                                    <div className="vl-hero-btn">
                                        <a href="/pages/contact" className="header-btn1">Join The Relief
                                            Effort <span><FaArrowRight /></span></a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={5} />
                        </Row>
                    </Container>
                </div>
            </Slider>

            <div className="vl-arrow">
        <span className="prev-arow slick-arrow" onClick={() => sliderRef.current?.slickPrev()}>
          <FaAngleRight />
        </span>
                <span className="next-arow slick-arrow" onClick={() => sliderRef.current?.slickNext()}>
          <FaAngleLeft />
        </span>
            </div>
        </div>;
};
export default Hero;