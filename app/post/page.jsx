'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { FiChevronLeft ,FiChevronRight} from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Logo from '@/public/images/logo.jpg';
// Dynamically import category components
const COMPONENT_MAP = {
  'MobilesPosting': dynamic(() => import('./postCategories/Mobiles')),
  'VehiclesPosting': dynamic(() => import('./postCategories/Vehicles')),
  'PropertySalePosting': dynamic(() => import('./postCategories/Property_Sale')),
  'PropertyForRent': dynamic(() => import('./postCategories/Property_Rent')),
  'ElectronicsPosting': dynamic(() => import('./postCategories/Electronics&Home')),
  'BikesPosting': dynamic(() => import('./postCategories/Bikes')),
  'BusinessIndustrialForm': dynamic(() => import('./postCategories/BusinessIndustrialAgriculture')),
  'ServicePostingForm': dynamic(() => import('./postCategories/Services')),
  'JobPostingForm': dynamic(() => import('./postCategories/Jobs')),
  'CreateAnimalPost': dynamic(() => import('./postCategories/Animal')),
  'FasionNBeauty': dynamic(() => import('./postCategories/FasionNBeauty')),
  'CreateBooksPost': dynamic(() => import('./postCategories/BooksSportsNHobbies')),
  'CreateKidsPost': dynamic(() => import('./postCategories/Kids')),
  'OthersPosting': dynamic(() => import('./postCategories/Others')),
};

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

const OLXHeader = ({ onBack, showLogo = true, title = "Post your ad" }) => (
  <header className="bg-white shadow-sm sticky-top">
    <div className="container">
      <div className="d-flex align-items-center py-2">
        <button 
          onClick={onBack}
          className="btn btn-link p-0 me-3"
        >
          <FiChevronLeft size={24} />
        </button>
        <div className="flex-grow-1 text-center">
          {showLogo ? (
            <Image 
              src={Logo} 
              alt="OLX Logo" 
              width={60} 
              height={40} 
              className="img-fluid"
            />
          ) : (
            <h5 className="mb-0 fw-bold">{title}</h5>
          )}
        </div>
        <div style={{ width: 24 }}></div> {/* Spacer for alignment */}
      </div>
    </div>
  </header>
);

const PostCreationPage = () => {
  const [selectedComponentKey, setSelectedComponentKey] = useState(null);
  const router = useRouter();
  const SelectedComponent = selectedComponentKey ? COMPONENT_MAP[selectedComponentKey] : null;

  const handleBack = () => {
    if (selectedComponentKey) {
      setSelectedComponentKey(null);
    } else {
      router.back();
    }
  };

  return (
    <div className="bg-light min-vh-100">
      {/* Consistent OLX Header */}
      <OLXHeader 
        onBack={handleBack}
        showLogo={!selectedComponentKey}
        title={selectedComponentKey ? "Post your ad" : ""}
      />

      {/* Main Content */}
      <main className="container py-3">
        {!SelectedComponent ? (
          <>
            <div className="text-center mb-4">
              <h4 className="fw-bold">Post your ad</h4>
              <p className="text-muted">Choose a category</p>
            </div>

            <div className="row g-4">
              {CATEGORIES.map(category => (
                <div key={category.id} className="col-5 col-md-4 col-lg-3">
                  <button
                    onClick={() => setSelectedComponentKey(category.component)}
                    className="text-start text-dark w-100 btn p-0 border-0 bg-transparent"
                  >
                    <div className="card h-100" style={{
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease',
  height: '120px'
}}>
  <div className="card-body d-flex align-items-center p-3" style={{
    padding: '12px'
  }}>
    <div className="d-flex align-items-center w-100">
      <div className="bg-light rounded-circle d-flex align-items-center justify-content-center" 
        style={{
          width: '60px',
          height: '60px',
          minWidth: '60px',
          marginRight: '12px'
        }}>
        <span className="fs-4">{category.icon}</span>
      </div>
      <div className="text-start flex-grow-1">
        <h6 className="mb-0 fw-bold" style={{
          fontSize: '14px',
          color: '#212121',
          lineHeight: '1.4',
          fontWeight: '500'
        }}>{category.name}</h6>
      </div>
      <FiChevronRight className="text-muted" style={{
        color: '#878787',
        minWidth: '24px'
      }} />
    </div>
  </div>
</div>
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white rounded-3 shadow-sm">
            <SelectedComponent />
          </div>
        )}
      </main>
    </div>
  );
};

export default PostCreationPage;