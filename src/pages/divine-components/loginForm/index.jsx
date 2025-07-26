import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ visible: false, message: "", type: "" });

  //Toast Alert Functionality
  const showAlert = (message, type = "success") => {
    setAlert({ visible: true, message, type });
  };
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async () => {
    setLoading(true);
    const isEmpty = Object.values(user).some((value) => value.trim() === "");
    if (isEmpty) {
      showAlert("Please enter user login!", "error");
      setLoading(false);
      return;
    }
    try {
      const res = await fetch(
        "https://cekqdyqqu7.execute-api.ap-southeast-2.amazonaws.com/dm-Utilities",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "login",
            username: user.username,
            password: user.password,
          }),
        }
      );
      const data = await res.json();
      setLoading(false);
      if (res.status == 200) {
        sessionStorage.setItem("user", JSON.stringify(data));
        navigate("/church-admin");
      } else {
        showAlert("Invalid username or password", "error");
        return;
      }
    } catch (error) {
      showAlert(
        "API Gateway error. Please contact Glotti Business Solutions at info@glottii.com",
        "error"
      );

      setLoading(false);
      return;
    }
  };

  return (
    <div className="vl-sidebar-area sp2">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <div className="vl-event-content-area">
              <div className="vl-event-box-bg cause-box-bg">
                <div className="donate-form">
                  <h1 className="title pb-32">Administrator Login</h1>
                  <form action="#">
                    <Row>
                      <Col lg={12} md={6} className="mb-20">
                        <input
                          type="text"
                          placeholder="Username"
                          value={user.username}
                          onChange={(e) =>
                            setUser({
                              ...user,
                              username: e.target.value,
                            })
                          }
                        />
                      </Col>
                      <Col lg={12} md={6} className="mb-20">
                        <input
                          type="password"
                          placeholder="Password"
                          value={user.password}
                          onChange={(e) =>
                            setUser({
                              ...user,
                              password: e.target.value,
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

                  <div className="total-anoumt">
                    <div className="toal">
                      <div className="btn-area">
                        <button className="header-btn1" onClick={handleLogin}>
                          {loading ? (
                            <>
                              Authenticating..
                              <span className="spinner"></span>
                            </>
                          ) : (
                            <>
                              Login{" "}
                              <span>
                                <FaArrowRight />
                              </span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginForm;
