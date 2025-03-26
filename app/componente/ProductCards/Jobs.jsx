'use client';
import React, { useRef, useState } from 'react';
import { LuHeart, LuBriefcase, LuClock, LuBuilding, LuMapPin,LuHouse } from 'react-icons/lu'; // Updated icons for jobs
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/navigation';
import './cardstyles.css';

const Jobs = () => {
  const swiperRef = useRef(null);
  const [showFullCard, setShowFullCard] = useState(false);

  // Mapping for dynamic icons based on employment type and job type
  const employmentTypeIcons = {
    'Full Time': LuBriefcase,
    'Part Time': LuClock,
  };

  const jobTypeIcons = {
    Onsite: LuBuilding,
    Remote: LuHouse,
  };

  const jobs = [
    {
      id: 1,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      title: "Software Engineer",
      company: "Tech Corp",
      address: "123 Main St, City, Country",
      posted: "1 day ago",
      employmentType: "Full Time",
      jobType: "Remote",
    },
    {
      id: 2,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      title: "Graphic Designer",
      company: "Creative Agency",
      address: "456 Elm St, City, Country",
      posted: "3 days ago",
      employmentType: "Part Time",
      jobType: "Onsite",
    },
    {
      id: 3,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      title: "Data Analyst",
      company: "Data Solutions Inc.",
      address: "789 Oak St, City, Country",
      posted: "5 days ago",
      employmentType: "Full Time",
      jobType: "Remote",
    },
    {
      id: 4,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      title: "Marketing Manager",
      company: "Global Marketing",
      address: "321 Pine St, City, Country",
      posted: "2 days ago",
      employmentType: "Full Time",
      jobType: "Onsite",
    },
    {
      id: 5,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      title: "Customer Support",
      company: "Supportive Solutions",
      address: "654 Birch St, City, Country",
      posted: "1 week ago",
      employmentType: "Part Time",
      jobType: "Remote",
    },
    {
      id: 6,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      title: "Product Manager",
      company: "Innovate Tech",
      address: "987 Cedar St, City, Country",
      posted: "2 weeks ago",
      employmentType: "Full Time",
      jobType: "Onsite",
    },
    {
      id: 7,
      image: "https://d3fyizz0b46qgr.cloudfront.net/global/homepage/video/spark30series/%E5%9B%BE%E5%B1%82%202.jpg",
      title: "UI/UX Designer",
      company: "Design Studio",
      address: "135 Maple St, City, Country",
      posted: "4 days ago",
      employmentType: "Part Time",
      jobType: "Remote",
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
      <h1>Jobs Available</h1>
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
          {jobs.map((job) => {
            const EmploymentIcon = employmentTypeIcons[job.employmentType] || LuBriefcase; // Default to LuBriefcase
            const JobTypeIcon = jobTypeIcons[job.jobType] || LuBuilding; // Default to LuBuilding
            return (
              <SwiperSlide key={job.id} onClick={handleSlideClick} style={{ width: '240px' }}>
                <div className="card product-card">
                  <div className="image-container">
                    <img src={job.image} alt={job.title} />
                  </div>
                  <div className="card-body">
                    <div className="price-container">
                      <h6 className="price">{job.company}</h6>
                      <LuHeart className="heart-icon" onClick={toggleLike} />
                    </div>
                    <span className='product-title'>{job.title}</span>
                    <div className="product-status">
                      <div className="info-icons">
                        <EmploymentIcon /> <span>{job.employmentType}</span> {/* Employment Type */}
                      </div>
                      <div className="info-icons mobile-label">
                        <JobTypeIcon /> <span>{job.jobType}</span> {/* Job Type */}
                      </div>
                    </div>
                    <div className="footer-info">
                      <div className="address">
                        <LuMapPin /> <span>{job.address}</span>
                      </div>
                      <p className="time-ago">{job.posted}</p>
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

export default Jobs;