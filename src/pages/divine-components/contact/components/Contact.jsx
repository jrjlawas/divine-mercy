import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="vl-contact-section-inner sp2">
      <Container>
        <Row className=" flex-lg-row flex-column-reverse">
          <Col lg={6} className="mb-30">
            <div className="vl-maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1788.5530140628348!2d124.5689798538142!3d11.037304696368123!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3307f7006718af11%3A0xec8828e3b069943c!2sDivine%20Mercy%20Mission%20Station!5e1!3m2!1sen!2sph!4v1752142174172!5m2!1sen!2sph"
                allowFullScreen
                className="vl-contact-maps"
              />
            </div>
          </Col>
          <Col lg={6} className="mb-30">
            <div className="vl-section-content ml-50">
              <div className="section-title">
                <h4 className="subtitle">Contact Us</h4>
                <h2 className="title">
                  Reach Together, We Can Make a Difference
                </h2>
                <p className="para pb-32">
                  We’d love to hear from you! Whether you have questions about
                  the church construction, raffle fundraiser, volunteering, or
                  general inquiries—our team is here to assist you.
                </p>
              </div>
              <div className="vl-form-inner">
                <form action="#">
                  <Row>
                    <Col lg={6}>
                      <input type="text" placeholder="First Name*" />
                    </Col>
                    <Col lg={6}>
                      <input type="text" placeholder="Last Name*" />
                    </Col>
                    <Col lg={12}>
                      <input type="email" placeholder="Email Address*" />
                    </Col>
                    {/* <Col lg={6}>
                      <input type="number" placeholder="Amount; $*" />
                    </Col>
                    <Col lg={12} className="mb-3">
                      <Select
                        options={options}
                        className="react-select-container"
                        classNamePrefix="react-select"
                        placeholder="Donation To"
                      />
                    </Col> */}
                    <Col lg={12}>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="How can we help you?*"
                        defaultValue={""}
                      />
                    </Col>
                    <Col lg={12}>
                      <div className="btn-area">
                        <button className="header-btn1">
                          Send Now{" "}
                          <span>
                            <FaArrowRight />
                          </span>
                        </button>
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Contact;
