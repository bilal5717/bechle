'use client';
import React from 'react';
import { LuHeart, LuTag, LuMapPin, LuWifi, LuWifiOff } from 'react-icons/lu';
import './cardstyles.css';

const Mobiles = () => {
  const mobiles = [
    {
      id: 1,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 50,000",
      title: "Samsung Galaxy S21 Samsung Galaxy S21",
      status: "Used",
      address: "123 Main St, City, Country",
      posted: "1 day ago",
      ptaApproved: 'pta',
    },
    {
      id: 2,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 45,000",
      title: "iPhone 12 iPhone 12iPhone ",
      status: "New",
      address: "456 Elm St, City, Country",
      posted: "3 days ago",
      ptaApproved: 'non pta',
    },
    {
      id: 3,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 45,000",
      title: "iPhone 12 iPhone 12iPhone ",
      status: "New",
      address: "456 Elm St, City, Country",
      posted: "3 days ago",
      ptaApproved: 'non pta',
    },
    {
      id: 4,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 45,000",
      title: "iPhone 12 iPhone 12iPhone ",
      status: "New",
      address: "456 Elm St, City, Country",
      posted: "3 days ago",
      ptaApproved: 'non pta',
    },
    {
      id: 5,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 45,000",
      title: "iPhone 12 iPhone 12iPhone ",
      status: "New",
      address: "456 Elm St, City, Country",
      posted: "3 days ago",
      ptaApproved: 'non pta',
    }


  ];

  const toggleLike = (e) => {
    e.target.classList.toggle('liked');
  };

  return (
    <div className="container my-5">
      <h1>Mobile Phones for Sale</h1>
      <div className="d-flex justify-content-start flex-nowrap overflow-auto product-card-wrapper">
        {mobiles.map((mobile) => (
          <div key={mobile.id} className="card me-3 product-card">
            <div className="image-container">
              <img src={mobile.image} alt={mobile.title} />
            </div>
            
            <div className="card-body">
              <div className="price-container">
                <h6 className="price">{mobile.price}</h6>
                <LuHeart className="heart-icon" onClick={toggleLike} />
              </div>
              <span className='product-title'>{mobile.title}</span>

              <div className="product-status">
                <div className="info-icons">
                  <LuTag /> <span>{mobile.status}</span>
                </div>
                <div className="info-icons pta">
                  {mobile.ptaApproved === 'pta' ? <LuWifi /> : <LuWifiOff />} <span>{mobile.ptaApproved === 'pta' ? 'PTA' : 'Non-PTA'}</span>
                </div>
              </div>
              <div className="footer-info">
                <div className="address">
                  <LuMapPin /> <span>{mobile.address}</span>
                </div>
                <p className="time-ago">{mobile.posted}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mobiles;