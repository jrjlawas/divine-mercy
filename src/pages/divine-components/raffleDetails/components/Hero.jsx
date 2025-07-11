import causeLeftBg from "@/assets/img/divine-img/raffle/heroRaffle.jpg";
import { FaAngleRight } from "react-icons/fa6";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router";
const Hero = () => {
  return (
    <section
      className="vl-breadcrumb"
      style={{
        backgroundImage: `url(${causeLeftBg})`,
      }}
    >
      <div className="container">
        <Row>
          <Col lg={12}>
            <div className="vl-breadcrumb-title">
              <h2 className="heading">Raffle Details</h2>
              <div className="vl-breadcrumb-list">
                <span>
                  <Link to="/">Home</Link>
                </span>
                <span className="dvir">
                  <FaAngleRight className="fa-solid fa-angle-right" />
                </span>
                <span>
                  <a className="active" href="/raffle">
                    Raffles
                  </a>
                </span>
                <span className="dvir">
                  <FaAngleRight className="fa-solid fa-angle-right" />
                </span>
                <span>
                  <a className="active" href="#">
                    Raffle Details
                  </a>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};
export default Hero;
