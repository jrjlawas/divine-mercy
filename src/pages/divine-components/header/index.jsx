import logo1Img from "@/assets/img/divine-img/logos/logo80.jpg";
import useScrollEvent from "@/hooks/useScrollEvent";
import { Link } from "react-router";
import SingleMobileMenu from "../../divine-components/mobileHeader";
import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
const Header = () => {
  const { scrollY } = useScrollEvent();
  return (
    <>
      <header>
        <div
          className={`header-area homepage1 header header-sticky d-none d-lg-block mt-16 ${
            scrollY > 100 && "sticky"
          }`}
          id="header"
        >
          <Container>
            <Row>
              <Col lg={12}>
                <div className="header-elements header-elements-1">
                  <div className="site-logo">
                    <Link to="/">
                      <img src={logo1Img} alt="logo1Img" />
                    </Link>
                  </div>
                  <div className="main-menu">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/raffle">Raffle Fundraiser</a>
                      </li>
                      <li>
                        <a href="/church-construction">Church Construction</a>
                      </li>
                      <li>
                        <a href="/contact">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                  <div className="btn-area">
                    <Link to="/church-donate" className="header-btn1">
                      Donate{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
      <SingleMobileMenu />
    </>
  );
};
export default Header;
