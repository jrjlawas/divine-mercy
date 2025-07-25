import { Link } from "react-router";
import logo1 from "@/assets/img/divine-img/logos/logo80.jpg";
import footerLogo1 from "@/assets/img/divine-img/logos/logo80.jpg";
import {
  FaArrowRight,
  FaBars,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaPhoneVolume,
  FaXmark,
  FaYoutube,
} from "react-icons/fa6";
import useToggle from "@/hooks/useToggle";
import { Col, Container } from "react-bootstrap";
const SingleMobileMenu = () => {
  const { isOpen, toggle } = useToggle();
  return (
    <>
      <div className="mobile-header mobile-haeder1 d-block d-lg-none">
        <Container>
          <Col xs={12}>
            <div className="mobile-header-elements">
              <div className="mobile-logo">
                <Link to="/">
                  <img src={logo1} alt="logo1" />
                </Link>
              </div>
              <div onClick={toggle} className="mobile-nav-icon dots-menu">
                <FaBars className="fa-solid fa-bars" />
              </div>
            </div>
          </Col>
        </Container>
      </div>
      <div
        className={`mobile-sidebar mobile-sidebar1 ${
          isOpen && "mobile-menu-active"
        }`}
      >
        <div className="logosicon-area">
          <div className="logos">
            <img src={footerLogo1} alt="footerLogo1" />
          </div>
          <div onClick={toggle} className="menu-close">
            <FaXmark className="fa-solid fa-xmark" />
          </div>
        </div>
        <div className="mobile-nav mobile-nav1">
          <ul className="mobile-nav-list nav-list1">
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
          <div className="allmobilesection">
            <Link to="/church-donate" className="header-mobile-btn1">
              Donate{" "}
              <span>
                <FaArrowRight />
              </span>
            </Link>
            <div className="vl-mobile-contact1">
              <h3 className="title">Contact Info</h3>
              <div className="footer1-contact-info">
                <div className="contact-info-single">
                  <div className="contact-info-icon">
                    <FaPhoneVolume
                      size={16}
                      className="fa-solid fa-phone-volume"
                    />
                  </div>
                  <div className="contact-info-text">
                    <a href="tel:09098330651">0909 833 0651</a>
                  </div>
                </div>
                <div className="contact-info-single">
                  <div className="contact-info-icon">
                    <FaEnvelope size={16} className="fa-solid fa-envelope" />
                  </div>
                  <div className="contact-info-text">
                    <a href="mailto:divinemercyms02142023libertad@gmail.com">
                      divinemercyms02142023libertad@gmail.com
                    </a>
                  </div>
                </div>
                <div className="contact-info-single">
                  <div className="contact-info-icon">
                    <FaLocationDot
                      size={16}
                      width={16}
                      height={16}
                      className="fa-solid fa-location-dot"
                    />
                  </div>
                  <div className="contact-info-text">
                    <a href="mailto:info@example.com">
                      Brgy. Libertad, Ormoc City, Philippines
                    </a>
                  </div>
                </div>
                <div className="vl-mobile-contact1">
                  <h3 className="title">Social Links</h3>
                  <div className="social-links-mobile-menu">
                    <ul>
                      <li>
                        <a
                          className="d-flex align-items-center justify-content-center"
                          href="https://www.facebook.com/DivineMercyMSLibertad"
                        >
                          <FaFacebookF className="fa-brands fa-facebook-f" />
                        </a>
                      </li>
                      {/* <li>
                        <a
                          className="d-flex align-items-center justify-content-center"
                          href="#"
                        >
                          <FaInstagram className="fa-brands fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="d-flex align-items-center justify-content-center"
                          href="#"
                        >
                          <FaLinkedinIn className="fa-brands fa-linkedin-in" />
                        </a>
                      </li> */}
                      {/* <li>
                        <a
                          className="d-flex align-items-center justify-content-center"
                          href="#"
                        >
                          <FaYoutube className="fa-brands fa-youtube" />
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleMobileMenu;
