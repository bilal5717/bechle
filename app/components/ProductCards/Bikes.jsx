'use client';
import React, { useRef, useState } from 'react';
import { LuHeart, LuSlidersVertical, LuMapPin, LuPlugZap , LuGauge } from 'react-icons/lu'; // Updated icons for bikes
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/navigation';

const Bikes = () => {
  const swiperRef = useRef(null);
  const [showFullCard, setShowFullCard] = useState(false);

  const bikes = [
    {
      id: 1,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 500,000",
      title: "Yamaha YZF-R15 2020",
      mileage: "10,000 km",
      address: "123 Main St, City, Country",
      posted: "1 day ago",
      engineCapacity: "150cc",
      bikeType: 'Sports',
      transmission: 'Manual',
    },
    {
      id: 2,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 700,000",
      title: "Honda CB 300R 2021",
      mileage: "5,000 km",
      address: "456 Elm St, City, Country",
      posted: "3 days ago",
      engineCapacity: "300cc",
      bikeType: 'Naked',
      transmission: 'Manual',
    },
    {
      id: 3,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 1,200,000",
      title: "Kawasaki Ninja 650 2019",
      mileage: "15,000 km",
      address: "789 Oak St, City, Country",
      posted: "5 days ago",
      engineCapacity: "650cc",
      bikeType: 'Sports',
      transmission: 'Manual',
    },
    {
      id: 4,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 900,000",
      title: "Suzuki GSX-S750 2022",
      mileage: "8,000 km",
      address: "321 Pine St, City, Country",
      posted: "2 days ago",
      engineCapacity: "750cc",
      bikeType: 'Street',
      transmission: 'Manual',
    },
    {
      id: 5,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 1,500,000",
      title: "Ducati Monster 2021",
      mileage: "12,000 km",
      address: "654 Birch St, City, Country",
      posted: "1 week ago",
      engineCapacity: "937cc",
      bikeType: 'Naked',
      transmission: 'Manual',
    },
    {
      id: 6,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 2,000,000",
      title: "BMW S1000RR 2020",
      mileage: "7,000 km",
      address: "987 Cedar St, City, Country",
      posted: "2 weeks ago",
      engineCapacity: "1000cc",
      bikeType: 'Sports',
      transmission: 'Manual',
    },
    {
      id: 7,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 2,500,000",
      title: "Harley-Davidson Street Glide 2021",
      mileage: "9,000 km",
      address: "135 Maple St, City, Country",
      posted: "4 days ago",
      engineCapacity: "1800cc",
      bikeType: 'Cruiser',
      transmission: 'Manual',
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
      <h1>Bikes for Sale</h1>
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
          {bikes.map((bike) => (
            <SwiperSlide key={bike.id} onClick={handleSlideClick} style={{ width: '240px' }}>
              <div className="card product-card">
                <div className="image-container">
                  <img src={bike.image} alt={bike.title} />
                </div>
                <div className="card-body">
                  <div className="price-container">
                    <h6 className="price">{bike.price}</h6>
                    <LuHeart className="heart-icon" onClick={toggleLike} />
                  </div>
                  <span className='product-title'>{bike.title}</span>
                  <div className="product-status ">
                    <div className="info-icons">
                      <LuGauge /> <span>{bike.mileage}</span>
                    </div>
                   
                    <div className="info-icons mobile-label">
                      <LuPlugZap  /> <span>{bike.transmission}</span> {/* Transmission */}
                    </div>
                  </div>
                  <div className="footer-info">
                    <div className="address">
                      <LuMapPin /> <span>{bike.address}</span>
                    </div>
                    <p className="time-ago">{bike.posted}</p>
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

export default Bikes;