"use client";
import React, { useState, useMemo } from 'react';
import { FiEdit, FiX, FiChevronDown, FiCheck, FiPlus, FiSearch, FiCalendar } from 'react-icons/fi';
import Switch from '@/app/components/Buttons/Tooglebtn';

// ====================== CONSTANTS ======================
const CATEGORIES = [
  { id: 1, name: 'Mobiles', icon: '📱' },
  { id: 2, name: 'Property', icon: '🏠' },
  { id: 3, name: 'Electronics', icon: '💻' },
  { id: 4, name: 'Furniture', icon: '🛋️' },
  { id: 5, name: 'Jobs', icon: '💼' },
  { id: 6, name: 'Kids', icon: '👶' },
  { id: 7, name: 'Services', icon: '🔧' },
  { id: 8, name: 'Business/Industrial/Agriculture', icon: '🏭' },
];

const SUB_CATEGORIES = ['Tablets', 'Accessories', 'Mobile Phones', 'Smart Watches'];

const MOBILE_BRANDS = [
  'Apple', 'Samsung', 'Huawei', 'Xiaomi', 'Oppo', 'Vivo', 
  'Realme', 'OnePlus', 'Nokia', 'Sony', 'LG', 'Other'
];

const MOBILE_MODELS = {
  'Apple': ['iPhone 15', 'iPhone 14', 'iPhone 13', 'iPhone 12', 'iPhone 11', 'iPhone X', 'Other'],
  'Samsung': ['Galaxy S23', 'Galaxy S22', 'Galaxy S21', 'Galaxy Note 20', 'Galaxy A Series', 'Other'],
  'Huawei': ['P50', 'P40', 'Mate 40', 'Nova Series', 'Other'],
  'Xiaomi': ['Redmi Note 12', 'Redmi Note 11', 'Mi 11', 'Mi 12', 'Other'],
  'Oppo': ['Reno 8', 'Reno 7', 'Find X5', 'A Series', 'Other'],
  'Vivo': ['V25', 'V23', 'Y Series', 'Other'],
  'Realme': ['GT Neo 3', '9 Pro+', '8 Pro', 'C Series', 'Other'],
  'OnePlus': ['11', '10 Pro', '9 Pro', 'Nord Series', 'Other'],
  'Nokia': ['G60', 'X30', 'C Series', 'Other'],
  'Sony': ['Xperia 1 IV', 'Xperia 5 IV', 'Xperia 10 IV', 'Other'],
  'LG': ['Wing', 'Velvet', 'Other'],
  'Other': ['Other']
};

const WATCH_MODELS = {
  'Apple': ['Watch Series 8', 'Watch SE', 'Watch Ultra', 'Other'],
  'Samsung': ['Galaxy Watch 5', 'Galaxy Watch 4', 'Other'],
  'Huawei': ['Watch GT 3', 'Watch GT 2', 'Other'],
  'Xiaomi': ['Mi Band 7', 'Mi Watch', 'Other'],
  'Fitbit': ['Versa 4', 'Sense 2', 'Other'],
  'Garmin': ['Venu 2', 'Fenix 7', 'Other'],
  'Other': ['Other']
};

const TABLET_BRANDS = ['Apple', 'Samsung', 'Huawei', 'Lenovo', 'Microsoft', 'Amazon', 'Other'];
const WATCH_BRANDS = ['Apple', 'Samsung', 'Huawei', 'Xiaomi', 'Fitbit', 'Garmin', 'Other'];

const ACCESSORY_TYPES = [
  'Charging Cables', 'Converters', 'Chargers', 'Screens', 'Screen Protector', 
  'Mobile Stands', 'Ring Lights', 'Selfie Sticks', 'Power Banks', 'Headphones', 
  'EarPhones', 'Covers & Cases', 'External Memory', 'Other'
];

const CHARGING_CABLE_TYPES = ['USB-C', 'Lightning', 'Micro USB', 'USB-A to USB-C', 'USB-A to Lightning', 'Other'];
const CHARGER_TYPES = ['Fast Charger', 'Wireless Charger', 'Car Charger', 'Travel Charger', 'Other'];
const DEVICE_TYPES = ['Tablet', 'Mobile', 'Smart Watch'];
const HEADPHONE_TYPES = ['Wired', 'Wireless'];
const CONDITION_OPTIONS = ['New', 'Used'];
const PTA_OPTIONS = ['PTA Approved', 'Non PTA'];

