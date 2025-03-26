import React, { useState, useEffect } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Google from '@/public/images/socialicons/search.png';

const Signup = ({ loginMethod, switchToLogin }) => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
    <Form>
      {/* Email Section */}
      {loginMethod === "email" && (
        <>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email Address"
              className="form-control daraz-input"
            />
          </Form.Group>
          
          {/* Verification code */}
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

          {/* Password for email in signup */}
          <Form.Group className="mb-3">
            <InputGroup>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="form-control daraz-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputGroup.Text 
                className="password-toggle"
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <InputGroup>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="form-control daraz-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputGroup.Text 
                className="password-toggle"
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
    </Form>
  );
};

export default Signup;