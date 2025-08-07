import { useRef } from "react";
import titleIcon from "@/assets/img/icons/vl-sub-title-icon.svg";
import {
  FaAngleLeft,
  FaAngleRight,
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import GlightBox from "@/components/GlightBox";

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
                      <img src={titleIcon} alt="titleIcon" loading="lazy" />
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
                  {/* <div className="vl-hero-btn">
                    <a href="/contact" className="header-btn1">
                      Learn More{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </a>
                  </div> */}

                  <div className="vl-video-play">
                    <a
                      href="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FDivineMercyMSLibertad%2Fvideos%2F1189491445884303%2F&show_text=false&width=560&t=0"
                      className="glightbox video-play-button video popup-video"
                      tabIndex={-1}
                    >
                      <span />
                    </a>
                    <div className="video-text">
                      <h6 className="vtitle video">
                        <a
                          className="glightbox vtitle video popup-video"
                          href="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FDivineMercyMSLibertad%2Fvideos%2F1189491445884303%2F&show_text=false&width=560&t=0"
                          tabIndex={-1}
                        >
                          Learn More
                        </a>
                      </h6>
                    </div>
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