// ====================== REUSABLE COMPONENTS ======================
const SelectInput = ({ value, onChange, options = [], placeholder, required = true }) => (
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

const RadioGroup = ({ name, value, options, onChange, required = true }) => (
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

const TextInput = ({ value, onChange, placeholder, type = 'text', min, max, prefix, icon, required = true }) => (
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

const CategoryModal = ({ show, onClose, selectedCategory, onSelect }) => (
  <div className="modal fade show" style={{ display: show ? 'block' : 'none', backgroundColor: 'rgba(0,0,0,0.5)' }}>
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Select Category</h5>
          <button 
            type="button" 
            className="btn-close" 
            onClick={onClose}
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
                  onClick={() => onSelect(category.name)}
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

const SubCategoryDropdown = ({ show, value, options, onSelect, onToggle }) => (
  <div className="position-relative">
    <div 
      className="form-control d-flex align-items-center cursor-pointer"
      onClick={onToggle}
      role="button"
      tabIndex={0}
    >
      <span>{value}</span>
      <FiChevronDown className="ms-auto" />
    </div>
    {show && (
      <div className="position-absolute top-100 start-0 end-0 bg-white border rounded shadow-sm z-1 mt-1">
        <div className="max-h-200 overflow-auto">
          {options.map((category, index) => (
            <div
              key={index}
              className={`p-2 cursor-pointer ${value === category ? 'bg-light' : ''}`}
              onClick={() => onSelect(category)}
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

// ====================== MAIN COMPONENT ======================
const MobilesPosting = () => {
  // ====================== STATE MANAGEMENT ======================
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Mobiles');
  const [subCategory, setSubCategory] = useState('Select Sub Category');
  const [showSubCategoryDropdown, setShowSubCategoryDropdown] = useState(false);
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [condition, setCondition] = useState('');
  const [ptaStatus, setPtaStatus] = useState('');
  const [storage, setStorage] = useState('');
  const [memory, setMemory] = useState('');
  const [accessoryType, setAccessoryType] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [postDetails, setPostDetails] = useState({
    title: '',
    description: '',
    contactName: '',
  });
  const [chargingCableType, setChargingCableType] = useState('');
  const [deviceType, setDeviceType] = useState('');
  const [chargerType, setChargerType] = useState('');
  const [headphoneType, setHeadphoneType] = useState('');

  // ====================== DERIVED VALUES ======================
  const isMobilePhones = useMemo(() => subCategory === 'Mobile Phones', [subCategory]);
  const isTablets = useMemo(() => subCategory === 'Tablets', [subCategory]);
  const isAccessories = useMemo(() => subCategory === 'Accessories', [subCategory]);
  const isSmartWatches = useMemo(() => subCategory === 'Smart Watches', [subCategory]);
  
  const showBrandDropdown = useMemo(() => 
    subCategory && subCategory !== 'Select Sub Category' && subCategory !== 'Accessories', 
    [subCategory]);
  
  const showModelDropdown = useMemo(() => 
    (isMobilePhones || isSmartWatches) && brand, 
    [isMobilePhones, isSmartWatches, brand]);
  
  const showConditionField = useMemo(() => 
    isMobilePhones || isTablets || isSmartWatches || 
    (isAccessories && ['Charging Cables', 'Chargers', 'Covers & Cases'].includes(accessoryType)), 
    [isMobilePhones, isTablets, isSmartWatches, isAccessories, accessoryType]);
  
  const showPtaField = useMemo(() => isMobilePhones, [isMobilePhones]);
  const showStorageField = useMemo(() => isMobilePhones, [isMobilePhones]);
  const showMemoryField = useMemo(() => isMobilePhones, [isMobilePhones]);
  const showAccessoryTypeField = useMemo(() => isAccessories, [isAccessories]);
  const showChargingCableType = useMemo(() => 
    isAccessories && accessoryType === 'Charging Cables', 
    [isAccessories, accessoryType]);
  const showDeviceType = useMemo(() => 
    isAccessories && ['Chargers', 'Screens', 'Screen Protector', 'Covers & Cases'].includes(accessoryType), 
    [isAccessories, accessoryType]);
  const showChargerType = useMemo(() => 
    isAccessories && accessoryType === 'Chargers', 
    [isAccessories, accessoryType]);
  const showHeadphoneType = useMemo(() => 
    isAccessories && ['Headphones', 'EarPhones'].includes(accessoryType), 
    [isAccessories, accessoryType]);

  // ====================== EVENT HANDLERS ======================
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
      brand,
      model,
      condition,
      ptaStatus,
      storage,
      memory,
      accessoryType,
      chargingCableType,
      deviceType,
      chargerType,
      headphoneType,
      price,
      location
    };
    console.log('Mobile post created:', submissionData);
    // Here you would typically send this data to your backend
  };

  const resetDetails = () => {
    setBrand('');
    setModel('');
    setCondition('');
    setPtaStatus('');
    setStorage('');
    setMemory('');
    setAccessoryType('');
    setChargingCableType('');
    setDeviceType('');
    setChargerType('');
    setHeadphoneType('');
  };

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
    setShowCategoryModal(false);
  };

  const handleSubCategorySelect = (category) => {
    setSubCategory(category);
    setShowSubCategoryDropdown(false);
    resetDetails();
  };

  // ====================== RENDER FUNCTIONS ======================
  const renderBrandDropdown = () => (
    <div className="mb-3 d-flex align-items-center">
      <div className="row w-100">
        <div className="col-4">
          <label className="form-label"><b>Brand</b></label>
        </div>
        <div className="col-8 p-0">
          <SelectInput
            value={brand}
            onChange={(e) => {
              setBrand(e.target.value);
              setModel('');
            }}
            options={
              isMobilePhones ? MOBILE_BRANDS : 
              isTablets ? TABLET_BRANDS : 
              isSmartWatches ? WATCH_BRANDS : 
              []
            }
            placeholder="Select Brand"
          />
        </div>
      </div>
    </div>
  );

  const renderModelDropdown = () => (
    <div className="mb-3 d-flex align-items-center">
      <div className="row w-100">
        <div className="col-4">
          <label className="form-label"><b>Model</b></label>
        </div>
        <div className="col-8 p-0">
          <SelectInput
            value={model}
            onChange={(e) => setModel(e.target.value)}
            options={
              isMobilePhones ? MOBILE_MODELS[brand] || [] : 
              isSmartWatches ? WATCH_MODELS[brand] || [] : 
              []
            }
            placeholder="Select Model"
          />
        </div>
      </div>
    </div>
  );

  const renderAccessoryFields = () => (
    <>
      {/* Accessory Type */}
      <div className="mb-3 d-flex align-items-center">
        <div className="row w-100">
          <div className="col-4">
            <label className="form-label"><b>Accessory Type</b></label>
          </div>
          <div className="col-8 p-0">
            <SelectInput
              value={accessoryType}
              onChange={(e) => setAccessoryType(e.target.value)}
              options={ACCESSORY_TYPES}
              placeholder="Select Accessory Type"
            />
          </div>
        </div>
      </div>

      {/* Charging Cable Type */}
      {showChargingCableType && (
        <div className="mb-3 d-flex align-items-center">
          <div className="row w-100">
            <div className="col-4">
              <label className="form-label"><b>Cable Type</b></label>
            </div>
            <div className="col-8 p-0">
              <SelectInput
                value={chargingCableType}
                onChange={(e) => setChargingCableType(e.target.value)}
                options={CHARGING_CABLE_TYPES}
                placeholder="Select Cable Type"
              />
            </div>
          </div>
        </div>
      )}

      {/* Device Type */}
      {showDeviceType && (
        <div className="mb-3 d-flex align-items-center">
          <div className="row w-100">
            <div className="col-4">
              <label className="form-label"><b>Device Type</b></label>
            </div>
            <div className="col-8 p-0">
              <RadioGroup
                name="deviceType"
                value={deviceType}
                options={DEVICE_TYPES}
                onChange={setDeviceType}
              />
            </div>
          </div>
        </div>
      )}

      {/* Charger Type */}
      {showChargerType && (
        <div className="mb-3 d-flex align-items-center">
          <div className="row w-100">
            <div className="col-4">
              <label className="form-label"><b>Charger Type</b></label>
            </div>
            <div className="col-8 p-0">
              <SelectInput
                value={chargerType}
                onChange={(e) => setChargerType(e.target.value)}
                options={CHARGER_TYPES}
                placeholder="Select Charger Type"
              />
            </div>
          </div>
        </div>
      )}

      {/* Headphone Type */}
      {showHeadphoneType && (
        <div className="mb-3 d-flex align-items-center">
          <div className="row w-100">
            <div className="col-4">
              <label className="form-label"><b>Type</b></label>
            </div>
            <div className="col-8 p-0">
              <RadioGroup
                name="headphoneType"
                value={headphoneType}
                options={HEADPHONE_TYPES}
                onChange={setHeadphoneType}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );

  const renderConditionField = () => (
    <div className="mb-3 d-flex align-items-center">
      <div className="row w-100">
        <div className="col-4">
          <label className="form-label"><b>Condition</b></label>
        </div>
        <div className="col-8 p-0">
          <RadioGroup
            name="condition"
            value={condition}
            options={CONDITION_OPTIONS}
            onChange={setCondition}
          />
        </div>
      </div>
    </div>
  );

  const renderPtaField = () => (
    <div className="mb-3 d-flex align-items-center">
      <div className="row w-100">
        <div className="col-4">
          <label className="form-label"><b>PTA Status</b></label>
        </div>
        <div className="col-8 p-0">
          <RadioGroup
            name="ptaStatus"
            value={ptaStatus}
            options={PTA_OPTIONS}
            onChange={setPtaStatus}
          />
        </div>
      </div>
    </div>
  );

  const renderStorageField = () => (
    <div className="mb-3 d-flex align-items-center">
      <div className="row w-100">
        <div className="col-4">
          <label className="form-label"><b>Storage (GB)</b></label>
        </div>
        <div className="col-8 p-0">
          <TextInput
            value={storage}
            onChange={(e) => setStorage(e.target.value)}
            placeholder="Enter storage capacity in GB"
            type="number"
            min={0}
          />
        </div>
      </div>
    </div>
  );

  const renderMemoryField = () => (
    <div className="mb-3 d-flex align-items-center">
      <div className="row w-100">
        <div className="col-4">
          <label className="form-label"><b>RAM (GB)</b></label>
        </div>
        <div className="col-8 p-0">
          <TextInput
            value={memory}
            onChange={(e) => setMemory(e.target.value)}
            placeholder="Enter RAM in GB"
            type="number"
            min={0}
          />
        </div>
      </div>
    </div>
  );

  // ====================== MAIN RENDER ======================
  return (
    <div className="container mt-4 mb-5">
      <div className="row justify-content-center">
        {/* Main Form Column */}
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
                    {CATEGORIES.find(c => c.name === selectedCategory)?.icon || '📱'}
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

            {/* Main Form Content */}
            <div className="row align-items-around mb-3 p-3">
              <form onSubmit={handleSubmit}>
                {/* Sub Category Dropdown */}
                <div className="mb-3 d-flex align-items-center">
                  <div className="row w-100">
                    <div className="col-4">
                      <label className="form-label"><b>Select Sub Category</b></label>
                    </div>
                    <div className="col-8 position-relative p-0">
                      <SubCategoryDropdown
                        show={showSubCategoryDropdown}
                        value={subCategory}
                        options={SUB_CATEGORIES}
                        onSelect={handleSubCategorySelect}
                        onToggle={() => setShowSubCategoryDropdown(!showSubCategoryDropdown)}
                      />
                    </div>
                  </div>
                </div>

                {/* Dynamic Fields Based on Selection */}
                {showBrandDropdown && renderBrandDropdown()}
                {showModelDropdown && renderModelDropdown()}
                {showAccessoryTypeField && renderAccessoryFields()}
                {showConditionField && renderConditionField()}
                {showPtaField && renderPtaField()}
                {showStorageField && renderStorageField()}
                {showMemoryField && renderMemoryField()}

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
                        {isMobilePhones ? 
                          `Be specific (e.g. "${brand} ${model} ${storage}GB")` : 
                          isTablets ?
                          `Be specific (e.g. "${brand} ${model} Tablet")` :
                          isSmartWatches ?
                          `Be specific (e.g. "${brand} ${model} Smart Watch")` :
                          isAccessories ?
                          `Be specific (e.g. "${accessoryType} for ${brand} ${model || deviceType || ''}")` :
                          'Be specific with your title'}
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
                        {isMobilePhones ? 
                          "Include key features, condition details, and any accessories included" : 
                          isTablets ?
                          "Describe the tablet's condition, features, and any included accessories" :
                          isSmartWatches ?
                          "Mention the watch condition, features, and compatibility" :
                          isAccessories ?
                          "Describe the accessory, its condition, and compatibility" :
                          "Include all relevant details about your item"}
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
                <div className="mb-3 d-flex align-items-center">
                  <div className="row w-100">
                    <div className="col-4">
                      <label className="form-label"><b>Price</b></label>
                    </div>
                    <div className="col-8 p-0">
                      <TextInput
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter price"
                        type="number"
                        min={0}
                        prefix="Rs"
                      />
                    </div>
                  </div>
                </div>
                <hr />

                {/* Contact Information */}
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

        {/* Sidebar Tips Column */}
        <div className="col-3 border">
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
      <CategoryModal
        show={showCategoryModal}
        onClose={() => setShowCategoryModal(false)}
        selectedCategory={selectedCategory}
        onSelect={handleCategorySelect}
      />
    </div>
  );
};

export default MobilesPosting;