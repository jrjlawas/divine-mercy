import { causesData } from "../data";
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa6";
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
    <section className="vl-cause-inner sp2">
      <Container>
        <Row>
          {causesData.map((item, idx) => (
            <Col lg={4} md={6} key={idx}>
              <div className="vl-single-cause-box gray-bg mb-30">
                <div className="vl-cause-thumb">
                  <img className="w-100" src={item.image} alt="img" />
                  <div className="btn-area casue-btn text-center">
                    <Link to="/raffle-details" className="header-btn1">
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
                        <div className="skill-bar">
                          <span className="skill-per html">
                            <span className="tooltipp">{item.progress}%</span>
                          </span>
                        </div>
                        <div className="skill-vlue">
                          <div className="num1">
                            <span>Tickets Sold: </span>
                            {item.raised}
                          </div>
                          <div className="num1">
                            <span>Goal: </span>
                            {item.goal}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="badge mt-32">
                    Raffle Draw: {""}
                    {formatNumber(timeLeft.days)}d{" "}
                    {formatNumber(timeLeft.hours)}h{" "}
                    {formatNumber(timeLeft.minutes)}m{" "}
                    {formatNumber(timeLeft.seconds)}s
                  </a>
                  <h3 className="title">
                    <Link to="/raffle-details">{item.title}</Link>
                  </h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Causes;
