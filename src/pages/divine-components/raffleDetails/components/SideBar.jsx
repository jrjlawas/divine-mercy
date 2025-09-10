import thumbImg from "@/assets/img/divine-img/raffle/raffle1.jpg";
import { createGcashSource } from "../../../../api/gcash-payment";
import customImg from "@/assets/img/icons/custom-amou.svg";
import dollarImg from "@/assets/img/icons/dollar.svg";
import DefaultImg from "@/assets/img/divine-img/raffle/ticket.png";
import CountDown from "../../functions/countDown";
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import { getRaffleLists } from "../../../../api/rafflesList";
import RaffleGallery from "../../../divine-components/raffleGallery";

const SideBar = ({ raffleId }) => {
  const prices = [10, 20, 30, 40, 50];
  const [value, setValue] = useState(10);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ visible: false, message: "", type: "" });
  const [formData, setFormData] = useState({
    itemCode: "",
    DESCR1: "",
    DESCR2: "",
    DESCR3: "",
    DRAW_DT: "",
    FB_LIVE: "",
    IS_FEATURE: "",
    PROGRESS: "",
    SHORT_DESCR: "",
    STATUS: "",
    THUMBNAIL_URL: "",
    TICKET_COST: "",
    TICKET_GOAL: "",
    TICKET_SOLD: "",
    TITLE: "",
    YT_LIVE: "",
    GALLERY1: "",
    GALLERY2: "",
    GALLERY3: "",
    GALLERY4: "",
    GALLERY5: "",
    GALLERY6: "",
  });

  useEffect(() => {
    const getLists = async () => {
      try {
        const data = await getRaffleLists();
        const raffle = data.find((r) => r.itemCode === raffleId);
        setFormData({
          itemCode: raffleId,
          DESCR1: raffle.DESCR1 || "",
          DESCR2: raffle.DESCR2 || "",
          DESCR3: raffle.DESCR3 || "",
          DRAW_DT: raffle.DRAW_DT || "",
          FB_LIVE: raffle.FB_LIVE || "",
          IS_FEATURE: raffle.IS_FEATURE || "",
          PROGRESS: raffle.PROGRESS || "",
          SHORT_DESCR: raffle.SHORT_DESCR || "",
          STATUS: raffle.STATUS || "",
          THUMBNAIL_URL: raffle.THUMBNAIL_URL || "",
          TICKET_COST: raffle.TICKET_COST || "",
          TICKET_GOAL: raffle.TICKET_GOAL || "",
          TICKET_SOLD: raffle.TICKET_SOLD || "",
          TITLE: raffle.TITLE || "",
          YT_LIVE: raffle.YT_LIVE || "",
          GALLERY1: raffle.GALLERY1 || "",
          GALLERY2: raffle.GALLERY2 || "",
          GALLERY3: raffle.GALLERY3 || "",
          GALLERY4: raffle.GALLERY4 || "",
          GALLERY5: raffle.GALLERY5 || "",
          GALLERY6: raffle.GALLERY6 || "",
        });
      } catch (error) {
        console.error("Error fetching raffle:", error);
      }
    };
    getLists();
  }, []);

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
                  src={
                    formData.THUMBNAIL_URL ? formData.THUMBNAIL_URL : DefaultImg
                  }
                  alt="thumbImg"
                />
              </div>
              <div className="vl-event-box-bg cause-box-bg">
                <Row>
                  <div className="skill-progress">
                    <div className="skill-box">
                      <div className="skill-bar">
                        <span
                          className="skill-per html"
                          style={{
                            width: `${parseFloat(formData.PROGRESS)}%`,
                            // height: `${parseFloat(raffle.PROGRESS)}%`,
                            // opacity: 1,
                          }}
                        >
                          {/* <span className="tooltipp">
                            {parseFloat(formData.PROGRESS)}%
                          </span> */}
                        </span>
                      </div>
                      <div className="skill-vlue">
                        <div className="num1">
                          <span>Tickets Sold: </span>
                          {formData.TICKET_SOLD}
                        </div>
                        <div className="num1">
                          <span>Goal: </span>
                          {formData.TICKET_GOAL}
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
                    <h4 className="title pb-32">
                      “Coming soon! Divine Mercy Church raffle tickets will be
                      available shortly — thank you for your support.”
                    </h4>
                    {/* <h4 className="title pb-32">Billing Details</h4>
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
                    </form> */}
                  </div>

                  {/* <div className="total-anoumt">
                    <div className="toal">
                      <div className="btn-area">
                        <button className="header-btn1" onClick={handlePay}>
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
                      <h2 className="title">
                        Total: Php {formData.TICKET_COST}
                      </h2>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="event-content-area">
              <h2 className="title pt-5">
                [{formData.itemCode}]: {formData.TITLE}
              </h2>
              <p className="para">{formData.DESCR1}</p>
              <h2 className="title pt-5">Raffle Mechanics</h2>
              <p className="para">{formData.DESCR2}</p>
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

          <RaffleGallery formData={formData} />
        </Row>
      </Container>
    </div>
  );
};
export default SideBar;
