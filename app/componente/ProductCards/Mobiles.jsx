'use client';
import React, { useRef } from 'react';
import { LuHeart, LuTag, LuMapPin, LuWifi, LuWifiOff } from 'react-icons/lu';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/navigation';
import './cardstyles.css';

const Mobiles = () => {
  const swiperRef = useRef(null);

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
    },
    {
      id: 6,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 45,000",
      title: "iPhone 12 iPhone 12iPhone ",
      status: "New",
      address: "456 Elm St, City, Country",
      posted: "3 days ago",
      ptaApproved: 'non pta',
    },
    {
      id: 7,
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
      <div className="position-relative">
        <button className="nav-button prev" onClick={() => swiperRef.current?.slidePrev()}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={5} // Default number of cards
          navigation={{
            prevEl: '.prev',
            nextEl: '.next',
          }}
          breakpoints={{
            // When window width is >= 1200px
            1200: {
              slidesPerView: 5,
            },
            // When window width is >= 992px
            992: {
              slidesPerView: 4,
            },
            // When window width is >= 768px
            768: {
              slidesPerView: 3,
            },
            // When window width is >= 576px
            576: {
              slidesPerView: 2,
            },
            // When window width is < 576px
            0: {
              slidesPerView: 1,
            },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {mobiles.map((mobile) => (
            <SwiperSlide key={mobile.id}>
              <div className="card me-3 product-card">
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
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="nav-button next" onClick={() => swiperRef.current?.slideNext()}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Mobiles;