import thumb1 from "@/assets/img/divine-img/journey/journSecond1.png";
import thumb2 from "@/assets/img/divine-img/journey/journSecond2.png";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
const JourneySecond = () => {
  return (
    <section id="WhyChooseUs" className="vl-choose5 sp2">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="vl-choose-content mb-30">
              <div className="vl-section-title5">
                <h2 className="title text-anime-style-3">
                  From Vision to Reality – Expanding to Welcome More
                </h2>
                <p
                  className="para"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  In response to Archbishop John Du’s call, the community
                  secured land for a larger church. In 2022, the Batucan and
                  Pepito families donated properties, and the Pepito Family’s
                  land in Brgy. Libertad was chosen as the new church site—a key
                  step toward a new spiritual home.
                </p>
              </div>
            </div>
            <Row>
              <Col
                lg={12}
                md={6}
                data-aos="zoom-in-up"
                data-aos-duration={1200}
                data-aos-delay={300}
              >
                <div className="vl-icon-box mb-30">
                  <div className="content">
                    <Link to="#" className="title">
                      Call for Expansion (Fiesta Challenge)
                    </Link>
                    <p className="para">
                      In response to the growing congregation, Archbishop John
                      Du encouraged and urged the faithful to help secure a
                      larger property for the church to accommodate the
                      community’s needs.
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                lg={12}
                md={6}
                data-aos="zoom-in-up"
                data-aos-duration={1100}
                data-aos-delay={300}
              >
                <div className="vl-icon-box mb-30">
                  <div className="content">
                    <Link to="#" className="title">
                      Generous Land Donations (2022)
                    </Link>
                    <p className="para">
                      The Batucan Family donated one hectare in Brgy. Liloan,
                      while the Pepito Family donated nearly one hectare in
                      Brgy. Libertad.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <div className="single-thumb-box ml-50">
              <Row>
                <Col lg={6} md={6}>
                  <div className="single-thmb mb-30 reveal">
                    <img className="w-100" src={thumb1} alt="thumb1" />
                  </div>
                </Col>
                <Col lg={6} md={6}>
                  <div className="single-thmb2 mb-30 reveal">
                    <img className="w-100" src={thumb2} alt="thumb2" />
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
export default JourneySecond;
