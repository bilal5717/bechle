'use client';
import React, { useRef, useState } from 'react';
import { LuHeart, LuBed, LuBath, LuChartArea , LuMapPin } from 'react-icons/lu'; // Updated icons for houses
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/navigation';
import './cardstyles.css';

const Houses = () => {
  const swiperRef = useRef(null);
  const [showFullCard, setShowFullCard] = useState(false);

  const houses = [
    {
      id: 1,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 15,000,000",
      title: "Modern 3-Bedroom House",
      address: "123 Main St, City, Country",
      posted: "1 day ago",
      bedrooms: 3,
      bathrooms: 2,
      area: "10 Marla",
    },
    {
      id: 2,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 25,000,000",
      title: "Luxury 5-Bedroom Villa",
      address: "456 Elm St, City, Country",
      posted: "3 days ago",
      bedrooms: 5,
      bathrooms: 4,
      area: "1 Kanal",
    },
    {
      id: 3,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 10,000,000",
      title: "Cozy 2-Bedroom Apartment",
      address: "789 Oak St, City, Country",
      posted: "5 days ago",
      bedrooms: 2,
      bathrooms: 1,
      area: "5 Marla",
    },
    {
      id: 4,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 30,000,000",
      title: "Spacious 6-Bedroom House",
      address: "321 Pine St, City, Country",
      posted: "2 days ago",
      bedrooms: 6,
      bathrooms: 5,
      area: "2 Kanal",
    },
    {
      id: 5,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 12,000,000",
      title: "Elegant 4-Bedroom House",
      address: "654 Birch St, City, Country",
      posted: "1 week ago",
      bedrooms: 4,
      bathrooms: 3,
      area: "8 Marla",
    },
    {
      id: 6,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 18,000,000",
      title: "Beautiful 3-Bedroom House",
      address: "987 Cedar St, City, Country",
      posted: "2 weeks ago",
      bedrooms: 3,
      bathrooms: 2,
      area: "7 Marla",
    },
    {
      id: 7,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 40,000,000",
      title: "Grand 7-Bedroom Mansion",
      address: "135 Maple St, City, Country",
      posted: "4 days ago",
      bedrooms: 7,
      bathrooms: 6,
      area: "3 Kanal",
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
      <h1>Houses for Sale</h1>
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
          {houses.map((house) => (
            <SwiperSlide key={house.id} onClick={handleSlideClick} style={{ width: '240px' }}>
              <div className="card product-card">
                <div className="image-container">
                  <img src={house.image} alt={house.title} />
                </div>
                <div className="card-body">
                  <div className="price-container">
                    <h6 className="price">{house.price}</h6>
                    <LuHeart className="heart-icon" onClick={toggleLike} />
                  </div>
                  <span className='product-title'>{house.title}</span>
                  <div className="product-status">
                    <div className="info-icons">
                      <LuBed /> <span>{house.bedrooms} Beds</span> {/* Bedrooms */}
                    </div>
                    <div className="info-icons">
                      <LuBath /> <span>{house.bathrooms} Baths</span> {/* Bathrooms */}
                    </div>
                    <div className="info-icons">
                      <LuChartArea  /> <span>{house.area}</span> {/* Area */}
                    </div>
                  </div>
                  <div className="footer-info">
                    <div className="address">
                      <LuMapPin /> <span>{house.address}</span>
                    </div>
                    <p className="time-ago">{house.posted}</p>
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

export default Houses;