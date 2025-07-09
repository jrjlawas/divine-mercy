import { useRef } from "react";
import hero1 from "@/assets/img/shape/vl-hero-shape-1.1.png";
import hero2 from "@/assets/img/shape/vl-hero-shape-1.2.png";
import titleIcon from "@/assets/img/icons/vl-sub-title-icon.svg";
import {
  FaAngleLeft,
  FaAngleRight,
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
const Hero = () => {
  const settings = {
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    fade: true,
    cssEase: "ease-in-out",
    touchThreshold: 100,
    arrows: false,
    dots: false,
  };
  const sliderRef = useRef(null);
  return (
    <div className="vl-banner p-relative fix">
      <Slider ref={sliderRef} {...settings} className="slider-active-1">
        <div className="vl-hero-slider vl-hero-bg slick-slide slick-current slick-active">
          <Container>
            <Row>
              <Col lg={7}>
                <div className="vl-hero-section-title">
                  <h5 className="vl-subtitle">
                    <span>
                      <img src={titleIcon} alt="titleIcon" />
                    </span>{" "}
                    Building Faith, Together
                  </h5>
                  <h1 className="vl-title text-anime-style-3">
                    Join Us in Building a Home of Faith
                  </h1>
                  <p>
                    We are more than a church; we are a family united by faith.
                    Support the construction of Divine Mercy Church and help us
                    nurture a place for prayer, worship, and community life.
                  </p>
                  <div className="vl-hero-btn">
                    <a href="/pages/contact" className="header-btn1">
                      Join The Effort{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg={5} />
            </Row>
          </Container>
        </div>
      </Slider>
    </div>
  );
};
export default Hero;
