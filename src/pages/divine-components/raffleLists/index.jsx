import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
import { getRaffleLists } from "../../../api/rafflesList";
import DefaultImg from "@/assets/img/divine-img/raffle/ticket.png";
import TruncatedParagraph from "../functions/wordLimiter";
import React, { useState, useEffect } from "react";

const RaffleLists = ({ onEditClick }) => {
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

  return (
    <section className="vl-cause-inner sp2">
      <Container>
        <div className="vl-gallery-content mb-60">
          <div className="vl-section-title-1">
            <h5
              className="subtitle"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-delay={300}
            >
              Raffle Manager
            </h5>
            <h2 className="title text-anime-style-3">Raffle Lists</h2>
          </div>
          <div
            className="vl-gallery-btn text-end"
            data-aos="fade-left"
            data-aos-duration={900}
            data-aos-delay={300}
          ></div>
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
                          to="#"
                          onClick={() => onEditClick(raffle.itemCode)}
                          className="header-btn1"
                        >
                          Edit Item{" "}
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
                            <div className="skill-vlue">
                              <div className="num1">
                                <span>Sold: </span>
                                {raffle.PROGRESS}
                              </div>
                              <div className="num1">
                                <span>Goal: </span>
                                {raffle.TICKET_GOAL}
                              </div>
                              <div className="num1">
                                <span>Status: </span>
                                {raffle.STATUS}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          onEditClick(raffle.itemCode);
                        }}
                        className="badge mt-32"
                      >
                        Draw Date:{" "}
                        {new Date(raffle.DRAW_DT).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </a>
                      <h3 className="title">
                        <Link
                          to="#"
                          onClick={(e) => {
                            e.preventDefault();
                            onEditClick(raffle.itemCode);
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
        </Row>
      </Container>
    </section>
  );
};

export default RaffleLists;
