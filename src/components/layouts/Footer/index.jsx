import footerLogo from "@/assets/img/divine-img/logos/logo80.jpg";

import footerIc1 from "@/assets/img/icons/vl-footer-ic-1.1.svg";
import footerIc2 from "@/assets/img/icons/vl-footer-ic-1.2.svg";
import footerIc3 from "@/assets/img/icons/vl-footer-2.1.svg";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <footer className="vl-footer-bg-1">
      <Container>
        <Row>
          <Col lg={3} md={6}>
            <div className="vl-footer-widget-1 mb-30">
              <div className="vl-footer-logo">
                <Link to="/">
                  <img src={footerLogo} alt="footerLogo" />
                </Link>
              </div>
              <div className="vl-footer-content">
                <p>
                  Every moment is a blessing. Your support today brings Divine
                  Mercy Church closer to becoming a place of prayer, healing,
                  and hope. Help us build this house of God—brick by brick, soul
                  by soul.
                </p>
              </div>
              <div className="vl-footer-social-1">
                <ul>
                  <li>
                    <a
                      className="d-flex align-items-center justify-content-center"
                      href="https://www.facebook.com/DivineMercyMSLibertad"
                    >
                      <FaFacebookF className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  {/* <li><a className='d-flex align-items-center justify-content-center' href="#"><FaInstagram className="fa-brands fa-instagram" /></a></li>
                  <li><a className='d-flex align-items-center justify-content-center' href="#"><FaTwitter className="fa-brands fa-twitter" /></a></li>
                  <li><a className='d-flex align-items-center justify-content-center' href="#"><FaGithub className="fa-brands fa-github" /></a></li> */}
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="vl-footer-widget-2 pl-90 mb-30">
              <h3 className="title">Quick Links</h3>
              <div className="vl-footer-menu">
                <ul>
                  <li>
                    <a href="/contact">Raffle/Fundraiser</a>
                  </li>
                  <li>
                    <a href="/contact">PPC-PFC</a>
                  </li>
                  <li>
                    <a href="/contact">Church Updates</a>
                  </li>
                  <li>
                    <a href="/contact">Sagrada Familia Slurs</a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="vl-footer-widget-2 pl-30 mb-30">
              <h3 className="title">Our services</h3>
              <div className="vl-footer-menu">
                <ul>
                  <li>
                    <a href="/contact">Donation Online</a>
                  </li>
                  <li>
                    <a href="/contact">Holy Mass</a>
                  </li>
                  <li>
                    <a href="/contact">Adoration of Holy Sacrament</a>
                  </li>
                  <li>
                    <a href="/contact">Confession/Reconciliation</a>
                  </li>
                  <li>
                    <a href="/contact">Devotional & Novenas</a>
                  </li>
                  <li>
                    <a href="/contact">Cathecism</a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="vl-footer-widget-3 mb-30">
              <h3 className="title">Contact Us</h3>
              <div className="vl-footer-icon-list">
                <div className="vl-footer-icon">
                  <span>
                    <img src={footerIc1} alt="footerIc1" />
                  </span>
                </div>
                <div className="vl-footer-text">
                  <a href="mailto:divinemercyms02142023libertad@gmail.com">
                    divinemercyms02142023libertad@gmail.com
                  </a>
                </div>
              </div>
              <div className="vl-footer-icon-list">
                <div className="vl-footer-icon">
                  <span>
                    <img src={footerIc2} alt="footerIc2" />
                  </span>
                </div>
                <div className="vl-footer-text">
                  <a href="#">Brgy. Libertad 6541 Ormoc City, Philippines</a>
                </div>
              </div>
              <div className="vl-footer-icon-list">
                <div className="vl-footer-icon">
                  <span>
                    <img src={footerIc3} alt="footerIc3" />
                  </span>
                </div>
                <div className="vl-footer-text">
                  <a href="tel:09098330651">0909 833 0651</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="vl-copyright copyright-border-1">
          <Row>
            <Col md={6}>
              <p className="vl-copyright-text">
                © 2025 Glotti Business Solutions. All Rights Reserved.
              </p>
            </Col>
            <Col md={6}>
              <div className="vl-copyright-menu">
                <ul>
                  <li>
                    <a href="#">Privacy Policy </a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
