import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { banners } from '../utils/products';
import './Carousel.css';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 2000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, []);

    const handleBannerClick = (category) => {
        navigate(`/products?category=${category}`);
        // Or if we implement separate category pages as requested:
        navigate(`/category/${category}`);
    };

    if (!banners.length) return null;

    return (
        <div className="carousel-container">
            <div
                className="carousel-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {banners.map((banner, index) => (
                    <div
                        key={index}
                        className="carousel-slide"
                        onClick={() => handleBannerClick(banner.category)}
                    >
                        <img src={banner.image} alt={banner.category} />
                        <div className="carousel-caption">
                            <h2>Shop {banner.category}</h2>
                            <p>Discover our latest collection</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="carousel-indicators">
                {banners.map((_, index) => (
                    <span
                        key={index}
                        className={index === currentIndex ? 'active' : ''}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
