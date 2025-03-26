import React, { useState, useEffect } from "react";
import { Modal, Button, Tab, Nav, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Auth.css";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Google from '@/public/images/socialicons/search.png';

const AuthPopup = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const [loginMethod, setLoginMethod] = useState("phone"); 
  
  // Login form states
  const [loginPhone, setLoginPhone] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  
  // Signup form states
  const [signupPhone, setSignupPhone] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showSignupConfirmPassword, setShowSignupConfirmPassword] = useState(false);
  
  const [countdown, setCountdown] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const switchToSignup = () => setActiveTab("signup");
  const switchToLogin = () => setActiveTab("login");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login data:", {
      method: loginMethod,
      phone: loginPhone,
      email: loginEmail,
      password: loginPassword
    });
    handleClose();
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup data:", {
      method: loginMethod,
      phone: signupPhone,
      email: signupEmail,
      password: signupPassword,
      confirmPassword: signupConfirmPassword
    });
    handleClose();
  };

  const toggleLoginPasswordVisibility = () => {
    setShowLoginPassword(!showLoginPassword);
  };

  const toggleSignupPasswordVisibility = () => {
    setShowSignupPassword(!showSignupPassword);
  };

  const toggleSignupConfirmPasswordVisibility = () => {
    setShowSignupConfirmPassword(!showSignupConfirmPassword);
  };
 
  const handleGetCode = () => {
    setIsCounting(true);
    setCountdown(40);
  };

  useEffect(() => {
    let timer;
    if (isCounting && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0) {
      setIsCounting(false);
    }
    return () => clearTimeout(timer);
  }, [countdown, isCounting]);

  return (
    <>
      <button className="flex items-center space-x-1" onClick={handleShow}>
        <strong className='text-decoration-underline'>Login</strong>
      </button>

      <Modal show={show} onHide={handleClose} centered className="daraz-auth-modal"  backdrop="static">
        <Modal.Header closeButton className="modal-header border-0 pb-0">
          <div className="mb-0">
            <Nav variant="pills" className="justify-content-center">
              <Nav.Item>
                <Nav.Link
                  className={`small ${loginMethod === "email" ? "active" : ""}`}
                  onClick={() => setLoginMethod("email")}
                >
                  Email
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className={`small ${loginMethod === "phone" ? "active" : ""}`}
                  onClick={() => setLoginMethod("phone")}
                >
                  Phone
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </Modal.Header>
        <Modal.Body className="modal-body pt-0">
          <Tab.Container activeKey={activeTab}>
            <Tab.Content className="mt-3 tab-content">
              {/* Login Tab */}
              <Tab.Pane eventKey="login">
                <Form onSubmit={handleLoginSubmit}>
                  {loginMethod === "phone" ? (
                    <Form.Group className="mb-3 d-flex align-items-center">
                      <div className="input-group ">
                        <span className="input-group-text" style={{ padding: '0.375rem 0.75rem' }}>
                          <img 
                            src="https://flagcdn.com/w20/pk.png" 
                            alt="Pakistan" 
                            style={{ width: '24px', marginRight: '8px' }} 
                          />
                          <span className="mx-0 mt-1">+92</span>
                        </span>
                        <Form.Control
                          type="tel"
                          placeholder="Phone Number"
                          className="form-control daraz-input"
                          value={loginPhone}
                          onChange={(e) => setLoginPhone(e.target.value)}
                          style={{ paddingLeft: '15px', paddingTop: '15px' }}
                        />
                      </div>
                    </Form.Group>
                  ) : (
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        placeholder="Email Address"
                        className="form-control daraz-input"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                      />
                    </Form.Group>
                  )}
                  
                  <Form.Group className="mb-3">
                    <InputGroup>
                      <Form.Control
                        type={showLoginPassword ? "text" : "password"}
                        placeholder="Password"
                        className="form-control daraz-input"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                      />
                      <InputGroup.Text 
                        className="password-toggle"
                        onClick={toggleLoginPasswordVisibility}
                        style={{ cursor: "pointer" }}
                      >
                        {showLoginPassword ? <FaEyeSlash /> : <FaEye />}
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <Form.Check type="checkbox" label="Remember Me" className="small" />
                    <a href="#" className="text-danger small">Forgot Password?</a>
                  </div>

                  <Button 
                    variant="danger" 
                    type="submit" 
                    className="w-100 mb-3 daraz-primary-btn"
                  >
                    Login
                  </Button>

                  <div className="text-center mt-3">
                    <p className="small">
                      New to Daraz?{" "}
                      <span className="text-danger cursor-pointer" onClick={switchToSignup}>
                        Sign Up
                      </span>
                    </p>
                  </div>
                </Form>

                <div className="text-center mt-4">
                  <p className="divider-text small">or Login with</p>
                  <div className="d-flex justify-content-center gap-3">
                    <Button variant="outline-secondary" className="social-btn d-flex align-items-center justify-content-center">
                      <FaFacebook fontSize={24} color="#1877f2"/>
                      <span className="mx-2 mt-1">Facebook</span>
                    </Button>
                    <Button variant="outline-secondary" className="social-btn w-30 text-center d-flex align-items-center justify-content-center">
                      <Image 
                        src={Google} 
                        alt="Google" 
                        width={20} 
                        height={20}
                        className="me-2" 
                      />
                      <span className="mx-0 mt-1">Google</span>
                    </Button>
                  </div>
                </div>
              </Tab.Pane>

              {/* Signup Tab */}
              <Tab.Pane eventKey="signup">
                <Form onSubmit={handleSignupSubmit}>
                  {/* Email Section */}
                  {loginMethod === "email" && (
                    <>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="email"
                          placeholder="Email Address"
                          className="form-control daraz-input"
                          value={signupEmail}
                          onChange={(e) => setSignupEmail(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <InputGroup>
                          <Form.Control
                            type="text"
                            placeholder="Verification Code"
                            className="form-control daraz-input"
                          />
                          <Button 
                            className="border-none w-35"
                            style={{ 
                              backgroundColor: '#c5ccd4',
                              color: '#212529',
                              border: 'none',
                            }}
                            onClick={handleGetCode}
                            disabled={isCounting}
                          >
                            {isCounting ? `Resend in ${countdown}s` : 'Get Code'}
                          </Button>
                        </InputGroup>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <InputGroup>
                          <Form.Control
                            type={showSignupPassword ? "text" : "password"}
                            placeholder="Password"
                            className="form-control daraz-input"
                            value={signupPassword}
                            onChange={(e) => setSignupPassword(e.target.value)}
                          />
                          <InputGroup.Text 
                            className="password-toggle"
                            onClick={toggleSignupPasswordVisibility}
                            style={{ cursor: "pointer" }}
                          >
                            {showSignupPassword ? <FaEyeSlash /> : <FaEye />}
                          </InputGroup.Text>
                        </InputGroup>
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <InputGroup>
                          <Form.Control
                            type={showSignupConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            className="form-control daraz-input"
                            value={signupConfirmPassword}
                            onChange={(e) => setSignupConfirmPassword(e.target.value)}
                          />
                          <InputGroup.Text 
                            className="password-toggle"
                            onClick={toggleSignupConfirmPasswordVisibility}
                            style={{ cursor: "pointer" }}
                          >
                            {showSignupConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                          </InputGroup.Text>
                        </InputGroup>
                      </Form.Group>

                      <Button 
                        variant="danger" 
                        type="submit" 
                        className="w-100 mb-3 daraz-primary-btn"
                      >
                        Signup
                      </Button>
                    </>
                  )}

                  {/* Phone Section */}
                  {loginMethod === "phone" && (
                    <>
                      <Form.Group className="mb-3 d-flex align-items-center">
                        <div className="input-group">
                          <span className="input-group-text" style={{ padding: '0.375rem 0.75rem' }}>
                            <img 
                              src="https://flagcdn.com/w20/pk.png" 
                              alt="Pakistan" 
                              style={{ width: '24px', marginRight: '8px' }} 
                            />
                            <span className="mx-0 mt-1">+92</span>
                          </span>
                          <Form.Control
                            type="tel"
                            placeholder="Phone Number"
                            className="form-control daraz-input"
                            value={signupPhone}
                            onChange={(e) => setSignupPhone(e.target.value)}
                            style={{ paddingLeft: '15px', paddingTop: '15px' }}
                          />
                        </div>
                      </Form.Group>
                      
                      <Button className="w-100 mb-3 btn-success">
                        Send OTP Code Via WhatsApp
                      </Button>
                      
                      <Button className="w-100 mb-3 bg-white text-dark border-dark">
                        Send OTP Code Via Message
                      </Button>
                    </>
                  )}

                  <div className="text-center">
                    <p className="small">
                      Already have an account?{" "}
                      <span className="text-danger cursor-pointer" onClick={switchToLogin}>
                        Login
                      </span>
                    </p>
                  </div>
                </Form>

                <div className="text-center mt-4">
                  <p className="divider-text small">or Signup with</p>
                  <div className="d-flex justify-content-center gap-3">
                    <Button variant="outline-secondary" className="social-btn d-flex align-items-center justify-content-center">
                      <FaFacebook fontSize={24} color="#1877f2"/>
                      <span className="mx-2 mt-1">Facebook</span>
                    </Button>
                    <Button variant="outline-secondary" className="social-btn w-30 text-center d-flex align-items-center justify-content-center">
                      <Image 
                        src={Google} 
                        alt="Google" 
                        width={20} 
                        height={20}
                        className="me-2" 
                      />
                      <span className="mx-0 mt-1">Google</span>
                    </Button>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AuthPopup;