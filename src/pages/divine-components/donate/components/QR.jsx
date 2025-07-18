import missionThumbImg from "@/assets/img/divine-img/donate/qr.jpg";
import { FaCheck } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
const QR = () => {
  return (
    <section className="vl-about-mission-bg sp2">
      <Container>
        <Row>
          <Col lg={10} className="mx-auto">
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="mision-thumb mb-30">
                  <img
                    className="w-100"
                    src={missionThumbImg}
                    alt="missionThumbImg"
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="mission-content ml-20 mb-30">
                  <h2 className="title pb-20">Scan to Give</h2>
                  <p className="para pb-16">
                    Simply scan the QR code using your GCash or mobile banking
                    app to send your donation instantly. Whether it’s a small or
                    large amount, your gift is a blessing that will leave a
                    lasting impact.
                  </p>
                  <p className="para">
                    Your generosity is helping shape not just a building, but a
                    lasting symbol of faith, unity, and God’s mercy. By
                    donating, you are actively taking part in the construction
                    of Divine Mercy Church in Barangay Libertad, Ormoc City—a
                    sacred space where generations will gather to pray,
                    celebrate, and grow spiritually as a community. Every brick
                    laid, every beam raised, is made possible by the kindness of
                    supporters like you.
                  </p>
                  {/* <div className="icon-list-box pt-20">
                    <ul>
                      <li>
                        <span>
                          <FaCheck className="fa-solid fa-check" />
                        </span>
                        Client-Focused Solutions and Results
                      </li>
                      <li>
                        <span>
                          <FaCheck className="fa-solid fa-check" />
                        </span>
                        Flexible, Value Driven Approach
                      </li>
                      <li>
                        <span>
                          <FaCheck className="fa-solid fa-check" />
                        </span>
                        Warning of updated legal risks for customers
                      </li>
                      <li>
                        <span>
                          <FaCheck className="fa-solid fa-check" />
                        </span>
                        A team of experienced and highly specialized
                      </li>
                    </ul>
                  </div> */}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default QR;
