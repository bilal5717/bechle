import React from 'react';
import './SellersProfile.css';
import { FaWhatsapp } from 'react-icons/fa';
import { MessageCircle ,Phone,CreditCard } from 'lucide-react';
import { LuChevronRight } from 'react-icons/lu';
import Link from 'next/link';
const SellerProfileCard = () => {
  return (
    <div className="seller-card">
        <p className="seller-text">Posted by</p>
        <div className="seller-header">
            <div className="seller-avatar">
                <img src="https://dbz-images.dubizzle.com/businesses/logos/2024/12/06/a096ffeede3545319886e89190019fc3-.jpg" alt="Seller Logo" />
            </div>
            <div className="seller-details">
                <span className="seller-name">IMT MOBILE</span>
                <div className='d-flex align-items-center '>
                    <div className="seller-verification">
                        <img src="https://static.dubizzle.com/frontend-web/static-resources/assets/images/verified-business.svg" alt="Verified" />
                        <span className='verified-logo'>VERIFIED BUSINESS</span>
                    </div>
                    <div className="seller-rating mx-1">
                        <img src="https://static.dubizzle.com/frontend-web/listings/assets/images/grey-star.svg" width="14" height="14" alt="Rating" />
                        5.0
                    </div>
                </div>
            </div>
        </div>
        <p className="seller-body">
            <Link href={`/Profile/${1}`}  className="view-profile-link" passHref>View Profile  <LuChevronRight  /></Link>
          </p>
          <div className="seller-buttons">
            <div className="d-flex align-items-center justify-content-between gap-3 p-0">
            <button className="btn border-dark w-40 d-flex align-items-center justify-content-center">
                <MessageCircle fontSize={27}/><span className='mx-2 text-dark'>Chat</span>
            </button>
            <button className="btn btn-success w-40 d-flex align-items-center justify-content-center">
                <FaWhatsapp fontSize={27}/><span className='mx-2 text-white'>Whatsapp</span>
            </button>
            </div>
            <button className="btn  border-dark  d-flex align-items-center justify-content-center">
                <Phone fontSize={27}/><span className='text-dark mx-2'>Show Phone Number</span>
            </button>
            <button className="btn btn-success  d-flex align-items-center justify-content-center verified-button">
                <CreditCard fontSize={27}/><span className=' text-white mx-2 p-1'>Secure Pay with Seller</span>
            </button>
          </div>
        <div className="verified-container">
            <div className="verified-content">
                <div className="verified-text">
                    <p className="verified-title">Become a verified user</p>
                    <p className="verified-description">Push your ad to the top and <br /> get maximum exposure</p>
                </div>
                <div className="verified-button-container">
                    <button className="verified-button" type="button">Get Started</button>
                </div>
            </div>
            <div className="verified-image-container">
                <img className="verified-image" alt="Verified User Avatar" src="https://static.dubizzle.com/frontend-web/static-resources/assets/images/verified-user-avatar.svg" width="40" height="45" />
            </div>
        </div>
        
        
        
       
    </div>
  );
};

export default SellerProfileCard;