"use client";
import React, { useState, useMemo } from 'react';
import { FiEdit, FiX, FiChevronDown, FiCheck, FiPlus, FiSearch, FiCalendar } from 'react-icons/fi';
import Switch from '@/app/components/Buttons/Tooglebtn';
import CarFeaturesSelection from '@/app/components/models/FeatureCarModel';

// Constants
const CATEGORIES = [
  { id: 1, name: 'Mobiles', icon: '📱', component: 'MobilesPosting' },
  { id: 2, name: 'Vehicles', icon: '🚗', component: 'VehiclesPosting' },
  { id: 3, name: 'Property for Sale', icon: '🏠', component: 'PropertySalePosting' },
  { id: 4, name: 'Property for Rent', icon: '🏘️', component: 'PropertyForRent' },
  { id: 5, name: 'Electronics & Home Appliances', icon: '💻', component: 'ElectronicsPosting' },
  { id: 6, name: 'Bikes', icon: '🚲', component: 'BikesPosting' },
  { id: 7, name: 'Business, Industrial & Agriculture', icon: '🏭', component: 'BusinessIndustrialForm' },
  { id: 8, name: 'Services', icon: '🔧', component: 'ServicePostingForm' },
  { id: 9, name: 'Jobs', icon: '💼', component: 'JobPostingForm' },
  { id: 10, name: 'Animals', icon: '🐕', component: 'CreateAnimalPost' },
  { id: 11, name: 'Furniture & Home Decor', icon: '🛋️', component: 'FasionNBeauty' },
  { id: 12, name: 'Fashion & Beauty', icon: '👗', component: 'FasionNBeauty' },
  { id: 13, name: 'Books, Sports & Hobbies', icon: '📚', component: 'CreateBooksPost' },
  { id: 14, name: 'Kids', icon: '👶', component: 'CreateKidsPost' },
  { id: 15, name: 'Others', icon: '🗂️', component: 'OthersPosting' },
];

const SUB_CATEGORIES = [
  'Cars',
  'Cars On Installments',
  'Car Care',
  'Car Accessories',
  'Spare Parts',
  'Oil & Lubricant',
  'Buses,Vans&Trucks',
  'Rikshaw&Chingchi',
  'Tractors&Trailers',
  'Boats',
  'Other Vehicles'
];

const VEHICLE_TYPE_OPTIONS = {
  'Cars': ['Sedan', 'Hatchback', 'Coupe', 'Convertible', 'Other'],
  'Tractors&Trailers': ['Tractor', 'Trailer', 'Other'],
  'Rikshaw&Chingchi': ['Rikshaw', 'Chingchi', 'Other'],
  'Car Care': ['Air Fresher','Cleaners','Compound Polishes','Covers','Microfiber Clothes','Polishes','Presure Washers','Shampoos','waxes','Others'],
  'Car Accessories': ['Tools&Gadget','Safety&Security','Interior','Exterior','Audio&Multimedia','Others'],
  'Spare Parts': ['Engines','Fenders','Filters','Front Grills','Fuel Pump','Gasket&seals','Horns','Ignition Coil','Ignition Switchers','Insulation Sheets','Lights','Mirrors','Oxygen Sensors','Power Stearings','Radiators&Coolants','Spark Plugs','Sun Visor','Suspension Parts','Trunk Parts','Tyres','Windscreens','Wipers','Ac&Heating','Antennas','Batteries','Belt & Cables','Bonnets','Brakes','Bumpers','Bushing','Buttons','Catalytic Converters','Door & Components','Engine Shields'],
  'Oil & Lubricant': ['Chain Lubes And Cleaners','Brake Oil','CUTE Oil','Engine Oil' ,'Fuel Additives','Gear Oil ','Multipurpose Grease' ,'Oil additives','Coolants'],
  'Other Vehicles': []
};

