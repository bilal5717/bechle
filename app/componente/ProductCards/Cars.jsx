'use client';
import React, { useRef, useState } from 'react';
import { LuHeart, LuSlidersVertical , LuMapPin, LuCar, LuFuel, LuGauge } from 'react-icons/lu';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/navigation';
import './cardstyles.css';

const Cars = () => {
  const swiperRef = useRef(null);
  const [showFullCard, setShowFullCard] = useState(false);

  const cars = [
    {
      id: 1,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 2,500,000",
      title: "Toyota Corolla 2020",
      mileage: "50,000 km",
      address: "123 Main St, City, Country",
      posted: "1 day ago",
      fuelType: 'Petrol',
      automatic: 'Manual',
    },
    {
      id: 2,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 3,000,000",
      title: "Honda Civic 2021",
      mileage: "10,000 km",
      address: "456 Elm St, City, Country",
      posted: "3 days ago",
      fuelType: 'Hybrid',
      automatic: 'Auto',
    },
    {
      id: 3,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 1,800,000",
      title: "Suzuki Cultus 2019",
      mileage: "70,000 km",
      address: "789 Oak St, City, Country",
      posted: "5 days ago",
      fuelType: 'Petrol',
      automatic: 'Manual',
    },
    {
      id: 4,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 4,500,000",
      title: "Toyota Prius 2022",
      mileage: "5,000 km",
      address: "321 Pine St, City, Country",
      posted: "2 days ago",
      fuelType: 'Hybrid',
      automatic: 'Manual',
    },
    {
      id: 5,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 6,000,000",
      title: "Audi A4 2021",
      mileage: "30,000 km",
      address: "654 Birch St, City, Country",
      posted: "1 week ago",
      fuelType: 'Diesel',
      automatic: 'Manual',
    },
    {
      id: 6,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 7,500,000",
      title: "BMW X5 2020",
      mileage: "40,000 km",
      address: "987 Cedar St, City, Country",
      posted: "2 weeks ago",
      fuelType: 'Petrol',
      automatic: 'Manual',
    },
    {
      id: 7,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      price: "RS 8,000,000",
      title: "Mercedes-Benz C-Class 2021",
      mileage: "15,000 km",
      address: "135 Maple St, City, Country",
      posted: "4 days ago",
      fuelType: 'Diesel',
      automatic: 'Manual',
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
    <div className="container my-5">
      <h1>Cars for Sale</h1>
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
          {cars.map((car) => (
            <SwiperSlide key={car.id} onClick={handleSlideClick} style={{ width: '240px' }}>
              <div className="card product-card">
                <div className="image-container">
                  <img src={car.image} alt={car.title} />
                </div>
                <div className="card-body">
                  <div className="price-container">
                    <h6 className="price">{car.price}</h6>
                    <LuHeart className="heart-icon" onClick={toggleLike} />
                  </div>
                  <span className='product-title'>{car.title}</span>
                  <div className="product-status">
                    <div className="info-icons">
                      <LuGauge /> <span>{car.mileage}</span>
                    </div>
                    <div className="info-icons cars-label">
                      <LuFuel /> <span>{car.fuelType}</span>
                    </div>
                    <div className="info-icons">
                      <LuSlidersVertical  />  <span>{car.automatic}</span>
                    </div>
                  </div>
                  <div className="footer-info">
                    <div className="address">
                      <LuMapPin /> <span>{car.address}</span>
                    </div>
                    <p className="time-ago">{car.posted}</p>
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

export default Cars;