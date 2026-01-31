import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const { cartItems } = useContext(ShopContext);
    const navigate = useNavigate();

    return (
        <div className="cart-page">
            <h2>Your Cart</h2>

            {cartItems.length === 0 ? (
                <div className="cart-empty">
                    <p>Your cart is empty.</p>
                    <button onClick={() => navigate('/products')}>Continue Shopping</button>
                </div>
            ) : (
                <div className="cart-grid">
                    {cartItems.map((item, index) => (
                        
                        <ProductCard key={`${item.id}-${index}`} product={item} isCart={true} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
