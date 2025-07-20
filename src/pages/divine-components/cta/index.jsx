import ctaImg1 from "@/assets/img/cta/vl-cta-1.1.png";
import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
const CtaArea = () => {
  return (
    <section id="contact" className="vl-cta">
      <Container>
        <div
          className="vl-cta-bg"
          style={{
            backgroundImage: `url(${ctaImg1})`,
          }}
        >
          <Row>
            <Col lg={12}>
              <div className="vl-cta-content text-center">
                <h2 className="title">
                  Be a Pillar of Faith – Help Build Divine Mercy Church
                </h2>
                <p>
                  Every act of generosity brings us closer to building a sacred
                  space for worship and community. <br />
                  Your support—big or small—can lay the very foundations of
                  hope, healing, and faith for generations to come.
                </p>
                <div className="vl-cta-form text-center mx-auto">
                  <form action="#">
                    <input type="email" placeholder="Enter Your Email.." />
                    <div className="btn-area vl-cta-btn1">
                      <button className="header-btn1">
                        Subscribe{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
export default CtaArea;
