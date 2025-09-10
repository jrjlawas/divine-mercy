import gallerySearch from "@/assets/img/icons/vl-gallery-search-1.1.svg";

import galleryImg1 from "@/assets/img/divine-img/gallery/gallery1.jpg";
import galleryImg2 from "@/assets/img/divine-img/gallery/gallery2.jpg";
import galleryImg3 from "@/assets/img/divine-img/gallery/gallery3.jpg";
import galleryImg4 from "@/assets/img/divine-img/gallery/gallery4.jpg";
import galleryImg5 from "@/assets/img/divine-img/gallery/gallery5.jpg";
import galleryImg6 from "@/assets/img/divine-img/gallery/gallery6.jpg";
import { Col, Container, Row } from "react-bootstrap";
import GlightBox from "@/components/GlightBox";
const RaffleGallery = ({ formData }) => {
  return (
    <section id="gallery" className="vl-gallery sp2">
      <Container>
        <div className="vl-gallery-content mb-60">
          <div className="vl-section-title-1">
            <h5
              className="subtitle"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-delay={300}
            >
              Raffle Code: {formData.itemCode}
            </h5>
            <h2 className="title text-anime-style-3">Item Gallery</h2>
          </div>
          <div
            className="vl-gallery-btn text-end"
            data-aos="fade-left"
            data-aos-duration={900}
            data-aos-delay={300}
          ></div>
        </div>
        <GlightBox>
          <Row>
            {formData.GALLERY1 && (
              <Col lg={6} md={6} className="mb-30">
                <div
                  className="vl-single-box"
                  data-aos="zoom-in-up"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  <img
                    className="w-100"
                    src={formData.GALLERY1}
                    alt={formData.GALLERY1}
                  />
                  <a
                    href={formData.GALLERY1}
                    target="_"
                    className="glightbox search-ic"
                  >
                    <span>
                      <img src={gallerySearch} alt="gallerySearch" />
                    </span>
                  </a>
                </div>
              </Col>
            )}
            {formData.GALLERY2 && (
              <Col lg={6} md={6} className="mb-30">
                <div
                  className="vl-single-box"
                  data-aos="zoom-in-up"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  <img
                    className="w-100"
                    src={formData.GALLERY2}
                    alt={formData.GALLERY2}
                  />
                  <a
                    href={formData.GALLERY2}
                    target="_"
                    className="glightbox search-ic"
                  >
                    <span>
                      <img src={gallerySearch} alt="gallerySearch" />
                    </span>
                  </a>
                </div>
              </Col>
            )}
            {formData.GALLERY3 && (
              <Col lg={6} md={6} className="mb-30">
                <div
                  className="vl-single-box"
                  data-aos="zoom-in-up"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  <img
                    className="w-100"
                    src={formData.GALLERY3}
                    alt={formData.GALLERY3}
                  />
                  <a
                    href={formData.GALLERY3}
                    target="_"
                    className="glightbox search-ic"
                  >
                    <span>
                      <img src={gallerySearch} alt="gallerySearch" />
                    </span>
                  </a>
                </div>
              </Col>
            )}
            {formData.GALLERY4 && (
              <Col lg={6} md={6} className="mb-30">
                <div
                  className="vl-single-box"
                  data-aos="zoom-in-up"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  <img
                    className="w-100"
                    src={formData.GALLERY4}
                    alt={formData.GALLERY4}
                  />
                  <a
                    href={formData.GALLERY4}
                    target="_"
                    className="glightbox search-ic"
                  >
                    <span>
                      <img src={gallerySearch} alt="gallerySearch" />
                    </span>
                  </a>
                </div>
              </Col>
            )}
            {formData.GALLERY5 && (
              <Col lg={6} md={6} className="mb-30">
                <div
                  className="vl-single-box"
                  data-aos="zoom-in-up"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  <img
                    className="w-100"
                    src={formData.GALLERY5}
                    alt={formData.GALLERY5}
                  />
                  <a
                    href={formData.GALLERY5}
                    target="_"
                    className="glightbox search-ic"
                  >
                    <span>
                      <img src={gallerySearch} alt="gallerySearch" />
                    </span>
                  </a>
                </div>
              </Col>
            )}
            {formData.GALLERY6 && (
              <Col lg={6} md={6} className="mb-30">
                <div
                  className="vl-single-box"
                  data-aos="zoom-in-up"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  <img
                    className="w-100"
                    src={formData.GALLERY6}
                    alt={formData.GALLERY6}
                  />
                  <a
                    href={formData.GALLERY6}
                    target="_"
                    className="glightbox search-ic"
                  >
                    <span>
                      <img src={gallerySearch} alt="gallerySearch" />
                    </span>
                  </a>
                </div>
              </Col>
            )}
          </Row>
        </GlightBox>
      </Container>
    </section>
  );
};
export default RaffleGallery;
