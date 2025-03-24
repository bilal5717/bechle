import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import { LuChevronLeft, LuChevronRight, LuHeart, LuShare2 } from "react-icons/lu";
import './ProductDetails.css';

const ProductImageCarousel = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [zoomedImage, setZoomedImage] = useState(null);

    const handleVideoClick = () => {
        setIsVideoPlaying(true);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsVideoPlaying(false);
        setIsModalOpen(false);
        setZoomedImage(null);
    };

    const toggleLike = () => setIsLiked(!isLiked);

    const images = [
        "https://media.geeksforgeeks.org/wp-content/uploads/20211213172224/1.png",
        "https://media.geeksforgeeks.org/wp-content/uploads/20211213172225/2.png",
        "https://media.geeksforgeeks.org/wp-content/uploads/20211213172226/3.png",
        "https://media.geeksforgeeks.org/wp-content/uploads/20211213172227/4.png",
        "https://media.geeksforgeeks.org/wp-content/uploads/20211213172229/5.png",
        "https://media.geeksforgeeks.org/wp-content/uploads/20211213172229/5.png",
        "https://media.geeksforgeeks.org/wp-content/uploads/20211213172229/5.png"
    ];

    const handleImageZoom = (image) => {
        setZoomedImage(image);
        setIsModalOpen(true);
    };

    return (
        <div style={{ position: "relative" }}>
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <button className="modal-close-btn" onClick={closeModal}>✖</button>
                    {isVideoPlaying ? (
                        <video
                            src="https://www.w3schools.com/html/mov_bbb.mp4"
                            controls
                            autoPlay
                            className="modal-content"
                            onClick={(e) => e.stopPropagation()}
                        />
                    ) : (
                        <img
                            src={zoomedImage}
                            alt="Zoomed"
                            className="modal-content"
                            onClick={(e) => e.stopPropagation()}
                        />
                    )}
                </div>
            )}

            <div className="top-right-icons">
                <div className="fav-icon">
                    <LuHeart
                        onClick={toggleLike}
                        className={isLiked ? "liked" : ""}
                    />
                </div>
                <div className="fav-icon">
                    <LuShare2 />
                </div>
            </div>

            <Carousel
                renderArrowPrev={(onClickHandler, hasPrev) =>
                    hasPrev && (
                        <button onClick={onClickHandler} className="carousel-arrow left">
                            <LuChevronLeft />
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext) =>
                    hasNext && (
                        <button onClick={onClickHandler} className="carousel-arrow right">
                            <LuChevronRight />
                        </button>
                    )
                }
                showIndicators={false}
                showThumbs={true}
                showStatus={false}
                thumbWidth={100} // Ensure proper thumbnail sizing
                emulateTouch={true} // Enable smooth scrolling
                swipeScrollTolerance={5} // Minor scroll sensitivity
                selectedItem={0} // Ensure it resets properly
            >
                <div>
                    <img
                        src="https://img.youtube.com/vi/YE7VzlLtp-4/maxresdefault.jpg"
                        alt="video thumbnail"
                        onClick={handleVideoClick}
                        className="video-thumbnail"
                    />
                    <button onClick={handleVideoClick} className="video-play-btn">▶️</button>
                </div>
                {images.map((image, index) => (
                    <div key={index} >
                        <img
                            src={image}
                            alt={`image${index + 1}`}
                            onClick={() => handleImageZoom(image)}
                            className="carousel-image"
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ProductImageCarousel;
