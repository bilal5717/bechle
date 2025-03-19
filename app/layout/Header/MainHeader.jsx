"use client";
import { useState } from 'react';
import {
  Search,
  MessageCircle,
  Bell,
  ShoppingBag,
  User,
  ChevronDown,
  MapPin, // Location icon
} from 'lucide-react';
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState(null);

  const provinces = {
    'Punjab': ['Lahore', 'Faisalabad', 'Rawalpindi', 'Multan'],
    'Sindh': ['Karachi', 'Hyderabad', 'Sukkur', 'Larkana'],
    'Khyber Pakhtunkhwa': ['Peshawar', 'Abbottabad', 'Mardan', 'Swat'],
    'Balochistan': ['Quetta', 'Gwadar', 'Khuzdar', 'Turbat'],
    'Gilgit-Baltistan': ['Gilgit', 'Skardu', 'Hunza', 'Astore'],
    'Azad Kashmir': ['Muzaffarabad', 'Mirpur', 'Rawalakot', 'Kotli'],
  };

  const handleProvinceSelect = (province) => {
    setSelectedProvince(province);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="flex items-center justify-center p-4">
      {/* Left Side: Dropdown */}
      <div className="flex items-center space-x-2 w-1/6 border mx-3 relative align-self-end">
        <button 
          className="flex items-center space-x-1 w-full justify-between px-4 py-1"
          onClick={handleDropdownToggle}
        >
          <MapPin size={16}/>
          <span>{selectedProvince || 'Menu'}</span>
          <ChevronDown size={16} />
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full left-0 w-full bg-white border mt-1 rounded shadow-lg z-10">
            {!selectedProvince ? (
              Object.keys(provinces).map((province) => (
                <div
                  key={province}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleProvinceSelect(province)}
                >
                  {province}
                </div>
              ))
            ) : (
              <>
                <div
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setSelectedProvince(null)}
                >
                  &larr; Back
                </div>
                {provinces[selectedProvince].map((city) => (
                  <div
                    key={city}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {city}
                  </div>
                ))}
              </>
            )}
          </div>
        )}
      </div>

      {/* Center: Search Bar */}
<div className="flex items-center border  px-4  w-1/2">
  <input
    type="text"
    placeholder="Search..."
    className="ml-2 bg-transparent outline-none w-full"
  />
  {/* Icon container */}
  <div className="p-2 bg-gray-200 rounded-lg flex items-center justify-center">
    <Search size={16} className="text-gray-600" />
  </div>
</div>

      {/* Right Side: Icons and Login/Signup Button */}
      <div className="flex items-center space-x-6 w-1/5 justify-end mx-3">
        <MessageCircle size={24} className="cursor-pointer" />
        <Bell size={24} className="cursor-pointer" />
        <ShoppingBag size={24} className="cursor-pointer" />
        <button className="flex items-center space-x-1">
          <User size={18} />
          <span>Login/Signup</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
