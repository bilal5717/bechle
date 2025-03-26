import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Google from '@/public/images/socialicons/search.png';

const Login = ({ loginMethod, switchToSignup }) => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Form onSubmit={handleLoginSubmit}>
      {loginMethod === "phone" ? (
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
      ) : (
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="Email Address"
            className="form-control daraz-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
      )}
      
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
    </Form>
  );
};

export default Login;