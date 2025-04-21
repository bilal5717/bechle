'use client';
import React, { useRef, useState } from 'react';
import { LuHeart, LuChartArea, LuFactory, LuMapPin, LuHouse, LuWheat } from 'react-icons/lu'; // Updated icons for lands
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/navigation';

const LandsAndPlots = () => {
  const swiperRef = useRef(null);
  const [showFullCard, setShowFullCard] = useState(false);

  // Mapping for dynamic icons based on land type
  const iconMapping = {
    Industrial: LuFactory,
    Residential: LuHouse,
    Agricultural: LuWheat,
    Commercial: LuFactory, // Use factory for commercial or add a new icon if needed
  };

  const lands = [
    {
      id: 1,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 5,000,000",
      title: "Industrial Plot in City Zone",
      address: "123 Main St, City, Country",
      posted: "1 day ago",
      area: "10 Marla",
      type: "Industrial",
    },
    {
      id: 2,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 8,000,000",
      title: "Residential Plot in Suburb",
      address: "456 Elm St, City, Country",
      posted: "3 days ago",
      area: "1 Kanal",
      type: "Residential",
    },
    {
      id: 3,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 3,000,000",
      title: "Agricultural Land in Rural Area",
      address: "789 Oak St, City, Country",
      posted: "5 days ago",
      area: "5 Acres",
      type: "Agricultural",
    },
    {
      id: 4,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 12,000,000",
      title: "Commercial Plot in Business District",
      address: "321 Pine St, City, Country",
      posted: "2 days ago",
      area: "2 Kanal",
      type: "Commercial",
    },
    {
      id: 5,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 6,000,000",
      title: "Industrial Plot Near Highway",
      address: "654 Birch St, City, Country",
      posted: "1 week ago",
      area: "8 Marla",
      type: "Industrial",
    },
    {
      id: 6,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 4,500,000",
      title: "Residential Plot in Gated Community",
      address: "987 Cedar St, City, Country",
      posted: "2 weeks ago",
      area: "7 Marla",
      type: "Residential",
    },
    {
      id: 7,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 15,000,000",
      title: "Large Agricultural Land",
      address: "135 Maple St, City, Country",
      posted: "4 days ago",
      area: "10 Acres",
      type: "Agricultural",
    }
  ];

  const toggleLike = (e) => {
    e.target.classList.toggle('liked');
  };

  const handleSlideClick = () => {
    setShowFullCard(!showFullCard);
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // Move to the next slide on click
    }
  };

  return (
    <div className="container-fluid my-3">
      <h1>Lands & Plots for Sale</h1>
      <div className="position-relative">
        <button className="nav-button prev" onClick={() => swiperRef.current?.slidePrev()}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <Swiper
          modules={[Navigation]}
          spaceBetween={10} // Consistent gap between cards
          slidesPerView="auto" // Use "auto" to allow custom slide widths
          navigation={{
            prevEl: '.prev',
            nextEl: '.next',
          }}
          breakpoints={{
            // When window width is >= 320px
            320: {
              slidesPerView: 1,
            },
            // When window width is >= 480px
            480: {
              slidesPerView: 2,
            },
            // When window width is >= 768px
            768: {
              slidesPerView: 3,
            },
            // When window width is >= 992px
            992: {
              slidesPerView: 4,
            },
            // When window width is >= 1200px
            1200: {
              slidesPerView: showFullCard ? 5 : 4.5, // Show 4.5 cards on large screens
            },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {lands.map((land) => {
            const IconComponent = iconMapping[land.type] || LuFactory; // Default to LuFactory if type is not found
            return (
              <SwiperSlide key={land.id} onClick={handleSlideClick} style={{ width: '240px' }}>
                <div className="card product-card">
                  <div className="image-container">
                    <img src={land.image} alt={land.title} />
                  </div>
                  <div className="card-body">
                    <div className="price-container">
                      <h6 className="price">{land.price}</h6>
                      <LuHeart className="heart-icon" onClick={toggleLike} />
                    </div>
                    <span className='product-title'>{land.title}</span>
                    <div className="product-status">
                      <div className="info-icons">
                        <LuChartArea /> <span>{land.area}</span> {/* Area */}
                      </div>
                      <div className="info-icons mobile-label">
                        <IconComponent /> <span>{land.type}</span> {/* Dynamically rendered icon */}
                      </div>
                    </div>
                    <div className="footer-info">
                      <div className="address">
                        <LuMapPin /> <span>{land.address}</span>
                      </div>
                      <p className="time-ago">{land.posted}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button className="nav-button next" onClick={() => swiperRef.current?.slideNext()}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default LandsAndPlots;