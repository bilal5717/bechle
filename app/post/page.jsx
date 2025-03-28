"use client";
import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faImage, faCheck, faKey, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { LuLocate  } from "react-icons/lu";
import Switch from '../components/Buttons/Tooglebtn';
// Categories data moved outside component to prevent recreation on each render
const categories = {
  'Electronics': ['Smartphones', 'Laptops', 'Cameras', 'Accessories'],
  'Fashion': ['Men', 'Women', 'Kids', 'Accessories'],
  'Home': ['Furniture', 'Appliances', 'Decor', 'Gardening']
};

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [addressQuery, setAddressQuery] = useState('');
  const [addressSuggestions, setAddressSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    uname: '',
    pwd: '',
    cpwd: '',
    fname: '',
    lname: '',
    phno: '',
    phno_2: '',
    pic: null,
    signature: null,
    category: ''
  });

  const [showSubmenu, setShowSubmenu] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState('');

  const steps = [
    { id: 1, title: 'Account', icon: faKey },
    { id: 2, title: 'Personal', icon: faUser },
    { id: 3, title: 'Image', icon: faImage },
    { id: 4, title: 'Finish', icon: faCheck }
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, steps.length));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    nextStep();
  };
  const getAddressSuggestions = (query) => {
    // In a real app, you would call a geocoding API here
    const mockSuggestions = [
      '123 Main St, New York, NY',
      '456 Broadway, New York, NY',
      '789 Park Ave, New York, NY',
      `${query} Street, New York, NY`,
      `${query} Avenue, New York, NY`
    ];
    return mockSuggestions;
  };

  const handleAddressChange = (e) => {
    const value = e.target.value;
    setAddressQuery(value);
    setFormData(prev => ({ ...prev, address: value }));
    
    if (value.length > 2) {
      setAddressSuggestions(getAddressSuggestions(value));
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSelectAddress = (address) => {
    setFormData(prev => ({ ...prev, address }));
    setAddressQuery(address);
    setShowSuggestions(false);
  };

  const handleGetCurrentLocation = () => {
    // In a real app, you would use the Geolocation API
    navigator.geolocation?.getCurrentPosition(
      (position) => {
        const address = `Current Location (${position.coords.latitude}, ${position.coords.longitude})`;
        setFormData(prev => ({ ...prev, address }));
        setAddressQuery(address);
        setShowSuggestions(false);
      },
      (error) => {
        console.error("Error getting location:", error);
        alert("Could not get your current location");
      }
    );
  };

  // Memoized form sections to prevent unnecessary re-renders
  const renderStep1 = () => (
    <Fieldset>
      <FormCard>
        <Row>
          <Col className='float-right'>
            <StepsText>Step 1 - 4</StepsText>
          </Col>
        </Row>
        
        {/* Category row */}
        <FormGroup>
          <div className="col-sm-2">
            <Label>Category *</Label>
          </div>
          <div className="col-sm-10">
            <DropdownContainer>
              <MainSelect
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                onMouseEnter={() => setShowSubmenu(true)}
                onMouseLeave={() => setShowSubmenu(false)}
              >
                <option value="">Select Category</option>
                {Object.keys(categories).map((category) => (
                  <option 
                    key={category}
                    value={category}
                    onMouseEnter={() => setHoveredCategory(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </MainSelect>
              
              {showSubmenu && hoveredCategory && (
                <Submenu 
                  onMouseEnter={() => setShowSubmenu(true)}
                  onMouseLeave={() => setShowSubmenu(false)}
                >
                  {categories[hoveredCategory].map((subItem) => (
                    <SubmenuItem 
                      key={subItem}
                      onClick={() => {
                        handleChange({
                          target: {
                            name: 'category',
                            value: `${hoveredCategory}-${subItem.toLowerCase().replace(' ', '-')}`
                          }
                        });
                        setShowSubmenu(false);
                      }}
                    >
                      {subItem}
                    </SubmenuItem>
                  ))}
                </Submenu>
              )}
            </DropdownContainer>
          </div>
        </FormGroup>
        
        {/* Title - Full width */}
        <FormGroup>
          <div className="col-sm-2">
            <Label>Title *</Label>
          </div>
          <div className="col-sm-10">
            <Input
              type="text" 
              name="title" 
              value={formData.title || ''}
              onChange={handleChange}
              required 
              placeholder="Enter a descriptive title"
            />
          </div>
        </FormGroup>
        
        {/* Condition - Full width */}
        <FormGroup>
          <div className="col-sm-2">
            <Label>Condition *</Label>
          </div>
          <div className="col-sm-10">
            <select
              name="condition"
              value={formData.condition || ''}
              onChange={handleChange}
              className="form-select"
              required
              style={{
                padding: '8px 15px',
                border: '1px solid #ccc',
                borderRadius: '0',
                width: '100%',
                boxSizing: 'border-box',
                color: '#2C3E50',
                backgroundColor: '#ECEFF1',
                fontSize: '16px',
                letterSpacing: '1px'
              }}
            >
              <option value="">Select Condition</option>
              <option value="new">New</option>
              <option value="used">Used</option>
              <option value="refurbished">Refurbished</option>
            </select>
          </div>
        </FormGroup>
        
        {/* Price - Full width */}
        <FormGroup>
          <div className="col-sm-2">
            <Label>Price *</Label>
          </div>
          <div className="col-sm-10">
            <Input
              type="number"
              name="price"
              value={formData.price || ''}
              onChange={handleChange}
              required
              placeholder="Enter price in USD"
              min="0"
              step="0.01"
            />
          </div>
        </FormGroup>
        
        {/* Phone Number */}
        <FormGroup>
          <div className="col-sm-2">
            <Label>Phone Number *</Label>
          </div>
          <div className="col-sm-3">
            {/* <Input
              type="tel"
              name="phone"
              value={formData.phone || ''}
              onChange={handleChange}
              required
              placeholder="Enter contact phone number"
            /> */}
            <button className='btn border '>Add Your Phone No</button>
          </div>
          
        </FormGroup>
        
        <FormGroup className='my-4'>
          <div className="col-sm-5">
            <Label> Show my phone number in my ads *</Label>
          </div>
          <Switch />
        </FormGroup>
        {/* Address */}
        <FormGroup>
          <div className="col-sm-2">
            <Label>Address *</Label>
          </div>
          <div className="col-sm-10" style={{ position: 'relative' }}>
            <Input
              type="text"
              name="address"
              value={addressQuery}
              onChange={handleAddressChange}
              onClick={() => setShowSuggestions(true)}
              required
              placeholder="Search for your address"
            />
            {showSuggestions && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                zIndex: 1000,
                backgroundColor: 'white',
                border: '1px solid #ddd',
                borderRadius: '0 0 4px 4px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }}>
                <div 
                  style={{
                    padding: '10px 15px',
                    cursor: 'pointer',
                    backgroundColor: '#f8f9fa',
                    borderBottom: '1px solid #eee'
                  }}
                  onClick={handleGetCurrentLocation}
                >
                  <LuLocate   style={{ marginRight: '8px' }} />
                  Use Current Location
                </div>
                {addressSuggestions.map((suggestion, index) => (
                  <div 
                    key={index}
                    style={{
                      padding: '10px 15px',
                      cursor: 'pointer',
                      borderBottom: '1px solid #eee',
                      ':hover': {
                        backgroundColor: '#f0f0f0'
                      }
                    }}
                    onClick={() => handleSelectAddress(suggestion)}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </div>
        </FormGroup>
        
        {/* Description - Full width */}
        <FormGroup>
          <div className="col-sm-2">
            <Label>Description *</Label>
          </div>
          <div className="col-sm-10">
            <textarea
              name="description"
              value={formData.description || ''}
              onChange={handleChange}
              className="form-control"
              required
              placeholder="Enter detailed description"
              rows="4"
              style={{
                padding: '8px 15px',
                border: '1px solid #ccc',
                borderRadius: '0',
                width: '100%',
                boxSizing: 'border-box',
                color: '#2C3E50',
                backgroundColor: '#ECEFF1',
                fontSize: '16px',
                letterSpacing: '1px'
              }}
            />
          </div>
        </FormGroup>
      </FormCard>
      
      <ActionButton type="button" onClick={nextStep}>
        Next
      </ActionButton>
    </Fieldset>
  );
  const renderStep2 = () => (
    <Fieldset>
      <FormCard>
        <Row>
          <Col xs={7}>
            <FormTitle>Personal Information:</FormTitle>
          </Col>
          <Col xs={5}>
            <StepsText>Step 2 - 4</StepsText>
          </Col>
        </Row>
        
        <FormGroup>
          <Label>First Name: *</Label>
          <Input
            type="text"
            name="fname"
            placeholder="First Name"
            value={formData.fname}
            onChange={handleChange}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <Label>Last Name: *</Label>
          <Input
            type="text"
            name="lname"
            placeholder="Last Name"
            value={formData.lname}
            onChange={handleChange}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <Label>Contact No.: *</Label>
          <Input
            type="text"
            name="phno"
            placeholder="Contact No."
            value={formData.phno}
            onChange={handleChange}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <Label>Alternate Contact No.: *</Label>
          <Input
            type="text"
            name="phno_2"
            placeholder="Alternate Contact No."
            value={formData.phno_2}
            onChange={handleChange}
            required
          />
        </FormGroup>
      </FormCard>
      
      <div>
        <PreviousButton type="button" onClick={prevStep}>
          Previous
        </PreviousButton>
        <ActionButton type="button" onClick={nextStep}>
          Next
        </ActionButton>
      </div>
    </Fieldset>
  );

  const renderStep3 = () => (
    <Fieldset>
      <FormCard>
        <Row>
          <Col xs={7}>
            <FormTitle>Image Upload:</FormTitle>
          </Col>
          <Col xs={5}>
            <StepsText>Step 3 - 4</StepsText>
          </Col>
        </Row>
        
        <FormGroup>
          <Label>Upload Your Photo:</Label>
          <Input
            type="file"
            name="pic"
            accept="image/*"
            onChange={handleChange}
          />
        </FormGroup>
        
        <FormGroup>
          <Label>Upload Signature Photo:</Label>
          <Input
            type="file"
            name="signature"
            accept="image/*"
            onChange={handleChange}
          />
        </FormGroup>
      </FormCard>
      
      <div>
        <PreviousButton type="button" onClick={prevStep}>
          Previous
        </PreviousButton>
        <ActionButton type="submit">
          Submit
        </ActionButton>
      </div>
    </Fieldset>
  );

  const renderStep4 = () => (
    <Fieldset>
      <FormCard>
        <Row>
          <Col xs={7}>
            <FormTitle>Finish:</FormTitle>
          </Col>
          <Col xs={5}>
            <StepsText>Step 4 - 4</StepsText>
          </Col>
        </Row>
        
        <SuccessMessage>
          <h2 className="text-primary"><strong>SUCCESS !</strong></h2>
          <br />
          
          <Row className="justify-content-center">
            <Col xs={3}>
              <SuccessImage 
                src="https://i.imgur.com/GwStPmg.png" 
                alt="Success" 
              />
            </Col>
          </Row>
          
          <br /><br />
          
          <Row className="justify-content-center">
            <Col xs={7} className="text-center">
              <h5 className="text-primary">You Have Successfully Signed Up</h5>
            </Col>
          </Row>
        </SuccessMessage>
      </FormCard>
    </Fieldset>
  );

  return (
    <div className='container-fluid p-0 border'>
      <div className="d-flex justify-content-between mb-4 bg-dark p-3">
        <a href="#" className="text-white text-decoration-none d-flex align-items-center">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back
        </a>
      </div>
      
      <Row className="justify-content-center w-100">
        <Col xs={11} sm={10} md={10} lg={6} xl={8} className="text-center p-0 mt-3 mb-2">
          <Card className="px-0 pt-4 pb-0 mt-3 mb-3">
            <h2>Ad Information</h2>
            
            <FormContainer>
              <form onSubmit={handleSubmit}>
                {step === 1 && renderStep1()}
                {step === 2 && renderStep2()}
                {step === 3 && renderStep3()}
                {step === 4 && renderStep4()}
              </form>
            </FormContainer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

// Styled Components
const FormContainer = styled.div`
  text-align: center;
  position: relative;
  margin-top: 20px;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const MainSelect = styled.select`
  width: 100%;
  padding: 8px 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
`;

const Submenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  font-size: 14px;
  text-align: left;
  list-style: none;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,.15);
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0,0,0,.175);
`;

const SubmenuItem = styled.div`
  display: block;
  padding: 8px 20px;
  clear: both;
  font-weight: 400;
  line-height: 1.42857143;
  color: #333;
  white-space: nowrap;
  cursor: pointer;
  
  &:hover {
    color: #262626;
    text-decoration: none;
    background-color: #f5f5f5;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  
  .col-form-label {
    padding-top: calc(0.375rem + 1px);
    padding-bottom: calc(0.375rem + 1px);
    margin-bottom: 0;
    font-size: inherit;
    line-height: 1.5;
  }
  
  .col-sm-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  
  .col-sm-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;

const Fieldset = styled.fieldset`
  background: white;
  border: 0 none;
  border-radius: 0.5rem;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding-bottom: 20px;
  position: relative;
`;

const FormCard = styled.div`
  text-align: left;
  padding: 20px;
`;

const FormTitle = styled.h2`
  font-size: 25px;
  color: #673AB7;
  margin-bottom: 15px;
  font-weight: normal;
  text-align: left;
`;

const StepsText = styled.h2`
  font-size: 25px;
  color: gray;
  margin-bottom: 10px;
  font-weight: normal;
  text-align: right;
`;

const Label = styled.label`
  color: gray;
  text-align: left;
  display: block;
  margin-bottom: 2px;
`;

const Input = styled.input`
  padding: 8px 15px;
  border: 1px solid #ccc;
  border-radius: 0;
  width: 100%;
  box-sizing: border-box;
  color: #2C3E50;
  background-color: #ECEFF1;
  font-size: 16px;
  letter-spacing: 1px;
  
  &:focus {
    box-shadow: none !important;
    border: 1px solid #673AB7;
    outline-width: 0;
  }
`;

const ActionButton = styled.button`
  width: 100px;
  background: #673AB7;
  font-weight: bold;
  color: white;
  border: 0 none;
  border-radius: 0;
  cursor: pointer;
  padding: 10px 5px;
  margin: 10px 0 10px 5px;
  float: right;
  
  &:hover, &:focus {
    background-color: #311B92;
  }
`;

const PreviousButton = styled.button`
  width: 100px;
  background: #616161;
  font-weight: bold;
  color: white;
  border: 0 none;
  border-radius: 0;
  cursor: pointer;
  padding: 10px 5px;
  margin: 10px 5px 10px 0;
  float: right;
  
  &:hover, &:focus {
    background-color: #000000;
  }
`;

const SuccessMessage = styled.div`
  text-align: center;
  padding: 20px;
`;

const SuccessImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export default MultiStepForm;