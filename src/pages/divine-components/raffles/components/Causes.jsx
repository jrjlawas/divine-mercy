import { causesData } from "../data";
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
import TruncatedParagraph from "../../functions/wordLimiter";
import Countdown from "../../functions/countDownv2";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getRaffleLists } from "../../../../api/rafflesList";
import DefaultImg from "@/assets/img/divine-img/raffle/ticket.png";

const Causes = () => {
  const navigate = useNavigate();
  // const targetDate = "2025-12-25T18:00:00";
  // const timeLeft = CountDown(targetDate);
  // if (!timeLeft) {
  //   return <span>Time's up!</span>;
  // }
  // const formatNumber = (num) => String(num).padStart(2, "0");

  const [raffles, setRaffles] = useState([]);
  useEffect(() => {
    const getLists = async () => {
      try {
        const data = await getRaffleLists();
        setRaffles(data);
      } catch (error) {
        console.error("Login failed:", error);
      }
    };
    getLists();
  }, []);

  const BuyTicketPage = (id) => {
    // /raffle-details
    navigate(`/raffle-details/${id}`);

    // console.log("Raffle ID from URL:", id);
    // alert(" Ticket sales for this raffle haven't started yet.");
  };

  return (
    <section className="vl-cause-inner sp2">
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
          {raffles.length === 0 ? (
            <Col>
              <div className="vl-single-cause-box mb-30">
                <div className="vl-cause-content">
                  <a href="#" className="badge mt-32">
                    Loading Raffles...
                  </a>
                </div>
              </div>
            </Col>
          ) : (
            raffles
              .filter((raffle) => raffle.STATUS !== "Inactive")
              .sort((a, b) => {
                const statusOrder = {
                  Active: 0,
                  Drawing: 1,
                  Drawed: 2,
                };
                return statusOrder[a.STATUS] - statusOrder[b.STATUS];
              })
              .map((raffle, index) => (
                <Col lg={4} md={6} key={index}>
                  <div className="vl-single-cause-box gray-bg mb-30">
                    <div className="vl-cause-thumb">
                      <img
                        className="w-100"
                        src={
                          raffle.THUMBNAIL_URL
                            ? raffle.THUMBNAIL_URL
                            : DefaultImg
                        }
                        alt="img"
                      />

                      <div className="btn-area casue-btn text-center">
                        <button
                          onClick={() => BuyTicketPage(raffle.itemCode)}
                          className="header-btn1"
                        >
                          Buy Ticket{" "}
                          <span>
                            <FaArrowRight />
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="vl-cause-content">
                      <div className="vl-progress">
                        <div className="skill-progress">
                          <div className="skill-box">
                            <div className="skill-bar">
                              <span
                                className="skill-per html"
                                style={{
                                  width: `${parseFloat(raffle.PROGRESS)}%`,
                                  // height: `${parseFloat(raffle.PROGRESS)}%`,
                                  // opacity: 1,
                                }}
                              >
                                {/* <span className="tooltipp">
                                  {parseFloat(raffle.PROGRESS)}%
                                </span> */}
                              </span>
                            </div>
                            <div className="skill-vlue">
                              <div className="num1">
                                <span>Tickets Sold: </span>
                                {raffle.TICKET_SOLD}
                              </div>
                              <div className="num1">
                                <span>Goal: </span>
                                {raffle.TICKET_GOAL}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          BuyTicketPage(raffle.itemCode);
                        }}
                        className="badge mt-32"
                      >
                        {/* Draw Date: <Countdown targetDate={raffle.DRAW_DT} /> */}
                        {raffle.STATUS === "Drawing" ? (
                          "Draw In-Progress"
                        ) : raffle.STATUS === "Drawed" ? (
                          "Draw Completed"
                        ) : new Date(raffle.DRAW_DT) <= new Date() &&
                          raffle.STATUS === "Active" ? (
                          "Awaiting Draw"
                        ) : (
                          <>
                            Draw Date: <Countdown targetDate={raffle.DRAW_DT} />
                          </>
                        )}
                      </a>
                      <h3 className="title">
                        <Link
                          to="#"
                          onClick={(e) => {
                            e.preventDefault(); // prevents the page from jumping
                            BuyTicketPage(raffle.itemCode);
                          }}
                        >
                          {raffle.TITLE}
                        </Link>
                      </h3>
                      <p>
                        <TruncatedParagraph
                          text={raffle.SHORT_DESCR}
                          limit={150}
                        />
                      </p>
                    </div>
                  </div>
                </Col>
              ))
          )}

          {
            //raffle.DRAW_DT
            // CountDown(targetDate)
            // new Date(raffle.DRAW_DT).toLocaleDateString("en-US", {
            //   year: "numeric",
            //   month: "long",
            //   day: "numeric",
            // })
          }

          {/* {causesData.map((item, idx) => (
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
                  <p>
                    <TruncatedParagraph text={item.description} limit={80} />
                  </p>
                </div>
              </div>
            </Col>
          ))} */}
        </Row>
      </Container>
    </section>
  );
};
export default Causes;
