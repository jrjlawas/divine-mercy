import cause1 from "@/assets/img/divine-img/cause/Cause1.jpg";
import cause2 from "@/assets/img/divine-img/cause/Cause2.jpg";
import cause3 from "@/assets/img/divine-img/cause/Cause4.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
import React, { useState, useEffect } from "react";

const Causes = () => {
  const targetDate = "2025-07-15T18:00:00";

  const formatNumber = (num) => String(num).padStart(2, "0");

  const calculateTimeLeft = () => {
    const now = new Date();
    const end = new Date(targetDate);
    const difference = end - now;

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return <span>Time's up!</span>;
  }

  return (
    <section id="cause" className="vl-causes-area sp2">
      <Container>
        <div className="vl-causes-section-title text-center">
          <div className="vl-section-title-1 mb-60">
            <h5
              className="subtitle"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-delay={300}
            >
              Raffle Fundraiser
            </h5>
            <h2 className="title text-anime-style-3">Win Big, Build Faith</h2>
            <p
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-delay={300}
            >
              Buy a ticket and join our mission. Your chance to win helps build
              our church.
            </p>
          </div>
        </div>
        <Row>
          <Col lg={4} nd={6}>
            <div
              className="vl-single-cause-box mb-30"
              data-aos="fade-right"
              data-aos-duration={1200}
              data-aos-delay={100}
            >
              <div className="vl-cause-thumb">
                <img className="w-100" src={cause1} alt="cause1" />
                <div className="btn-area casue-btn text-center">
                  {/* <Link to="/cause-single" className="header-btn1"> */}
                  <Link to="#" className="header-btn1">
                    Buy Ticket{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="vl-cause-content">
                <div className="vl-progress">
                  <div className="skill-progress">
                    <div className="skill-box">
                      <div className="skill-bar skill-bar2">
                        <span className="skill-per html">
                          <span className="tooltipp">16%</span>
                        </span>
                      </div>
                      <div className="skill-vlue">
                        <div className="num1">
                          <span>Tickets Sold: </span>13,000
                        </div>
                        <div className="num1">
                          <span>Goal: </span>85,000
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#" className="badge mt-32">
                  Raffle Draw: {""}
                  {formatNumber(timeLeft.days)}d {formatNumber(timeLeft.hours)}h{" "}
                  {formatNumber(timeLeft.minutes)}m{" "}
                  {formatNumber(timeLeft.seconds)}s
                </a>
                <h3 className="title">
                  <Link to="/cause-single">Jeep 4x4 - Fully Customized</Link>
                </h3>
                <p>
                  Take home this rugged and stylish ride built for any
                  adventure! Every ticket you purchase brings you closer to
                  winning—and helps fund the construction of Divine Mercy Church
                  in Libertad, Ormoc, Leyte, Philippines.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} nd={6}>
            <div
              className="vl-single-cause-box mb-30"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={300}
            >
              <div className="vl-cause-thumb">
                <img className="w-100" src={cause2} alt="cause2" />
                <div className="btn-area casue-btn text-center">
                  <Link to="/cause-single" className="header-btn1">
                    Buy Ticket{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="vl-cause-content">
                <div className="vl-progress">
                  <div className="skill-progress">
                    <div className="skill-box">
                      <div className="skill-bar skill-bar2">
                        <span className="skill-per html">
                          <span className="tooltipp">28%</span>
                        </span>
                      </div>
                      <div className="skill-vlue">
                        <div className="num1">
                          <span>Tickets Sold: </span>26,000
                        </div>
                        <div className="num1">
                          <span>Goal: </span>90,000
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#" className="badge mt-32">
                  Raffle Draw: {""}
                  {formatNumber(timeLeft.days)}d {formatNumber(timeLeft.hours)}h{" "}
                  {formatNumber(timeLeft.minutes)}m{" "}
                  {formatNumber(timeLeft.seconds)}s
                </a>
                <h3 className="title">
                  <Link to="/cause-single">CFMoto 400cc</Link>
                </h3>
                <p>
                  Experience freedom on the road with this powerful and sleek
                  400cc CFMoto Motorcycle ride. Your ticket isn't just a chance
                  to win—it’s a step toward building the Divine Mercy Church in
                  Libertad, Ormoc, Leyte, Philippines.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} nd={6}>
            <div
              className="vl-single-cause-box mb-30"
              data-aos="fade-left"
              data-aos-duration={700}
              data-aos-delay={300}
            >
              <div className="vl-cause-thumb">
                <img className="w-100" src={cause3} alt="cause3" />
                <div className="btn-area casue-btn text-center">
                  <Link to="/cause-single" className="header-btn1">
                    Buy Ticket{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="vl-cause-content">
                <div className="vl-progress">
                  <div className="skill-progress">
                    <div className="skill-box">
                      <div className="skill-bar skill-bar2">
                        <span className="skill-per html">
                          <span className="tooltipp">24%</span>
                        </span>
                      </div>
                      <div className="skill-vlue">
                        <div className="num1">
                          <span>Tickets Sold: </span>13,701
                        </div>
                        <div className="num1">
                          <span>Goal: </span>60,000
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#" className="badge mt-32">
                  Raffle Draw: {""}
                  {formatNumber(timeLeft.days)}d {formatNumber(timeLeft.hours)}h{" "}
                  {formatNumber(timeLeft.minutes)}m{" "}
                  {formatNumber(timeLeft.seconds)}s
                </a>
                <h3 className="title">
                  <Link to="/cause-single">SM-50R Stand Mixer</Link>
                </h3>
                <p>
                  Perfect for passionate home bakers, this powerful stand mixer
                  brings style and performance to your kitchen. Each raffle
                  ticket supports the construction of Divine Mercy Church in
                  Libertad, Ormoc, Leyte, Philippines.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Causes;
