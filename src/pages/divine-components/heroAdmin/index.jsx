import contactBg from "@/assets/img/divine-img/contact/contact1.jpg";
import shapeImg1 from "@/assets/img/breadcrumb/breadcrumb-shape-1.1.png";
import shapeImg2 from "@/assets/img/breadcrumb/breadcrumb-shape-1.2.png";
import shapeImg3 from "@/assets/img/breadcrumb/breadcrumb-shape-1.3.png";
import { FaAngleRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
const Hero = ({ user, onNavigate }) => {
  const u = JSON.parse(user);
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
              <h4 className="heading">Welcome Administrator</h4>
              <div className="vl-breadcrumb-list">
                <span>
                  <Link onClick={() => onNavigate("list")}>Raffle Lists</Link>
                </span>
                <span className="dvir">/</span>
                <span>
                  <Link onClick={() => onNavigate("register")}>
                    Register Raffle
                  </Link>
                </span>
                <span className="dvir">/</span>
                <span>
                  <a className="active" href="#">
                    Events
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
export default Hero;
