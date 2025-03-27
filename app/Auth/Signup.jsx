import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Google from '@/public/images/socialicons/search.png';

const Signup = ({ switchToLogin, loginMethod, setLoginMethod, handleGetCode, isCounting, countdown }) => {
  const [signupPhone, setSignupPhone] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showSignupConfirmPassword, setShowSignupConfirmPassword] = useState(false);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data:", {
      method: loginMethod,
      phone: signupPhone,
      email: signupEmail,
      password: signupPassword,
      confirmPassword: signupConfirmPassword,
    });
  };

  return (
    <Form onSubmit={handleSignupSubmit}>
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
              <Form.Control type="text" placeholder="Verification Code" className="form-control daraz-input" />
              <Button
                className="border-none w-35"
                style={{ backgroundColor: "#c5ccd4", color: "#212529", border: "none" }}
                onClick={handleGetCode}
                disabled={isCounting}
              >
                {isCounting ? `Resend in ${countdown}s` : "Get Code"}
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
              <InputGroup.Text className="password-toggle" onClick={() => setShowSignupPassword(!showSignupPassword)} style={{ cursor: "pointer" }}>
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
              <InputGroup.Text className="password-toggle" onClick={() => setShowSignupConfirmPassword(!showSignupConfirmPassword)} style={{ cursor: "pointer" }}>
                {showSignupConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>

          <Button variant="danger" type="submit" className="w-100 mb-3 daraz-primary-btn">
            Signup
          </Button>
        </>
      )}

      {loginMethod === "phone" && (
        <>
          <Form.Group className="mb-3 d-flex align-items-center">
            <div className="input-group">
              <span className="input-group-text" style={{ padding: "0.375rem 0.75rem" }}>
                <img src="https://flagcdn.com/w20/pk.png" alt="Pakistan" style={{ width: "24px", marginRight: "8px" }} />
                <span className="mx-0 mt-1">+92</span>
              </span>
              <Form.Control
                type="tel"
                placeholder="Phone Number"
                className="form-control daraz-input"
                value={signupPhone}
                onChange={(e) => setSignupPhone(e.target.value)}
                style={{ paddingLeft: "15px", paddingTop: "15px" }}
              />
            </div>
          </Form.Group>

          <Button className="w-100 mb-3 btn-success">Send OTP Code Via WhatsApp</Button>
          <Button className="w-100 mb-3 bg-white text-dark border-dark">Send OTP Code Via Message</Button>
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

      <div className="text-center mt-4">
        <p className="divider-text small">or Signup with</p>
        <div className="d-flex justify-content-center gap-3">
          <Button variant="outline-secondary" className="social-btn d-flex align-items-center justify-content-center">
            <FaFacebook fontSize={24} color="#1877f2" />
            <span className="mx-2 mt-1">Facebook</span>
          </Button>
          <Button variant="outline-secondary" className="social-btn w-30 text-center d-flex align-items-center justify-content-center">
            <Image src={Google} alt="Google" width={20} height={20} className="me-2" />
            <span className="mx-0 mt-1">Google</span>
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default Signup;
