import thumbImg from "@/assets/img/divine-img/raffle/raffle1.jpg";
import { createGcashSource } from "../../../../api/gcash-payment";
import customImg from "@/assets/img/icons/custom-amou.svg";
import dollarImg from "@/assets/img/icons/dollar.svg";

import CountDown from "../../functions/countDown";
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";

const SideBar = () => {
  const prices = [10, 20, 30, 40, 50];
  const [value, setValue] = useState(10);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ visible: false, message: "", type: "" });

  //Toast Alert Functionality
  const showAlert = (message, type = "success") => {
    setAlert({ visible: true, message, type });
    // setTimeout(() => setAlert({ visible: false, message: "", type: "" }), 5000);
  };

  //Countdown Functionality
  const targetDate = "2025-12-25T18:00:00";
  const formatNumber = (num) => String(num).padStart(2, "0");
  const timeLeft = CountDown(targetDate);
  if (!timeLeft) {
    return <span>Time's up!</span>;
  }

  const [billing, setBilling] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  //Payment Functionality
  const handlePay = async () => {
    setLoading(true);
    const isEmpty = Object.values(billing).some((value) => value.trim() === "");
    if (isEmpty) {
      showAlert("Please fill in all billing details!", "error");
      setLoading(false);
      return;
    }
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
      const checkoutUrl = data?.data?.attributes?.checkout_url;
      if (checkoutUrl) {
        // setLoading(false);
        window.location.href = checkoutUrl;
      } else {
        setLoading(false);
        console.error("Checkout URL not found in response:", checkoutUrl);
      }
    } catch (error) {
      showAlert(
        "Sorry! The payment gateway is currently not available.",
        "error"
      );
      setLoading(false);
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
                <div className="donate-form">
                  <div className="select-method">
                    <h4 className="title pb-32">Billing Details</h4>
                    <form action="#">
                      <Row>
                        <Col lg={6} md={6} className="mb-20">
                          <input
                            type="text"
                            placeholder="First Name"
                            value={billing.firstName}
                            onChange={(e) =>
                              setBilling({
                                ...billing,
                                firstName: e.target.value,
                              })
                            }
                          />
                        </Col>
                        <Col lg={6} md={6} className="mb-20">
                          <input
                            type="text"
                            placeholder="Last Name"
                            value={billing.lastName}
                            onChange={(e) =>
                              setBilling({
                                ...billing,
                                lastName: e.target.value,
                              })
                            }
                          />
                        </Col>
                        <Col lg={12} md={6} className="mb-20">
                          <input
                            type="email"
                            placeholder="Email Address"
                            value={billing.email}
                            onChange={(e) =>
                              setBilling({
                                ...billing,
                                email: e.target.value,
                              })
                            }
                          />
                        </Col>
                        <Col lg={12} md={6} className="mb-20">
                          <input
                            type="text"
                            placeholder="Address Line"
                            value={billing.address}
                            onChange={(e) =>
                              setBilling({
                                ...billing,
                                address: e.target.value,
                              })
                            }
                          />
                        </Col>

                        <Col lg={4} md={6} className="mb-20">
                          <input
                            type="text"
                            placeholder="City"
                            value={billing.city}
                            onChange={(e) =>
                              setBilling({
                                ...billing,
                                city: e.target.value,
                              })
                            }
                          />
                        </Col>
                        <Col lg={4} md={6} className="mb-20">
                          <input
                            type="text"
                            placeholder="State / Province / Region"
                            value={billing.state}
                            onChange={(e) =>
                              setBilling({
                                ...billing,
                                state: e.target.value,
                              })
                            }
                          />
                        </Col>
                        <Col lg={4} md={6} className="mb-20">
                          <input
                            type="text"
                            placeholder="Zip / Postal Code"
                            value={billing.zip}
                            onChange={(e) =>
                              setBilling({
                                ...billing,
                                zip: e.target.value,
                              })
                            }
                          />
                        </Col>
                        <Col lg={12} md={6} className="mb-20">
                          {alert.visible && (
                            <div className={`alert-box ${alert.type}`}>
                              {alert.message}
                            </div>
                          )}
                        </Col>
                      </Row>
                    </form>
                  </div>

                  <div className="total-anoumt">
                    <div className="toal">
                      <div className="btn-area">
                        <button className="header-btn1" onClick={handlePay}>
                          {/* Pay Ticket{" "}
                          <span>
                            <FaArrowRight />
                          </span> */}

                          {loading ? (
                            <>
                              Loading
                              <span className="spinner"></span>
                            </>
                          ) : (
                            <>
                              Pay Ticket{" "}
                              <span>
                                <FaArrowRight />
                              </span>
                            </>
                          )}
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
