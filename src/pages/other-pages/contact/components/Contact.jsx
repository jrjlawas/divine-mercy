import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa6';
import Select from 'react-select';
const options = [{
  value: '',
  label: 'Donation To'
}, {
  value: 1,
  label: 'Health and Medical Support'
}, {
  value: 2,
  label: 'Education and Training'
}, {
  value: 3,
  label: 'Relief and Aid Services'
}, {
  value: 4,
  label: 'Community Development'
}, {
  value: 5,
  label: 'Environmental Conservation'
}];
const Contact = () => {
  return <section className="vl-contact-section-inner sp2">
            <Container>
                <Row className=" flex-lg-row flex-column-reverse">
                    <Col lg={6} className="mb-30">
                        <div className="vl-maps">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423284.04421055503!2d-118.74139674995793!3d34.020608447020685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1734253501055!5m2!1sen!2sbd" allowFullScreen className="vl-contact-maps" />
                        </div>
                    </Col>
                    <Col lg={6} className="mb-30">
                        <div className="vl-section-content ml-50">
                            <div className="section-title">
                                <h4 className="subtitle">Contact Us</h4>
                                <h2 className="title">Reach Together, We Can Make a Difference</h2>
                                <p className="para pb-32">We’re here to answer questions, provide information about
                                    our <br /> work, and help you find ways to get involved whetherinterested.</p>
                            </div>
                            <div className="vl-form-inner">
                                <form action="#">
                                    <Row>
                                        <Col lg={6}>
                                            <input type="text" placeholder="First Name*" />
                                        </Col>
                                        <Col lg={6}>
                                            <input type="text" placeholder="Last Name*" />
                                        </Col>
                                        <Col lg={6}>
                                            <input type="email" placeholder="Email Address*" />
                                        </Col>
                                        <Col lg={6}>
                                            <input type="number" placeholder="Amount; $*" />
                                        </Col>
                                        <Col lg={12} className="mb-3">
                                            <Select options={options} className="react-select-container" classNamePrefix="react-select" placeholder="Donation To" />
                                        </Col>
                                        <Col lg={12}>
                                            <textarea name="message" id="message" placeholder="How can we help you?*" defaultValue={""} />
                                        </Col>
                                        <Col lg={12}>
                                            <div className="btn-area">
                                                <button className="header-btn1">Send Now <span><FaArrowRight /></span>
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
        </section>;
};
export default Contact;