// Car Care specific types
const CAR_CARE_TYPES = {
  'Air Fresher': ['Gel Air Freshener', 'Hanging Air Freshener', 'Spray Air Freshener'],
  'Cleaners': ['Interior Cleaner', 'Exterior Cleaner', 'Glass Cleaner', 'Wheel Cleaner', 'Engine Cleaner'],
  'Compound Polishes': ['Polish Compound', 'Rubbing Compound'],
  'Covers': ['Microfiber Cover', 'Parachute Cover'],
  'Microfiber Clothes': ['Applicator Pad', 'Microfiber Towel'],
  'Shampoos': ['Ceramic Shampu', 'Snow Foam Shampu','Wash&Wax Shampu'],
  'waxes': ['Liquid Wax', 'Paste Wax', 'Spray Wax'],
  'Others': ['Other']
};

// Car Accessories specific types
const CAR_ACCESSORIES_TYPES = {
  'Tools&Gadget': ['Car Vacuum', 'Tire Pressure Gauge', 'Jump Starter', 'Car Charger', 'Other'],
  'Safety&Security': ['Locks', 'Parking Sensor', 'Security Alarm', 'Other'],
  'Interior': ['Seat Covers', 'Steering Wheel Cover', 'Floor Mats', 'Dash Covers', 'Other'],
  'Exterior': ['Car Covers', 'Mud Flaps', 'Hood Protectors', 'Window Visors', 'Other'],
  'Audio&Multimedia': ['Car Stereo', 'Speakers', 'Subwoofers', 'Amplifiers', 'Other'],
  'Others': ['Other']
};
const SPARE_PARTS_TYPES = {
  'Bumpers': ['Front Bumper', 'Rear Bumper', 'Bumper Styling', 'Bumper Parts', 'Brackets/Mounts', 'Other'],
  'Brakes': ['Brake Discs', 'Drum Brake Shoe', 'Front Brake Pads', 'Rear Brake Pads', 'Brake Pads & Shoe', 'Other'],
  'Batteries': ['Acid Batteries', 'Dry Batteries', 'Other'],
  'Wipers': ['Frame Wiper', 'Silicone Wiper', 'Other'],
  'Tyres': ['Rims', 'Tyre Valve Caps', 'Tyres', 'Wheel Covers', 'Other'],
  'Mirrors': ['Blind Spot Mirrors', 'Rearview Mirrors', 'Side Mirrors', 'Other'],
  'Lights': ['Headlights', 'Tail Lights', 'Fog Lights', 'Indicator Lights', 'Interior Lights', 'Other'],
  'Filters': ['Air Filter', 'Cabin Filter', 'Oil Filter', 'Other'],
  'Fenders': ['Front Fenders', 'Rear Fenders', 'Fender Liners', 'Other'],
  // Add more spare parts types as needed
  'Other': ['Other']
};

const MAKES = {
  'Cars': ['Toyota', 'Honda', 'Suzuki', 'Nissan', 'Mitsubishi', 'Kia', 'Hyundai', 'Mercedes', 'BMW', 'Audi', 'Volkswagen', 'Ford', 'Chevrolet', 'Other'],
  'Tractors&Trailers': ['Massey Ferguson', 'New Holland', 'John Deere', 'Other'],
  'Rikshaw&Chingchi': ['Sazgar', 'Road Prince', 'Other'],
  'Car Care': [],
  'Cars On Installments': ['Trailer', 'Other'],
  'Car Accessories': [],
  'Spare Parts': [],
  'Oil & Lubricant': [],
  'Other Vehicles': []
};

const MODELS = {
  'Cars On Installments': ['Corolla', 'Camry', 'Prius', 'Hilux', 'Land Cruiser', 'Other'],
  'Honda': ['Civic', 'Accord', 'City', 'CR-V', 'Other'],
  'Suzuki': ['Mehran', 'Cultus', 'Swift', 'Alto', 'Wagon R', 'Other'],
  'Nissan': ['Sunny', 'March', 'Sentra', 'Other'],
  'Mitsubishi': ['Lancer', 'Pajero', 'Other'],
  'Kia': ['Sportage', 'Picanto', 'Cerato', 'Other'],
  'Hyundai': ['Elantra', 'Sonata', 'Tucson', 'Other'],
  'Hino': ['Dutro', 'Ranger', 'Other'],
  'Mercedes': ['Sprinter', 'Tourismo', 'Other'],
  'Volvo': ['B7R', 'B9R', 'Other'],
  'Massey Ferguson': ['MF 240', 'MF 260', 'MF 385', 'Other'],
  'New Holland': ['TD5', 'TM120', 'TS6', 'Other'],
  'John Deere': ['5105', '5205', '5310', 'Other'],
  'Sazgar': ['Rikshaw Plus', 'Rikshaw Deluxe', 'Other'],
  'Road Prince': ['RP 100', 'RP 150', 'Other'],
  'Yamaha': ['FX Cruiser', 'GP1800', 'Other'],
  'Other': ['Other']
};

