"use client";
import React, { useState, useRef } from 'react';
import { FiEdit, FiX, FiChevronDown, FiCheck, FiPlus, FiSearch, FiCalendar } from 'react-icons/fi';
import Switch from '@/app/components/Buttons/Tooglebtn';

const VehiclesPosting = () => {
  // State Management
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Vehicles');
  const [subCategory, setSubCategory] = useState('Select Sub Category');
  const [showSubCategoryDropdown, setShowSubCategoryDropdown] = useState(false);
  const [vehicleType, setVehicleType] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [engineType, setEngineType] = useState('');
  const [engineCapacity, setEngineCapacity] = useState('');
  const [kmsDriven, setKmsDriven] = useState('');
  const [transmission, setTransmission] = useState('');
  const [assembly, setAssembly] = useState('');
  const [condition, setCondition] = useState('');
  const [registrationCity, setRegistrationCity] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [fuelType, setfuelType] = useState('');
  const [postDetails, setPostDetails] = useState({
    title: '',
    description: '',
    contactName: '',
  });
  const [images, setImages] = useState([]);
  const [videoFile, setVideoFile] = useState(null);
  const [name, setName] = useState('');
  
  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);

  // Data Constants
  const categories = [
    { id: 1, name: 'Vehicles', icon: '🚗' },
    { id: 2, name: 'Property', icon: '🏠' },
    { id: 3, name: 'Electronics', icon: '📱' },
    { id: 4, name: 'Furniture', icon: '🛋️' },
    { id: 5, name: 'Jobs', icon: '💼' },
    { id: 6, name: 'Kids', icon: '👶' },
    { id: 7, name: 'Services', icon: '🔧' },
    { id: 8, name: 'Business/Industrial/Agriculture', icon: '🏭' },
  ];

  const subCategories = [
    'Cars',
    'Trucks',
    'Buses',
    'Vans',
    'SUVs',
    'Heavy Vehicles',
    'Other Vehicles'
  ];

  const vehicleTypeOptions = {
    'Cars': ['Electrical','Fuel Type', 'Hybrid', 'Other'],
    'Trucks': ['Pickup', 'Mini Truck', 'Dump Truck', 'Tanker', 'Other'],
    'Buses': ['Mini Bus', 'Coach', 'School Bus', 'Other'],
    'Vans': ['Mini Van', 'Passenger Van', 'Cargo Van', 'Other'],
    'SUVs': ['Compact SUV', 'Mid-size SUV', 'Full-size SUV', 'Crossover', 'Other'],
    'Heavy Vehicles': ['Tractor', 'Trailer', 'Forklift', 'Crane', 'Other']
  };

  const makes = [
    'Toyota', 'Honda', 'Suzuki', 'Nissan', 'Mitsubishi', 'Kia', 'Hyundai', 
    'Mercedes', 'BMW', 'Audi', 'Volkswagen', 'Ford', 'Chevrolet', 'Other'
  ];

  const models = {
    'Toyota': ['Corolla', 'Camry', 'Prius', 'Hilux', 'Land Cruiser', 'Other'],
    'Honda': ['Civic', 'Accord', 'City', 'CR-V', 'Other'],
    'Suzuki': ['Mehran', 'Cultus', 'Swift', 'Alto', 'Wagon R', 'Other'],
    'Nissan': ['Sunny', 'March', 'Sentra', 'Other'],
    'Mitsubishi': ['Lancer', 'Pajero', 'Other'],
    'Kia': ['Sportage', 'Picanto', 'Cerato', 'Other'],
    'Hyundai': ['Elantra', 'Sonata', 'Tucson', 'Other']
  };

  const fuelTypeOptions = [];
  const assemblyOptions = ['Local', 'Imported'];

  const registrationCities = [
    'Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Peshawar',
    'Quetta', 'Multan', 'Faisalabad', 'Hyderabad', 'Other'
  ];

  const years = Array.from({length: 30}, (_, i) => new Date().getFullYear() - i);

  // Event Handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissionData = {
      ...postDetails,
      category: selectedCategory,
      subCategory,
      vehicleType,
      make,
      model,
      year,
      fuelType ,
      engineType,
      engineCapacity,
      kmsDriven,
      transmission,
      assembly,
      condition,
      registrationCity,
      location,
      price
    };
    console.log('Vehicle post created:', submissionData);
  };

  // Render Functions
  const renderCategoryModal = () => (
    <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Select Category</h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={() => setShowCategoryModal(false)}
            />
          </div>
          <div className="modal-body">
            <div className="row g-3">
              {categories.map(category => (
                <div key={category.id} className="col-6">
                  <div 
                    className={`p-3 border rounded text-center cursor-pointer ${
                      selectedCategory === category.name ? 'border-warning bg-light' : ''
                    }`}
                    onClick={() => {
                      setSelectedCategory(category.name);
                      setShowCategoryModal(false);
                    }}
                  >
                    <div className="fs-3 mb-2">{category.icon}</div>
                    <div className="fw-medium">{category.name}</div>
                    {selectedCategory === category.name && (
                      <FiCheck className="text-warning mt-1" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSubCategoryDropdown = () => (
    <div className="position-absolute top-100 start-0 end-0 bg-white border rounded shadow-sm z-1 mt-1">
      <div className="max-h-200 overflow-auto">
        {subCategories.map((category, index) => (
          <div
            key={index}
            className={`p-2 cursor-pointer ${subCategory === category ? 'bg-light' : ''}`}
            onClick={() => {
              setSubCategory(category);
              setShowSubCategoryDropdown(false);
              setVehicleType(''); // Reset vehicle type when sub-category changes
              setMake(''); // Reset make when sub-category changes
              setModel(''); // Reset model when sub-category changes
            }}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container mt-4 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-12 col-lg-8 mx-3">
          <div className="border rounded bg-white">
            {/* Header Row */}
            <div className="row align-items-center mb-3 p-3">
              <div className="col-2">
                <label className="fs-6 bold"><b>Category</b></label>
              </div>
              
              <div className="col-8 text-center">
                <div className="d-flex align-items-center justify-content-center gap-2 cursor-pointer">
                  <div className="rounded-circle bg-light d-flex align-items-center justify-content-center" 
                    style={{ width: '30px', height: '30px' }}>
                    {categories.find(c => c.name === selectedCategory)?.icon || '🚗'}
                  </div>
                  <span className="fw-medium">{selectedCategory}</span>
                </div>
              </div>
              
              <div className="col-2">
                <button 
                  type="button" 
                  className="btn btn-link text-decoration-none p-0"
                  onClick={() => setShowCategoryModal(true)}
                >
                  <span>Change</span>
                </button>
              </div>
            </div>
            <hr />

            <div className="row align-items-around mb-3 p-3">
              <form onSubmit={handleSubmit}>
                {/* Sub Category Dropdown */}
                <div className="mb-3 d-flex align-items-center">
                  <div className="row w-100">
                    <div className="col-4">
                      <label className="form-label"><b>Select Sub Category</b></label>
                    </div>
                    <div className="col-8 position-relative p-0">
                      <div 
                        className="form-control d-flex align-items-center cursor-pointer"
                        onClick={() => setShowSubCategoryDropdown(!showSubCategoryDropdown)}
                      >
                        <span>{subCategory}</span>
                        <FiChevronDown className="ms-auto" />
                      </div>
                      {showSubCategoryDropdown && renderSubCategoryDropdown()}
                    </div>
                  </div>
                </div>

                {/* Vehicle Type Dropdown */}
                {subCategory !== 'Select Sub Category' && (
                  <div className="mb-3 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-4">
                        <label className="form-label"><b>What Kind Of {subCategory}</b></label>
                      </div>
                      <div className="col-8 p-0">
                        <select
                          className="form-select"
                          value={vehicleType}
                          onChange={(e) => {
                            setVehicleType(e.target.value);
                            setMake(''); // Reset make when vehicle type changes
                            setModel(''); // Reset model when vehicle type changes
                          }}
                          required
                        >
                          <option value="" disabled>Select Vehicle Type</option>
                          {vehicleTypeOptions[subCategory]?.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Make Dropdown */}
                {vehicleType && (
                  <div className="mb-3 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-4">
                        <label className="form-label"><b>Make</b></label>
                      </div>
                      <div className="col-8 p-0">
                        <select
                          className="form-select"
                          value={make}
                          onChange={(e) => {
                            setMake(e.target.value);
                            setModel(''); // Reset model when make changes
                          }}
                          required
                        >
                          <option value="" disabled>Select Make</option>
                          {makes.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Model Dropdown */}
                {make && (
                  <div className="mb-3 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-4">
                        <label className="form-label"><b>Model</b></label>
                      </div>
                      <div className="col-8 p-0">
                        <select
                          className="form-select"
                          value={model}
                          onChange={(e) => setModel(e.target.value)}
                          required
                        >
                          <option value="" disabled>Select Model</option>
                          {models[make]?.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}
{/* Condition */}
<div className="mb-3 d-flex align-items-center">
                  <div className="row w-100">
                    <div className="col-4">
                      <label className="form-label"><b>Condition</b></label>
                    </div>
                    <div className="col-8 p-0">
                      <div className="btn-group w-100 gap-2" role="group">
                        <input
                          type="radio"
                          className="btn-check"
                          name="condition"
                          id="conditionNew"
                          value="New"
                          checked={condition === 'New'}
                          onChange={() => setCondition('New')}
                          required
                        />
                        <label className="btn btn-outline-secondary" htmlFor="conditionNew">New</label>

                        <input
                          type="radio"
                          className="btn-check"
                          name="condition"
                          id="conditionUsed"
                          value="Used"
                          checked={condition === 'Used'}
                          onChange={() => setCondition('Used')}
                        />
                        <label className="btn btn-outline-secondary" htmlFor="conditionUsed">Used</label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Year Dropdown with Custom Input */}
                {model && (
                  <div className="mb-3 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-4">
                        <label className="form-label"><b>Year</b></label>
                      </div>
                      <div className="col-8 p-0">
                        <div className="input-group">
                          <input
                            type="number"
                            className="form-control"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            placeholder="Enter year (e.g., 2023)"
                            min="1900"
                            max="2100"
                            required
                          />
                          <span className="input-group-text">
                            <FiCalendar />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Engine Type */}
                {/* {vehicleType && vehicleType !== 'Electric' && (
                  <div className="mb-3 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-4">
                        <label className="form-label"><b>Engine Type</b></label>
                      </div>
                      <div className="col-8 p-0">
                        <div className="btn-group gap-2 w-100" role="group">
                          <input
                            type="radio"
                            className="btn-check"
                            name="engineType"
                            id="engineTypePetrol"
                            value="Petrol"
                            checked={engineType === 'Petrol'}
                            onChange={() => setEngineType('Petrol')}
                            required
                          />
                          <label className="btn btn-outline-secondary" htmlFor="engineTypePetrol">Petrol</label>

                          <input
                            type="radio"
                            className="btn-check"
                            name="engineType"
                            id="engineTypeDiesel"
                            value="Diesel"
                            checked={engineType === 'Diesel'}
                            onChange={() => setEngineType('Diesel')}
                          />
                          <label className="btn btn-outline-secondary" htmlFor="engineTypeDiesel">Diesel</label>

                          <input
                            type="radio"
                            className="btn-check"
                            name="engineType"
                            id="engineTypeCNG"
                            value="CNG"
                            checked={engineType === 'CNG'}
                            onChange={() => setEngineType('CNG')}
                          />
                          <label className="btn btn-outline-secondary" htmlFor="engineTypeCNG">CNG</label>
                        </div>
                      </div>
                    </div>
                  </div>
                )} */}

{subCategory === 'Cars' && (
                  <div className="mb-3 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-4">
                        <label className="form-label"><b>Transmission</b></label>
                      </div>
                      <div className="col-8 p-0">
                        <div className="btn-group gap-2 w-100" role="group">
                          <input
                            type="radio"
                            className="btn-check"
                            name="engineType"
                            id="engineTypePetrol"
                            value="Petrol"
                            checked={engineType === 'Petrol'}
                            onChange={() => setEngineType('Petrol')}
                            required
                          />
                          <label className="btn btn-outline-secondary" htmlFor="engineTypePetrol">Automatic</label>

                          <input
                            type="radio"
                            className="btn-check"
                            name="engineType"
                            id="engineTypeDiesel"
                            value="Diesel"
                            checked={engineType === 'Diesel'}
                            onChange={() => setEngineType('Diesel')}
                          />
                          <label className="btn btn-outline-secondary" htmlFor="engineTypeDiesel">Manual</label>

                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Engine Capacity */}
                {/* {vehicleType && vehicleType !== 'Electric' && (
                  <div className="mb-3 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-4">
                        <label className="form-label"><b>Engine Capacity (cc)</b></label>
                      </div>
                      <div className="col-8 p-0">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Enter engine capacity"
                          value={engineCapacity}
                          min={0}
                          onChange={(e) => setEngineCapacity(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                )} */}

                {/* Kms Driven */}
                {subCategory !== 'Select Sub Category' && (
                  <div className="mb-3 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-4">
                        <label className="form-label"><b>Kms Driven</b></label>
                      </div>
                      <div className="col-8 p-0">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Enter kilometers driven"
                          value={kmsDriven}
                          min={0}
                          onChange={(e) => setKmsDriven(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Transmission */}
                <div className="mb-3 d-flex align-items-center">
                  <div className="row w-100">
                    <div className="col-4">
                      <label className="form-label"><b>Fuel</b></label>
                    </div>
                    <div className="col-8 p-0">
                      <select
                        className="form-select"
                        value={fuelType}
                        onChange={(e) => setfuelType(e.target.value)}
                        required
                      >
                        <option value="" disabled>Select Fuel Type</option>
                        {fuelTypeOptions.map((option, index) => (
                          <option key={index} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Assembly */}
                <div className="mb-3 d-flex align-items-center">
                  <div className="row w-100">
                    <div className="col-4">
                      <label className="form-label"><b>Assembly</b></label>
                    </div>
                    <div className="col-8 p-0">
                      <div className="btn-group w-100 gap-2" role="group">
                        {assemblyOptions.map((option) => (
                          <React.Fragment key={option}>
                            <input
                              type="radio"
                              className="btn-check"
                              name="assembly"
                              id={`assembly${option}`}
                              value={option}
                              checked={assembly === option}
                              onChange={() => setAssembly(option)}
                              required
                            />
                            <label className="btn btn-outline-secondary" htmlFor={`assembly${option}`}>
                              {option}
                            </label>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                
                {/* Registration City */}
                <div className="mb-3 d-flex align-items-center">
                  <div className="row w-100">
                    <div className="col-4">
                      <label className="form-label"><b>Registration City</b></label>
                    </div>
                    <div className="col-8 p-0">
                      <select
                        className="form-select"
                        value={registrationCity}
                        onChange={(e) => setRegistrationCity(e.target.value)}
                        required
                      >
                        <option value="" disabled>Select Registration City</option>
                        {registrationCities.map((city, index) => (
                          <option key={index} value={city}>{city}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <hr />

                {/* Product/Service Title */}
                <div className="mb-3 d-flex align-items-center">
                  <div className="row w-100">
                    <div className="col-4">
                      <label className="form-label fw-bold"><b>Product/Service Title</b></label>
                    </div>
                    <div className="col-8 p-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter product or service title"
                        name="title"
                        value={postDetails.title}
                        onChange={handleInputChange}
                        required
                      />
                      <small className="text-muted d-block text-end">Be specific (e.g. "Toyota Corolla 2020 Model")</small>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-3 d-flex align-items-center">
                  <div className="row w-100">
                    <div className="col-4">
                      <label className="form-label fw-bold"><b>Description</b></label>
                    </div>
                    <div className="col-8 p-0">
                      <textarea
                        className="form-control"
                        rows={5}
                        placeholder="Describe the product or service in detail"
                        name="description"
                        value={postDetails.description}
                        onChange={handleInputChange}
                        required
                      />
                      <small className="text-muted d-block text-end">Include key features, usage history, and benefits</small>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="mb-3 d-flex align-items-center">
                  <div className="row w-100">
                    <div className="col-4">
                      <label className="form-label fw-bold">Location</label>
                    </div>
                    <div className="col-8 p-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                      />
                      <small className="text-muted d-block text-end">Where is this item located?</small>
                    </div>
                  </div>
                </div>
                <hr />

                {/* Price */}
                <div className="mb-3 d-flex align-items-center">
                  <div className="row w-100">
                    <div className="col-4">
                      <label className="form-label"><b>Price</b></label>
                    </div>
                    <div className="col-8 p-0">
                      <div className="input-group">
                        <span className="input-group-text">Rs</span>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Enter price"
                          value={price}
                          min={0}
                          onChange={(e) => setPrice(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr />

                {/* Contact Name */}
                <div className="mb-3 d-flex align-items-center">
                  <div className="row w-100">
                    <div className="col-4">
                      <label className="form-label"><b>Contact Person</b></label>
                    </div>
                    <div className="col-8 p-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter contact person's name"
                        name="contactName"
                        value={postDetails.contactName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Phone Number Field */}
                <div className="mb-3 d-flex align-items-center">
                  <div className="row w-100">
                    <div className="col-4">
                      <label className="form-label">Your Phone Number</label>
                    </div>
                    <div className="col-8 p-0 text-end">
                      848764568998
                    </div>
                  </div>
                </div>

                {/* Show Phone Number Toggle */}
                <div className="mb-3 d-flex align-items-center">
                  <div className="row w-100">
                    <div className="col-5">
                      <label className="form-label"><b>Show My Phone Number</b></label>
                    </div>
                    <div className="col-7 p-0 text-end d-flex align-items-end justify-content-end">
                      <Switch />
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-warning w-100 fw-bold">
                  Post Now
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-3 border">
          {/* Sidebar content */}
          <div className="p-3">
            <h5 className="fw-bold mb-3">Posting Tips</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><FiCheck className="text-warning me-2" /> Provide clear and detailed specifications</li>
              <li className="mb-2"><FiCheck className="text-warning me-2" /> Include high-quality photos</li>
              <li className="mb-2"><FiCheck className="text-warning me-2" /> Mention the condition of the item</li>
              <li className="mb-2"><FiCheck className="text-warning me-2" /> Be transparent about pricing</li>
              <li className="mb-2"><FiCheck className="text-warning me-2" /> Specify delivery/transport options</li>
              <li><FiCheck className="text-warning me-2" /> Provide accurate contact information</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Category Selection Modal */}
      {showCategoryModal && renderCategoryModal()}
    </div>
  );
};

export default VehiclesPosting;