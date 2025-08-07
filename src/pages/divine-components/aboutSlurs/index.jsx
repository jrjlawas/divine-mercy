import aboutThum1 from "@/assets/img/divine-img/slurs/abt2.png";
import aboutThum2 from "@/assets/img/divine-img/slurs/abt3.png";
import aboutThum3 from "@/assets/img/divine-img/slurs/abt1.png";
import { FaCheck } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
const AboutSlurs = () => {
  return (
    <section className="vl-about5 sp2">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="vl-about-content">
              <div className="vl-section-title-1 mb-50">
                <h5 className="subtitle">About Us</h5>
                <h2 className="title">Serving with Harmony, United in Faith</h2>
                <p>
                  The Sagrada Familia Slurs is a vibrant church choir under the
                  Divine Mercy Mission Station, formed in June 2021. Born from a
                  shared love for music and a deep devotion to God, our group of
                  passionate and youthful individuals serves the Lord through
                  heartfelt melodies and spiritual harmony.
                </p>
              </div>
              <Row>
                <Col lg={12} md={6}>
                  <div className="vl-sm-thumb mb-30">
                    <img className="w-100" src={aboutThum1} alt="aboutThum1" />
                  </div>
                </Col>
                <Col lg={12} md={6}>
                  <div className="vl-sm-thumb2 mb-30">
                    <img className="w-100" src={aboutThum2} alt="aboutThum2" />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6}>
            <div className="vl-about-content2 ml-20">
              <div className="large-thumb mb-30">
                <img className="w-100" src={aboutThum3} alt="aboutThum3" />
              </div>
              <div className="content mb-30">
                <p className="para">
                  From leading worship through sacred music to fostering
                  fellowship among youth, every voice contributes to a greater
                  purpose—bringing people closer to Christ and strengthening our
                  spiritual community.
                </p>
                <div className="icon-list-box box2">
                  <ul>
                    <li>
                      <span>
                        <FaCheck className="fa-solid fa-check" />
                      </span>
                      Transforming Lives and Communities Through Music
                    </li>
                    <li>
                      <span>
                        <FaCheck className="fa-solid fa-check" />
                      </span>
                      Bringing Light to Every Mass We Serve
                    </li>
                    <li>
                      <span>
                        <FaCheck className="fa-solid fa-check" />
                      </span>
                      Standing Up for Faith, Youth, and Unity
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default AboutSlurs;