const FUEL_TYPES = ['Petrol', 'Diesel', 'CNG', 'Hybrid', 'Electric', 'LPG', 'Other'];
const INSTALL_PLANS = ['Other'];
const TRANSMISSIONS = ['Automatic', 'Manual', 'Semi-Automatic', 'CVT', 'Other'];
const ASSEMBLY_OPTIONS = ['Local', 'Imported'];
const REGISTERED_OPTIONS = ['Yes', 'No'];
const DOC_TYPES = ['Original', 'Duplicate', 'Other'];
const REGISTRATION_CITIES = [
  'Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Peshawar',
  'Quetta', 'Multan', 'Faisalabad', 'Hyderabad', 'Other'
];

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
  const [kmsDriven, setKmsDriven] = useState('');
  const [monthlyInstall, setMonthlyInstall] = useState('');
  const [transmission, setTransmission] = useState('');
  const [assembly, setAssembly] = useState('');
  const [condition, setCondition] = useState('');
  const [registrationCity, setRegistrationCity] = useState('');
  const [location, setLocation] = useState('');
  const [docType, setDocType] = useState('Original');
  const [price, setPrice] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [numberOfOwners, setNumberOfOwners] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [registered, setRegistered] = useState('');
  const [installPlan, setInstallPlan] = useState('');
  const [features, setFeatures] = useState({});
  const [postDetails, setPostDetails] = useState({
    title: '',
    description: '',
    contactName: '',
  });

  // Memoized derived values
  const isCarCare = useMemo(() => subCategory === 'Car Care', [subCategory]);
  const isOilLubricants = useMemo(() => subCategory === 'Oil & Lubricant', [subCategory]);
  const isSpareParts = useMemo(() => subCategory === 'Spare Parts', [subCategory]);
  const isCarAccessories = useMemo(() => subCategory === 'Car Accessories', [subCategory]);
  const showKMSDriven = useMemo(() => ['Cars', 'Buses,Vans&Trucks'].includes(subCategory), [subCategory]);
  const showNumberOfOwners = useMemo(() => ['Cars'].includes(subCategory), [subCategory]);
  const showMonthlyInstall = useMemo(() => ['Cars On Installments'].includes(subCategory), [subCategory]);
  const showPrice = useMemo(() => subCategory !== 'Cars On Installments', [subCategory]);
  const showDownPayment = useMemo(() => subCategory === 'Cars On Installments', [subCategory]);
  const showRegistrationCity = useMemo(() => (
    subCategory !== 'Cars On Installments' && subCategory !== 'Boats' && subCategory !== 'Select Sub Category'
  ), [subCategory]);
  
  const showRegisteredField = useMemo(() => subCategory === 'Cars On Installments', [subCategory]);
  const showVehicleTypeDropdown = useMemo(() => subCategory && VEHICLE_TYPE_OPTIONS[subCategory]?.length > 0, [subCategory]);
  const showMakeDropdown = useMemo(() => subCategory && subCategory !== 'Select Sub Category' && MAKES[subCategory]?.length > 0, [subCategory]);
  const showModelDropdown = useMemo(() => ['Cars','Cars On Installments'].includes(subCategory), [subCategory]);
  const showCondition = useMemo(() => ['Cars','Cars On Installments','Buses,Vans&Trucks'].includes(subCategory), [subCategory]);
  const showCarCareTypeOptions = useMemo(() => isCarCare && vehicleType && CAR_CARE_TYPES[vehicleType], [isCarCare, vehicleType]);
  const showCarAccessoriesTypeOptions = useMemo(() => isCarAccessories && vehicleType && CAR_ACCESSORIES_TYPES[vehicleType], [isCarAccessories, vehicleType]);
  const showSparePartsTypeOptions = useMemo(() => isSpareParts && vehicleType && SPARE_PARTS_TYPES[vehicleType], [isSpareParts, vehicleType]);
  // Generate years array
  const years = useMemo(() => {
    const currentYear = new Date().getFullYear();
    return Array.from({length: 30}, (_, i) => currentYear - i);
  }, []);
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
      fuelType,
      kmsDriven,
      transmission,
      assembly,
      condition,
      registrationCity,
      location,
      price,
      docType,
      numberOfOwners,
      features
    };
    console.log('Vehicle post created:', submissionData);
    // Here you would typically send this data to your backend
  };

  const resetVehicleDetails = () => {
    setVehicleType('');
    setMake('');
    setModel('');
  };

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
    setShowCategoryModal(false);
  };

  const handleSubCategorySelect = (category) => {
    setSubCategory(category);
    setShowSubCategoryDropdown(false);
    resetVehicleDetails();
  };

  // Reusable component functions
  const renderSelectInput = ({ 
    value, 
    onChange, 
    options = [], 
    placeholder, 
    required = true 
  }) => (
    <select
      className="form-select"
      value={value}
      onChange={onChange}
      required={required}
      disabled={options.length === 0}
    >
      <option value="" disabled>
        {options.length === 0 ? 'No options available' : placeholder}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  );

  const renderRadioGroup = ({ name, value, options, onChange, required = true }) => (
    <div className="btn-group w-100 gap-2" role="group">
      {options.map((option) => (
        <React.Fragment key={option}>
          <input
            type="radio"
            className="btn-check"
            name={name}
            id={`${name}${option}`}
            value={option}
            checked={value === option}
            onChange={() => onChange(option)}
            required={required}
          />
          <label className="btn btn-outline-secondary" htmlFor={`${name}${option}`}>
            {option}
          </label>
        </React.Fragment>
      ))}
    </div>
  );

  const renderTextInput = ({ 
    value, 
    onChange, 
    placeholder, 
    type = 'text', 
    min, 
    max, 
    prefix, 
    icon,
    required = true 
  }) => (
    <div className="input-group">
      {prefix && <span className="input-group-text">{prefix}</span>}
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        value={value}
        min={min}
        max={max}
        onChange={onChange}
        required={required}
      />
      {icon && (
        <span className="input-group-text">
          {icon === 'calendar' ? <FiCalendar /> : null}
        </span>
      )}
    </div>
  );

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
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="row g-3">
              {CATEGORIES.map(category => (
                <div key={category.id} className="col-6">
                  <div 
                    className={`p-3 border rounded text-center cursor-pointer ${
                      selectedCategory === category.name ? 'border-warning bg-light' : ''
                    }`}
                    onClick={() => handleCategorySelect(category.name)}
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
                    {CATEGORIES.find(c => c.name === selectedCategory)?.icon || '🚗'}
                  </div>
                  <span className="fw-medium">{selectedCategory}</span>
                </div>
              </div>
              
              <div className="col-2">
                <button 
                  type="button" 
                  className="btn btn-link text-decoration-none p-0"
                  onClick={() => setShowCategoryModal(true)}
                  aria-label="Change category"
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
                        role="button"
                        tabIndex={0}
                      >
                        <span>{subCategory}</span>
                        <FiChevronDown className="ms-auto" />
                      </div>
                      {showSubCategoryDropdown && (
                        <div className="position-absolute top-100 start-0 end-0 bg-white border rounded shadow-sm z-1 mt-1">
                          <div className="max-h-200 overflow-auto">
                            {SUB_CATEGORIES.map((category, index) => (
                              <div
                                key={index}
                                className={`p-2 cursor-pointer ${subCategory === category ? 'bg-light' : ''}`}
                                onClick={() => handleSubCategorySelect(category)}
                              >
                                {category}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Vehicle Type Dropdown */}
                {showVehicleTypeDropdown && (
                  <div className="mb-3 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-4">
                        <label className="form-label"><b>What Kind Of {subCategory}</b></label>
                      </div>
                      <div className="col-8 p-0">
                        {renderSelectInput({
                          value: vehicleType,
                          onChange: (e) => {
                            setVehicleType(e.target.value);
                          },
                          options: VEHICLE_TYPE_OPTIONS[subCategory] || [],
                          placeholder: 'Select Vehicle Type'
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* Car Care Type Options */}
                {showCarCareTypeOptions && (
                  <div className="mb-3 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-4">
                        <label className="form-label"><b>Type</b></label>
                      </div>
                      <div className="col-8 p-0">
                        {['Air Fresher', 'Compound Polishes', 'Covers', 'Microfiber Clothes'].includes(vehicleType) ? (
                          renderRadioGroup({
                            name: 'carCareType',
                            value: features.carCareType || '',
                            options: CAR_CARE_TYPES[vehicleType],
                            onChange: (val) => setFeatures(prev => ({ ...prev, carCareType: val }))
                          })
                        ) : (
                          renderSelectInput({
                            value: features.carCareType || '',
                            onChange: (e) => setFeatures(prev => ({ ...prev, carCareType: e.target.value })),
                            options: CAR_CARE_TYPES[vehicleType] || [],
                            placeholder: 'Select Type'
                          })
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Car Accessories Type Options */}
                {showCarAccessoriesTypeOptions && (
                  <div className="mb-3 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-4">
                        <label className="form-label"><b>Type</b></label>
                      </div>
                      <div className="col-8 p-0">
                        {vehicleType === 'Safety&Security' ? (
                          renderRadioGroup({
                            name: 'carAccessoriesType',
                            value: features.carAccessoriesType || '',
                            options: CAR_ACCESSORIES_TYPES[vehicleType],
                            onChange: (val) => setFeatures(prev => ({ ...prev, carAccessoriesType: val }))
                          })
                        ) : (
                          renderSelectInput({
                            value: features.carAccessoriesType || '',
                            onChange: (e) => setFeatures(prev => ({ ...prev, carAccessoriesType: e.target.value })),
                            options: CAR_ACCESSORIES_TYPES[vehicleType] || [],
                            placeholder: 'Select Type'
                          })
                        )}
                      </div>
                    </div>
                  </div>
                )}

 {/* Spare Parts Type Options */}
 {showSparePartsTypeOptions && (
          <div className="mb-3 d-flex align-items-center">
            <div className="row w-100">
              <div className="col-4">
                <label className="form-label"><b>Type</b></label>
              </div>
              <div className="col-8 p-0">
                {['Bumpers', 'Brakes', 'Batteries', 'Wipers', 'Tyres', 'Mirrors', 'Filters'].includes(vehicleType) ? (
                  renderRadioGroup({
                    name: 'sparePartsType',
                    value: features.sparePartsType || '',
                    options: SPARE_PARTS_TYPES[vehicleType],
                    onChange: (val) => setFeatures(prev => ({ ...prev, sparePartsType: val }))
                  })
                ) : (
                  renderSelectInput({
                    value: features.sparePartsType || '',
                    onChange: (e) => setFeatures(prev => ({ ...prev, sparePartsType: e.target.value })),
                    options: SPARE_PARTS_TYPES[vehicleType] || [],
                    placeholder: 'Select Type'
                  })
                )}
              </div>
            </div>
          </div>
        )}

                {/* Make Dropdown */}
                {showMakeDropdown && !isCarCare && !isCarAccessories && !isSpareParts && !isOilLubricants &&(
                  <div className="mb-3 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-4">
                        <label className="form-label"><b>Make</b></label>
                      </div>
                      <div className="col-8 p-0">
                        {renderSelectInput({
                          value: make,
                          onChange: (e) => {
                            setMake(e.target.value);
                            setModel('');
                          },
                          options: MAKES[subCategory] || [],
                          placeholder: 'Select Make'
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* Model Dropdown */}
                {showModelDropdown && !isCarCare && !isCarAccessories && !isSpareParts && !isOilLubricants &&(
                  <div className="mb-3 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-4">
                        <label className="form-label"><b>Model</b></label>
                      </div>
                      <div className="col-8 p-0">
                        {renderSelectInput({
                          value: model,
                          onChange: (e) => setModel(e.target.value),
                          options: MODELS[make] || [],
                          placeholder: 'Select Model'
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* Condition */}
                {showCondition && !isCarCare && !isCarAccessories && !isSpareParts && !isOilLubricants &&(
                  <div className="mb-3 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-4">
                        <label className="form-label"><b>Condition</b></label>
                      </div>
                      <div className="col-8 p-0">
                        {renderRadioGroup({
                          name: 'condition',
                          value: condition,
                          options: ['New', 'Used'],
                          onChange: setCondition
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* Kms Driven */}
                {showKMSDriven && !isCarCare && !isCarAccessories && !isSpareParts && !isOilLubricants &&(
                  <div className="mb-3 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-4">
                        <label className="form-label"><b>Kms Driven</b></label>
                      </div>
                      <div className="col-8 p-0">
                        {renderTextInput({
                          value: kmsDriven,
                          onChange: (e) => setKmsDriven(e.target.value),
                          placeholder: "Enter kilometers driven",
                          type: 'number',
                          min: 0
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* Year Dropdown with Custom Input */}
                {!isCarCare && !isCarAccessories && !isSpareParts && !isOilLubricants && subCategory !== 'Boats'  && subCategory !== 'Select Sub Category' &&(
                  <div className="mb-3 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-4">
                        <label className="form-label"><b>Year</b></label>
                      </div>
                      <div className="col-8 p-0">
                        {renderTextInput({
                          value: year,
                          onChange: (e) => setYear(e.target.value),
                          placeholder: "Enter year (e.g., 2023)",
                          type: 'number',
                          min: 1900,
                          max: 2100,
                          icon: 'calendar'
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* Fuel Type */}
                {!isCarCare && !isCarAccessories && !isSpareParts && !isOilLubricants && subCategory !== 'Buses,Vans&Trucks' && subCategory !== 'Boats' && subCategory !== 'Select Sub Category' &&(
                  <div className="mb-3 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-4">
                        <label className="form-label"><b>Fuel Type</b></label>
                      </div>
                      <div className="col-8 p-0">
                        {renderSelectInput({
                          value: fuelType,
                          onChange: (e) => setFuelType(e.target.value),
                          options: FUEL_TYPES,
                          placeholder: 'Select Fuel Type'
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* Monthly Installment */}
                {showMonthlyInstall && !isCarCare && !isCarAccessories && !isSpareParts && !isOilLubricants &&(
                  <div className="mb-3 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-4">
                        <label className="form-label"><b>Monthly Installment</b></label>
                      </div>
                      <div className="col-8 p-0">
                        {renderTextInput({
                          value: monthlyInstall,
                          onChange: (e) => setMonthlyInstall(e.target.value),
                          placeholder: "Enter Monthly Installment",
                          type: 'number',
                          min: 0
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* Installment Plan */}
                {subCategory === 'Cars On Installments' && !isCarCare && !isCarAccessories && !isSpareParts && !isOilLubricants &&(
                  <div className="mb-3 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-4">
                        <label className="form-label"><b>Installment Plan</b></label>
                      </div>
                      <div className="col-8 p-0">
                        {renderSelectInput({
                          value: installPlan,
                          onChange: (e) => setInstallPlan(e.target.value),
                          options: INSTALL_PLANS,
                          placeholder: 'Select Installment Plan'
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* Transmission */}
                {!isCarCare && !isCarAccessories && !isSpareParts && !isOilLubricants && subCategory !== 'Buses,Vans&Trucks' && subCategory !== 'Boats' && subCategory !== 'Select Sub Category' &&(
                  <div className="mb-3 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-4">
                        <label className="form-label"><b>Transmission</b></label>
                      </div>
                      <div className="col-8 p-0">
                        {renderSelectInput({
                          value: transmission,
                          onChange: (e) => setTransmission(e.target.value),
                          options: TRANSMISSIONS,
                          placeholder: 'Select Transmission'
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* Features - Only show for non-Car Care and non-Car Accessories items */}
                {!isCarCare && !isCarAccessories && !isSpareParts && !isOilLubricants && subCategory !== 'Buses,Vans&Trucks' && subCategory !== 'Boats' && subCategory !== 'Select Sub Category' &&<CarFeaturesSelection features={features} setFeatures={setFeatures} />}

                {/* Number of Owners */}
                {showNumberOfOwners && !isCarCare && !isCarAccessories && !isSpareParts && !isOilLubricants &&(
                  <div className="mb-3 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-4">
                        <label className="form-label"><b>Number Of Owners</b></label>
                      </div>
                      <div className="col-8 p-0">
                        {renderTextInput({
                          value: numberOfOwners,
                          onChange: (e) => setNumberOfOwners(e.target.value),
                          placeholder: "Enter number of previous owners",
                          type: 'number',
                          min: 0
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* Registration City */}
                {showRegistrationCity && !isCarCare && !isCarAccessories && !isSpareParts && !isOilLubricants && subCategory !== 'Buses,Vans&Trucks' &&(
                  <div className="mb-3 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-4">
                        <label className="form-label"><b>Registration City</b></label>
                      </div>
                      <div className="col-8 p-0">
                        {renderSelectInput({
                          value: registrationCity,
                          onChange: (e) => setRegistrationCity(e.target.value),
                          options: REGISTRATION_CITIES,
                          placeholder: 'Select Registration City'
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* Registered field */}
                {showRegisteredField && !isCarCare && !isCarAccessories && !isSpareParts && !isOilLubricants &&(
                  <div className="mb-3 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-4">
                        <label className="form-label"><b>Registered</b></label>
                      </div>
                      <div className="col-8 p-0">
                        {renderRadioGroup({
                          name: 'registered',
                          value: registered,
                          options: REGISTERED_OPTIONS,
                          onChange: setRegistered
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* Document Type */}
                {!isCarCare && !isCarAccessories && !isSpareParts && !isOilLubricants && subCategory !== 'Buses,Vans&Trucks' && subCategory !== 'Boats' && subCategory !== 'Select Sub Category'&&(
                  <div className="mb-3 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-4">
                        <label className="form-label"><b>Car Documents</b></label>
                      </div>
                      <div className="col-8 p-0">
                        {renderRadioGroup({
                          name: 'docType',
                          value: docType,
                          options: DOC_TYPES,
                          onChange: setDocType
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* Assembly */}
                {!isCarCare && !isCarAccessories && !isSpareParts && !isOilLubricants && subCategory !== 'Buses,Vans&Trucks' && subCategory !== 'Boats' && subCategory !== 'Select Sub Category' &&(
                  <div className="mb-3 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-4">
                        <label className="form-label"><b>Assembly</b></label>
                      </div>
                      <div className="col-8 p-0">
                        {renderRadioGroup({
                          name: 'assembly',
                          value: assembly,
                          options: ASSEMBLY_OPTIONS,
                          onChange: setAssembly
                        })}
                      </div>
                    </div>
                  </div>
                )}

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
                      <small className="text-muted d-block text-end">
                        {isCarCare ? 
                          `Be specific (e.g. "${vehicleType} ${features.carCareType || ''}")` : 
                          isCarAccessories ?
                          `Be specific (e.g. "${vehicleType} ${features.carAccessoriesType || ''}")` :
                          'Be specific (e.g. "Toyota Corolla 2020 Model")'}
                      </small>
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
                      <small className="text-muted d-block text-end">
                        {isCarCare ? 
                          "Include key features, usage instructions, and benefits" : 
                          isCarAccessories ?
                          "Include key features, compatibility information, and benefits" :
                          "Include key features, usage history, and benefits"}
                      </small>
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
                {showPrice && (
                  <div className="mb-3 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-4">
                        <label className="form-label"><b>Price</b></label>
                      </div>
                      <div className="col-8 p-0">
                        {renderTextInput({
                          value: price,
                          onChange: (e) => setPrice(e.target.value),
                          placeholder: "Enter price",
                          type: 'number',
                          min: 0,
                          prefix: 'Rs'
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* Down Payment */}
                {showDownPayment && !isCarCare && !isCarAccessories && (
                  <div className="mb-3 d-flex align-items-center">
                    <div className="row w-100">
                      <div className="col-4">
                        <label className="form-label"><b>Down Payment</b></label>
                      </div>
                      <div className="col-8 p-0">
                        {renderTextInput({
                          value: downPayment,
                          onChange: (e) => setDownPayment(e.target.value),
                          placeholder: "Enter down payment",
                          type: 'number',
                          min: 0,
                          prefix: 'Rs'
                        })}
                      </div>
                    </div>
                  </div>
                )}
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