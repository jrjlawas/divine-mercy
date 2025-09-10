import aboutImg1 from "@/assets/img/divine-img/journey/journFirst1.png";
import aboutImg2 from "@/assets/img/divine-img/journey/journFirst2.png";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
const JourneyFirst = () => {
  return (
    <section id="about" className="vl-about4 sp2">
      <Container>
        <Row className=" flex-lg-row flex-column-reverse">
          <Col lg={6}>
            <div className="vl-about-thumb mb-30">
              <Row className="">
                <Col lg={6} md={6}>
                  <div className="thumb-1 mb-30 reveal">
                    <img
                      className="w-100 img-fluid"
                      src={aboutImg1}
                      alt="aboutImg1"
                    />
                  </div>
                </Col>
                <Col lg={6} md={6}>
                  <div className="thumb-2">
                    <img
                      className="thmb2 reveal w-100"
                      src={aboutImg2}
                      alt="aboutImg2"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6}>
            <div className="vl-about-content mb-30 ml-50">
              <div className="vl-section-title4">
                <h5
                  className="subtitle"
                  data-aos="fade-left"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  Our Faith Journey
                </h5>
                <h2 className="title text-anime-style-3">
                  A timeline of God’s blessings and guidance in our mission.
                </h2>
                <p
                  className="para pb-32"
                  data-aos="fade-left"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  From our humble beginnings as Sagrada Familia Mission Station
                  to the growing Divine Mercy Mission Church, each milestone
                  reflects the faith, generosity, and unity of our community
                  guided by God’s grace.
                </p>
              </div>
              <Row className="">
                <Col
                  lg={12}
                  md={6}
                  data-aos="fade-left"
                  data-aos-duration={900}
                  data-aos-delay={300}
                >
                  <div className="vl-about-icon-box mb-30">
                    <div className="vl-icon-content">
                      <h3 className="title">
                        <Link to="#">
                          Founding of the Mission Station (June 2021)
                        </Link>
                      </h3>
                      <p>
                        In a major reshuffling of priests, the first Mission
                        Station was established at Sagrada Familia, Brgy.
                        Libertad, Ormoc City, with Rev. Fr. Eugene B. Almento as
                        its first priest.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col
                  lg={12}
                  md={6}
                  data-aos="fade-left"
                  data-aos-duration={1000}
                  data-aos-delay={300}
                >
                  <div className="vl-about-icon-box mb-30">
                    <div className="vl-icon-content">
                      <h3 className="title">
                        <Link to="#">
                          Growth of the Mission (January–July 2022)
                        </Link>
                      </h3>
                      <p>
                        Rev. Fr. Aldwin Nartea joined the Mission for seven
                        months as the number of churchgoers grew
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default JourneyFirst;
