import aboutThum1 from "@/assets/img/divine-img/donate/donate2.jpg";
import aboutThum2 from "@/assets/img/divine-img/donate/donate3.jpg";
import aboutThum3 from "@/assets/img/divine-img/donate/donate1.jpg";

import { FaCheck } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
const AboutUs = () => {
  return (
    <section className="vl-about5 sp2">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="vl-about-content">
              <div className="vl-section-title-1 mb-50">
                <h5 className="subtitle">
                  Donate to Build Divine Mercy Church
                </h5>
                <h2 className="title">
                  Together, Let’s Raise a Church Rooted in Faith and Mercy
                </h2>
                <p>
                  The construction of Divine Mercy Church in Barangay Libertad,
                  Ormoc City, Leyte is more than a building project—it’s a
                  mission to create a sacred space where people can gather,
                  pray, heal, and grow in faith.
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
                  With your generous help, we are laying the foundation not just
                  for walls and structures, but for a sacred space where faith
                  is nurtured, worship is celebrated, community is strengthened,
                  and generations of Catholics will gather to experience the
                  love, mercy, and presence of God for years to come.
                </p>
                <div className="icon-list-box box2">
                  <ul>
                    <li>
                      <span>
                        <FaCheck className="fa-solid fa-check" />
                      </span>
                      Creating a Sacred Space for Worship and Reflection
                    </li>
                    <li>
                      <span>
                        <FaCheck className="fa-solid fa-check" />
                      </span>
                      Strengthening a Growing Catholic Community
                    </li>
                    <li>
                      <span>
                        <FaCheck className="fa-solid fa-check" />
                      </span>
                      Inspiring Generations with Faith and Love
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
export default AboutUs;
