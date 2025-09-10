import thumb1 from "@/assets/img/divine-img/journey/journThird2.png";
import thumb2 from "@/assets/img/divine-img/journey/journThird3.png";
import thumb3 from "@/assets/img/divine-img/journey/journThird1.jpg";

import { FaArrowRight, FaCheck } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
const JourneyThird = () => {
  return (
    <section id="about" className="vl-about5 sp2">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="vl-about-content">
              <div className="vl-section-title5 mb-40">
                <h2 className="title text-anime-style-3">
                  The Divine Mercy Mission: A New Chapter
                </h2>
                <p
                  className="para"
                  data-aos="fade-right"
                  data-aos-duration={1000}
                  data-aos-delay={300}
                >
                  Renamed Divine Mercy Mission in 2022 to honor the faithful’s
                  devotion, the mission held a groundbreaking ceremony led by
                  Archbishop John Du on February 14, 2023, and construction
                  began in November 2023. Since July 1, 2024, Rev. Fr. Noel T.
                  Lao has been leading the mission into its next phase of growth
                  and service.
                </p>
              </div>
              <div className="vl-sm-thumb mb-30 reveal">
                <img className="w-100" src={thumb1} alt="thumb1" />
              </div>
              <div className="vl-sm-thumb2 mb-30 reveal">
                <img className="w-100" src={thumb2} alt="thumb2" />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="vl-about-content2 ml-20 reveal">
              <div className="large-thumb mb-30">
                <img className="w-100" src={thumb3} alt="thumb3" />
              </div>
              <div className="content mb-30">
                <p
                  className="para"
                  data-aos="fade-left"
                  data-aos-duration={900}
                  data-aos-delay={300}
                >
                  The mission is actively raising funds to complete the ongoing
                  church construction. Under the leadership of Rev. Fr. Noel T.
                  Lao, together with the PPC-PFC and the devoted faithful of
                  Divine Mercy, the community is working tirelessly to make the
                  vision of a finished church a reality.
                </p>

                <p
                  className="para"
                  data-aos="fade-left"
                  data-aos-duration={900}
                  data-aos-delay={300}
                >
                  As the Divine Mercy Mission continues to grow, the dream of
                  completing the church stands as a testament to the community’s
                  unity and faith. With every prayer, contribution, and act of
                  service, the faithful draw closer to building not just a
                  structure but a true spiritual home for generations to come.
                </p>

                {/* <div
                  className="icon-list-box"
                  data-aos="fade-left"
                  data-aos-duration={1000}
                  data-aos-delay={300}
                >
                  <ul>
                    <li>
                      <span>
                        <FaCheck className="fa-solid fa-check" />
                      </span>
                      Join Our Mission to Make a Difference
                    </li>
                    <li>
                      <span>
                        <FaCheck className="fa-solid fa-check" />
                      </span>
                      Transforming Lives and Communities
                    </li>
                    <li>
                      <span>
                        <FaCheck className="fa-solid fa-check" />
                      </span>
                      Standing Up for Human Rights
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default JourneyThird;
