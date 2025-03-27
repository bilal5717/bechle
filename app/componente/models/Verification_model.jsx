<Modal show={showOtpModal} onHide={handleCloseOtpModal} centered className="otp-modal">
  <Modal.Body className="welcomescreen">
    <h2>Enter Your OTP Code</h2>
    <p><i className="fas fa-check"></i></p>
    <Form.Group className="mb-3">
      <Form.Control
        type="text"
        placeholder="Enter OTP Code"
        className="form-control daraz-input"
        value={otpCode}
        onChange={(e) => setOtpCode(e.target.value)}
      />
    </Form.Group>
    <Button className="backbtn" onClick={handleVerifyOtp}>Verify</Button>
  </Modal.Body>
</Modal>
