import { FaGithub } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router";
import arrowLeft from "@/assets/img/icons/vl-arrow-left-1.1.svg";
import angleRight from "@/assets/img/icons/vl-angle-right-1.2.svg";

import team1 from "@/assets/img/divine-img/slurs/team1.png";
import team2 from "@/assets/img/divine-img/slurs/team2.png";
import team3 from "@/assets/img/divine-img/slurs/team3.png";
import team4 from "@/assets/img/divine-img/slurs/team4.png";
import team5 from "@/assets/img/divine-img/slurs/team5.png";
import team6 from "@/assets/img/divine-img/slurs/team6.png";
import team7 from "@/assets/img/divine-img/slurs/team7.png";

const TeamSlurs = () => {
  const teamData = [
    {
      name: "Kuya Crisz",
      role: "Lead Choir",
      image: team1,
    },
    {
      name: "An",
      role: "Member",
      image: team2,
    },
    {
      name: "Kevin",
      role: "Member",
      image: team3,
    },
    {
      name: "Hanna",
      role: "Member",
      image: team4,
    },
    {
      name: "Nicole",
      role: "Member",
      image: team5,
    },
    {
      name: "Ate Adel",
      role: "Member",
      image: team6,
    },
    // {
    //   name: "Juging",
    //   role: "Member",
    //   image: team7,
    // },
  ];
  return (
    <section className="vl-team-bg-1 sp1">
      <Container>
        <div className="vl-team-section-title mb-60 text-center">
          <div className="vl-section-title-1">
            <h5
              className="subtitle"
              data-aos="fade-up"
              data-aos-duration={800}
              data-aos-delay={300}
            >
              Meet Our Core Members
            </h5>
            <h2 className="title text-anime-style-3">
              The Voices Behind the Harmony
            </h2>
            <p data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
              Get to know the passionate individuals who lead and inspire the
              Sagrada Familia Slurs. <br />
              More than just singers, they are mentors, organizers, and
              spiritual companions who help guide our choir’s mission.
            </p>
          </div>
        </div>
        <Row id="team1">
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={4}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            spaceBetween={30}
          >
            {teamData?.map((item, idx) => (
              <SwiperSlide className="vl-team-parent" key={idx}>
                <div className="vl-team-thumb">
                  <img
                    width={301}
                    height={357}
                    className="w-100"
                    src={item.image}
                    alt="team"
                  />
                </div>
                {/* <div className="vl-team-social">
                  <ul>
                    <li>
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaGithub />
                      </a>
                    </li>
                  </ul>
                </div> */}
                <div className="vl-team-content text-center">
                  <Link to="#" className="title">
                    {item.name}
                  </Link>
                  <span>{item.role}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="owl-nav">
            <button className="owl-prev swiper-button-prev">
              <img src={arrowLeft} alt="arrowLeft" />
            </button>

            <button className="owl-next swiper-button-next">
              <img src={angleRight} alt="angleRight" />
            </button>
          </div>
        </Row>
      </Container>
    </section>
  );
};
export default TeamSlurs;
