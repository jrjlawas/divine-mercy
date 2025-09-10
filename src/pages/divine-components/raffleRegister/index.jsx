import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Select from "react-select";

import { registerRaffle } from "../../../api/rafflesRegister";

const RaffleRegister = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ visible: false, message: "", type: "" });
  const showAlert = (message, type = "success") => {
    setAlert({ visible: true, message, type });
  };
  const optionsStatus = [
    {
      value: "Inactive",
      label: "Inactive",
    },
    {
      value: "Active",
      label: "Active",
    },
    {
      value: "Draw in Progress",
      label: "Draw in Progress",
    },
    {
      value: "Draw Completed",
      label: "Draw Completed",
    },
  ];
  const optionsFeature = [
    {
      value: "Yes",
      label: "Yes",
    },
    {
      value: "No",
      label: "No",
    },
  ];
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
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const updatedForm = {
      ...formData,
      [name]: value,
    };

    const sold = parseFloat(updatedForm.TICKET_SOLD);
    const goal = parseFloat(updatedForm.TICKET_GOAL);

    if (
      updatedForm.TICKET_SOLD !== "" &&
      updatedForm.TICKET_GOAL !== "" &&
      !isNaN(sold) &&
      !isNaN(goal) &&
      goal !== 0
    ) {
      const rawProgress = (sold / goal) * 100;
      updatedForm.PROGRESS = Math.round(Math.min(rawProgress, 100)).toString();
    } else {
      updatedForm.PROGRESS = "";
    }

    setFormData(updatedForm);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await registerRaffle(formData);
      console.log("Raffle registered:", response.error);
      if (response.error == "Missing required fields") {
        setLoading(false);
        showAlert(
          "Missing Required Field. The 'Raffle Code', 'Title' and 'Draw Date' should not be empty.",
          "error"
        );
      } else if (response.error == "Invalid date format. Use YYYY-MM-DD.") {
        setLoading(false);
        showAlert("Invalid date format. Use YYYY-MM-DD.", "error");
      } else {
        showAlert(
          "Your raffle has been successfully registered. You can now view it in the Raffle Lists tab.",
          "success"
        );
        setFormData({
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
        setLoading(false);
      }
    } catch (error) {
      showAlert(
        "API Gateway error. Please contact Glotti Business Solutions at info@glottii.com",
        "error"
      );
    }
  };

  return (
    <section className="vl-contact-section-inner sp2">
      <Container>
        <div className="vl-section-title-1">
          <h5
            className="subtitle"
            data-aos="fade-right"
            data-aos-duration={800}
            data-aos-delay={300}
          >
            Raffle Manager
          </h5>
          <h2 className="title text-anime-style-3">Raffle Register</h2>
        </div>
        <div
          className="vl-gallery-btn text-end"
          data-aos="fade-left"
          data-aos-duration={900}
          data-aos-delay={300}
        ></div>
        {/* </div> */}
        <Row className=" flex-lg-row flex-column-reverse">
          <Col lg={12}>
            <div className="vl-section-content ml-50">
              <div className="vl-form-inner">
                <form action="#">
                  <Row>
                    <Col lg={4}>
                      <input
                        type="text"
                        placeholder="Raffle Code*"
                        name="itemCode"
                        value={formData.itemCode}
                        onChange={handleChange}
                        required
                      />
                    </Col>
                    <Col lg={4}>
                      <input
                        type="text"
                        placeholder="Title*"
                        name="TITLE"
                        value={formData.TITLE}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col lg={4}>
                      <input
                        type="text"
                        placeholder="Draw Date(yyyy-mm-dd)"
                        name="DRAW_DT"
                        value={formData.DRAW_DT}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col lg={4}>
                      <input
                        type="text"
                        placeholder="Thumbnail URL"
                        name="THUMBNAIL_URL"
                        value={formData.THUMBNAIL_URL}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col lg={4} className="mb-3">
                      <Select
                        options={optionsStatus}
                        className="react-select-container"
                        classNamePrefix="react-select"
                        placeholder="Raffle Status*"
                        name="STATUS"
                        value={optionsStatus.find(
                          (opt) => opt.value === formData.STATUS
                        )}
                        onChange={(selectedOption) =>
                          setFormData((prev) => ({
                            ...prev,
                            STATUS: selectedOption.value,
                          }))
                        }
                      />
                    </Col>
                    <Col lg={4} className="mb-3">
                      <Select
                        options={optionsFeature}
                        className="react-select-container"
                        classNamePrefix="react-select"
                        placeholder="Is Featured?*"
                        name="IS_FEATURE"
                        value={optionsFeature.find(
                          (opt) => opt.value === formData.IS_FEATURE
                        )}
                        onChange={(selectedOption) =>
                          setFormData((prev) => ({
                            ...prev,
                            IS_FEATURE: selectedOption.value,
                          }))
                        }
                      />
                    </Col>
                    <Col lg={4}>
                      <input
                        type="text"
                        placeholder="FB Live URL"
                        name="FB_LIVE"
                        value={formData.FB_LIVE}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col lg={4}>
                      <input
                        type="text"
                        placeholder="YT Live URL"
                        name="YT_LIVE"
                        value={formData.YT_LIVE}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col lg={4}>
                      <input
                        type="number"
                        placeholder="Ticket Cost(Php)*"
                        name="TICKET_COST"
                        value={formData.TICKET_COST}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col lg={4}>
                      <input
                        type="number"
                        placeholder="Sold Tickets*"
                        name="TICKET_SOLD"
                        value={formData.TICKET_SOLD}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col lg={4}>
                      <input
                        type="number"
                        placeholder="Goal Tickets*"
                        name="TICKET_GOAL"
                        value={formData.TICKET_GOAL}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col lg={4}>
                      <input
                        type="number"
                        placeholder="Progress %*"
                        name="PROGRESS"
                        value={formData.PROGRESS}
                        onChange={handleChange}
                        readOnly
                      />
                    </Col>
                    <Col lg={12}>
                      <textarea
                        placeholder="Short Description*"
                        name="SHORT_DESCR"
                        value={formData.SHORT_DESCR}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col lg={12}>
                      <textarea
                        placeholder="Long Description 1*"
                        name="DESCR1"
                        value={formData.DESCR1}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col lg={12}>
                      <textarea
                        placeholder="Long Description 2*"
                        name="DESCR2"
                        value={formData.DESCR2}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col lg={12}>
                      <textarea
                        placeholder="Long Description 3*"
                        name="DESCR3"
                        value={formData.DESCR3}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col lg={12}>
                      <input
                        type="text"
                        placeholder="Gallery1"
                        name="GALLERY1"
                        value={formData.GALLERY1}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col lg={12}>
                      <input
                        type="text"
                        placeholder="Gallery2"
                        name="GALLERY2"
                        value={formData.GALLERY2}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col lg={12}>
                      <input
                        type="text"
                        placeholder="Gallery3"
                        name="GALLERY3"
                        value={formData.GALLERY3}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col lg={12}>
                      <input
                        type="text"
                        placeholder="Gallery4"
                        name="GALLERY4"
                        value={formData.GALLERY4}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col lg={12}>
                      <input
                        type="text"
                        placeholder="Gallery5"
                        name="GALLERY5"
                        value={formData.GALLERY5}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col lg={12}>
                      <input
                        type="text"
                        placeholder="Gallery6"
                        name="GALLERY6"
                        value={formData.GALLERY6}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col lg={12}>
                      {alert.visible && (
                        <div className={`alert-box ${alert.type}`}>
                          {alert.message}
                        </div>
                      )}
                    </Col>
                    <Col lg={12}>
                      <br></br>
                      <div className="btn-area">
                        <button
                          type="button"
                          className="header-btn1"
                          onClick={handleSubmit}
                        >
                          {loading ? (
                            <>
                              Submitting..
                              <span className="spinner"></span>
                            </>
                          ) : (
                            <>
                              Register{" "}
                              <span>
                                <FaArrowRight />
                              </span>
                            </>
                          )}
                        </button>
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RaffleRegister;
