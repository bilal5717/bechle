import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { LuFacebook, LuInstagram, LuLinkedin, LuYoutube } from "react-icons/lu";


 export default Footer = () => {
	console.log({ LuFacebook, LuInstagram, LuLinkedin, LuYoutube });

  return (
    <footer className="bg-light py-4 border-top w-100" style={{ margin: "0", padding: "80px" }}>
      <Container fluid className="px-5">
        <Row>
          {/* Most Trending Search */}
          <Col md={3} className="text-start px-5">
  <h5 className="fw-bold mt-4 mb-1">Most Trending Search</h5>
  <ul className="list-unstyled">
    <li className="hover-effect">Mobile</li>
    <li className="hover-effect">Bike</li>
    <li className="hover-effect">Laptop</li>
    <li className="hover-effect">Pet</li>
  </ul>
</Col>
{/* About Us */}
<Col md={3} className="text-start px-5">
  <h5 className="fw-bold mt-4 mb-1">About Us</h5>
  <ul className="list-unstyled">
    <li className="hover-effect"><Nav.Link href="#">Company Name</Nav.Link></li>
    <li className="hover-effect"><Nav.Link href="#">Blog</Nav.Link></li>
    <li className="hover-effect"><Nav.Link href="#">Contact Us</Nav.Link></li>
  </ul>
</Col>

{/* Beecho */}
<Col md={3} className="text-start px-5">
  <h5 className="fw-bold mt-4 mb-1">Beecho</h5>
  <ul className="list-unstyled">
    <li className="hover-effect"><Nav.Link href="#">Help</Nav.Link></li>
    <li className="hover-effect"><Nav.Link href="#">Terms of Use</Nav.Link></li>
    <li className="hover-effect"><Nav.Link href="#">Privacy Policy</Nav.Link></li>
    <li className="hover-effect"><Nav.Link href="#">FAQ</Nav.Link></li>
    <li className="hover-effect"><Nav.Link href="#">Verified Seller</Nav.Link></li>
    <li className="hover-effect"><Nav.Link href="#">Short Customer Feedback</Nav.Link></li>
  </ul>
</Col>

<style>
  {`
    .hover-effect {
      transition: color 0.3s ease-in-out;
    }
    .hover-effect:hover {
      color: #007bff; /* Hover پر text نیلا ہو جائے گا */
      cursor: pointer;
    }
  `}
</style>

          {/* App Download and QR Codes */}
          <Col md={3} className="text-start">
            <div className="d-flex justify-content-center gap-3 mb-1">
              <a href="https://apple.com">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Available_on_the_App_Store_%28black%29_SVG.svg" 
                  alt="App Store" 
                  className="mb-2" 
                  style={{ width: "140px", height: "80px", objectFit: "contain" }}
                />
              </a>
              <a href="https://play.google.com">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Google Play" 
                  className="mb-2"
                  style={{ width: "140px", height: "80px", objectFit: "contain" }}
                />
              </a>
              <a href="https://appgallery.huawei.com">
                <img 
                  src="https://hellopaisa.co.za/hellopaisa-2021/wp-content/uploads/2021/06/huawei-Badge-Black.png" 
                  alt="AppGallery" 
                  className="mb-2"
                  style={{ width: "140px", height: "80px", objectFit: "contain" }}
                />
              </a>
            </div>

            <div className="d-flex justify-content-center gap-4">
              <div className="border p-2 text-center">
                <img 
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv860qo6Wh-pV2Tie51Mv8yVPx3-I0SinkXg&s'  
                  alt="App Store QR Code"
                  style={{ width: "120px", height: "120px" }}
                />
              </div>
              <div className="border p-2 text-center">
                <img 
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnnQ_Esx4j_2iazyY4nZr-bFoRxCTN-anPfQ&s'  
                  alt="Google Play QR Code"
                  style={{ width: "120px", height: "120px" }}
                />
              </div>
              <div className="border p-2 text-center">
                <img 
                  src=''
                  alt="AppGallery QR Code"
                  style={{ width: "120px", height: "120px" }}
                />
              </div>
            </div>
          </Col>
        </Row>

        <hr />

        {/* Footer Bottom: Company Name Left, Social Icons Right */}
        <Row className="align-items-center">
          <Col md={6} className="text-md-start">
            <p className="mb-0">&copy; 2002 - 2090 Company Name</p>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="d-flex justify-content-md-end gap-3">
              <a href="#" className="text-dark"><LuYoutube size={24} /></a>
              <a href="#" className="text-dark"><LuFacebook size={24} /></a>
              <a href="#" className="text-dark"><LuInstagram size={24} /></a>
              <a href="#" className="text-dark"><LuLinkedin size={24} /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

