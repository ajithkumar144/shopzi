import { useParams } from 'react-router-dom';
import { products } from '../utils/products';
import ProductCard from '../components/ProductCard';
import './CategoryPage.css'; 

const CategoryPage = () => {
    const { category } = useParams();

    const categoryProducts = products.filter(p => p.category.toLowerCase() === category.toLowerCase());

    return (
        <div className="category-page">
            <h2 className="category-title">{category.charAt(0).toUpperCase() + category.slice(1)} Collection</h2>

            {categoryProducts.length === 0 ? (
                <p>No products found in this category.</p>
            ) : (
                <div className="products-grid">
                    {categoryProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoryPage;
