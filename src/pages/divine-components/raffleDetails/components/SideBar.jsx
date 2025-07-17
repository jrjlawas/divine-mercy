import thumbImg from "@/assets/img/divine-img/raffle/raffle1.jpg";
import { createGcashSource } from "../../../../api/gcash-payment";
import customImg from "@/assets/img/icons/custom-amou.svg";
import dollarImg from "@/assets/img/icons/dollar.svg";

import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";

const SideBar = () => {
  const prices = [10, 20, 30, 40, 50];
  const [value, setValue] = useState(10);

  const targetDate = "2025-12-25T18:00:00";
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
  const handlePay = async () => {
    try {
      const res = await fetch(
        "https://j8lq1xoukb.execute-api.ap-southeast-2.amazonaws.com/gcashpayment",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(1000),
        }
      );
      const data = await res.json();
      const strdata = JSON.stringify(data);
      console.error("Normal Data:", data);
      console.error("Stringified Data:", strdata);

      if (strdata.attributes.checkout_url) {
        // Redirect to checkout URL
        window.location.href = strdata.attributes.checkout_url;
      } else {
        console.error("Checkout URL not found in response:", strdata);
      }
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  return (
    <div className="vl-sidebar-area sp2">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <div className="vl-event-content-area">
              <div className="vl-large-thumb">
                <img
                  className="w-100 img-fluid"
                  src={thumbImg}
                  alt="thumbImg"
                />
              </div>
              <div className="vl-event-box-bg cause-box-bg">
                <Row>
                  <div className="skill-progress">
                    <div className="skill-box">
                      <div className="skill-bar">
                        <span className="skill-per html">
                          <span className="tooltipp">16%</span>
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
                  {/* <h2 className="title">Jeep 4x4 – Fully Customized</h2> */}
                  <div className="display-amount" id="displayAmount">
                    Raffle Draw: {""}
                    {formatNumber(timeLeft.days)}d{" "}
                    {formatNumber(timeLeft.hours)}h{" "}
                    {formatNumber(timeLeft.minutes)}m{" "}
                    {formatNumber(timeLeft.seconds)}s
                  </div>
                </Row>
                <div className="space-div">
                  <div className="select-method">
                    <h4 className="title pb-32">Select Payment Method</h4>
                    <div className="select-meth">
                      <div className="online">
                        <input
                          type="radio"
                          id="Online"
                          name="fav_language"
                          defaultValue="Online"
                        />
                        <label htmlFor="Online">GCash</label>
                        <br />
                      </div>
                      <div className="ofline">
                        <input
                          type="radio"
                          id="Offline"
                          name="fav_language"
                          defaultValue="Offline"
                        />
                        <label htmlFor="Offline">Credit/Debit Card</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="donate-form">
                  {/* <div className="select-method">
                    <h4 className="title pb-32">Select Payment Method</h4>
                  </div> */}
                  <form action="#">
                    <Row>
                      <Col lg={6} md={6} className="mb-20">
                        <input type="text" placeholder="First Name" />
                      </Col>
                      <Col lg={6} md={6} className="mb-20">
                        <input type="text" placeholder="Last Name" />
                      </Col>
                      <Col lg={12} md={6} className="mb-20">
                        <input type="email" placeholder="Email Address" />
                      </Col>
                      <Col lg={12} md={6} className="mb-20">
                        <input type="text" placeholder="Address Line" />
                      </Col>

                      <Col lg={4} md={6} className="mb-20">
                        <input type="text" placeholder="City" />
                      </Col>
                      <Col lg={4} md={6} className="mb-20">
                        <input
                          type="text"
                          placeholder="State / Province / Region"
                        />
                      </Col>
                      <Col lg={4} md={6} className="mb-20">
                        <input type="text" placeholder="Zip / Postal Code" />
                      </Col>
                    </Row>
                  </form>
                  <div className="total-anoumt">
                    <div className="toal">
                      <div className="btn-area">
                        <button className="header-btn1" onClick={handlePay}>
                          Pay Ticket{" "}
                          <span>
                            <FaArrowRight />
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="content">
                      <h2 className="title">Total: Php 300.00</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="event-content-area">
              <h2 className="title pt-5">Jeep 4x4 – Fully Customized</h2>
              <p className="para">
                This isn't just a vehicle—it's a statement. The Fully Customized
                Jeep 4x4 is built for performance, comfort, and adventure. With
                rugged durability and head-turning style, this off-road beast is
                perfect for both the wild outdoors and city cruising. Whether
                you're tackling muddy trails or heading to Sunday Mass, this
                ride can do it all.
              </p>
              <h2 className="title pt-5">Why It Matters</h2>
              <p className="para">
                Every raffle ticket you purchase doesn’t just bring you closer
                to driving away with this incredible vehicle—it also helps build
                a house of worship for our community. 100% of the proceeds from
                this raffle will go directly to the ongoing construction of
                Divine Mercy Church in Barangay Libertad, Ormoc City, Leyte,
                Philippines.
              </p>
              <h2 className="title pt-5">
                Make a Difference With Every Ticket
              </h2>
              <p className="para">
                By joining this fundraiser, you're not just entering to
                win—you’re part of something greater. You're helping us raise
                walls, install altars, and create a spiritual home where
                generations can pray, grow, and find peace in the presence of
                God.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default SideBar;
