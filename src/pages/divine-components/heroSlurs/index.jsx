import contactBg from "@/assets/img/divine-img/slurs/bgImage.jpg";
import { FaAngleRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
const HeroSlurs = () => {
  return (
    <section
      className="vl-breadcrumb"
      style={{
        backgroundImage: `url(${contactBg})`,
      }}
    >
      <Container>
        <Row>
          <Col lg={12}>
            <div className="vl-breadcrumb-title">
              <h2 className="heading">Sagrada Familia Slurs</h2>
              <div className="vl-breadcrumb-list">
                <span>
                  <Link to="/">Home</Link>
                </span>
                <span className="dvir">
                  <FaAngleRight className="fa-solid fa-angle-right" />
                </span>
                <span>
                  <a className="active" href="#">
                    Church Choir
                  </a>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default HeroSlurs;
