import { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Google from '@/public/images/socialicons/search.png';

const Login = ({ switchToSignup }) => {
  const [loginMethod, setLoginMethod] = useState("phone");
  const [loginPhone, setLoginPhone] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", {
      method: loginMethod,
      phone: loginPhone,
      email: loginEmail,
      password: loginPassword,
    });
  };

  return (
    <Form onSubmit={handleLoginSubmit}>
      {loginMethod === "phone" ? (
        <Form.Group className="mb-3 d-flex align-items-center">
          <div className="input-group">
            <span className="input-group-text">
              <img src="https://flagcdn.com/w20/pk.png" alt="Pakistan" style={{ width: '24px' }} />
              <span className="mx-0 mt-1">+92</span>
            </span>
            <Form.Control
              type="tel"
              placeholder="Phone Number"
              value={loginPhone}
              onChange={(e) => setLoginPhone(e.target.value)}
            />
          </div>
        </Form.Group>
      ) : (
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="Email Address"
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
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <InputGroup.Text onClick={() => setShowLoginPassword(!showLoginPassword)}>
            {showLoginPassword ? <FaEyeSlash /> : <FaEye />}
          </InputGroup.Text>
        </InputGroup>
      </Form.Group>
      <Button variant="danger" type="submit" className="w-100 mb-3">Login</Button>
      <p className="small">New to Daraz? <span className="text-danger cursor-pointer" onClick={switchToSignup}>Sign Up</span></p>
    </Form>
  );
};

export default Login;