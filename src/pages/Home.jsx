import { useNavigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import './Home.css';

const categories = [
    'mobiles',
    'dress',
    'bags',
    'beauty products',
    'home appliances'
];

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <Carousel />

            <section className="categories-section">
                <h2>Browse by Category</h2>
                <h3>Products we have..</h3>
                <div className="category-buttons">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className="category-btn"
                            onClick={() => navigate(`/category/${cat}`)}
                        >
                            {cat.toUpperCase()}
                        </button>
                    ))}
                </div>
            </section>

            <section className="home-intro-text">
                <h3>Welcome to Shopzi</h3>
                <p>
                    Discover the best products at unbeatable prices. From the latest smartphones to trendy fashion,
                    essential home appliances to premium beauty products, Shopzi has it all.
                    Enjoy a seamless shopping experience with fast delivery and secure payments.
                </p>
            </section>
        </div>
    );
};

export default Home;
