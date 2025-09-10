import aboutIcons1 from "@/assets/img/icons/vl-about-1.1.svg";
import aboutIcons2 from "@/assets/img/icons/vl-about-1.2.svg";

import about1 from "@/assets/img/divine-img/about/about1.jpg";
import about2 from "@/assets/img/divine-img/about/about2.jpg";

import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
const About = () => {
  return (
    <section id="about" className="vl-about-section sp2">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="vl-about-content">
              <div className="vl-section-title-1">
                <h5
                  className="subtitle"
                  data-aos="fade-right"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  Welcome to Divine Mercy Church
                </h5>
                <h2 className="title text-anime-style-3">
                  A Church Built by Prayer, Purpose, and People Together
                </h2>
                <p
                  className="pb-32"
                  data-aos="fade-right"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  Nestled in the heart of Barangay Libertad, Ormoc City, Leyte,
                  Divine Mercy Church stands as a symbol of faith, hope, and
                  unity for our growing Catholic community. Though still under
                  construction, the spirit of the Church already lives in the
                  hearts of every parishioner, volunteer, and donor who believes
                  in building a sacred space dedicated to the mercy and love of
                  God.
                </p>
              </div>
              <div className="vl-about-grid">
                {/* <div className="vl-about-icon-box mb-30">
                  <div className="vl-about-icon">
                    <span>
                      <img src={aboutIcons1} alt="about1" />
                    </span>
                  </div>
                  <div className="vl-icon-content">
                    <h3 className="title">
                      <Link to="/pages/service">
                        Helping people rebuild and prepare
                      </Link>
                    </h3>
                    <p>
                      We help them rebuild stronger more resilient <br /> for
                      the future. Together with supporters like.
                    </p>
                  </div>
                </div> */}
                <div className="vl-about-icon-box mb-30">
                  {/* <div className="vl-about-icon">
                    <span>
                      <img src={aboutIcons2} alt="about2" />
                    </span>
                  </div> */}
                  <div className="vl-icon-content">
                    <h3 className="title">
                      <Link to="#">
                        Building with Faith and Community at Heart
                      </Link>
                    </h3>
                    <p>
                      Inspired by mercy and moved by faith, we believe that
                      every prayer, every gift, and every helping hand brings us
                      closer to building a church where God’s love lives in
                      every stone and every soul.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-30">
            <div className="vl-about-large-thumb reveal">
              <img className="w-100" src={about1} alt="about1" />
            </div>
          </Col>
          <Col lg={2} md={6} className="mb-30">
            <div
              className="vl-about-sm-content"
              data-aos="zoom-in-up"
              data-aos-duration={1000}
              data-aos-delay={300}
            >
              <p>
                We invite you to be part of this holy journey—through prayer,
                service, or contribution. With your help, we are one step closer
                to turning this vision into a sacred reality.
              </p>
              <div className="btn-area">
                <Link to="/contact" className="header-btn1">
                  Join Us{" "}
                  <span>
                    <FaArrowRight />
                  </span>
                </Link>
              </div>
              <div className="vl-about-sm-thumb d-none d-md-block">
                <img className="w-100" src={about2} alt="about2" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default About;
