import { useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { ShopContext } from '../context/ShopContext';
import './ProductCard.css';

const ProductCard = ({ product, isCart = false }) => {
    const { addToCart, removeFromCart } = useContext(ShopContext);
    const [showModal, setShowModal] = useState(false);

    const handleBuy = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="product-card">
            <div className="product-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-price">₹{product.price.toLocaleString('en-IN')}</p>
                <div className="product-actions">
                    <button className="btn-buy" onClick={handleBuy}>Buy Now</button>

                    {isCart ? (
                        <button className="btn-remove" onClick={() => removeFromCart(product.id)}>Remove</button>
                    ) : (
                        <button className="btn-cart" onClick={() => addToCart(product)}>Add to Cart</button>
                    )}
                </div>
            </div>

            {showModal && createPortal(
                <div className="modal-overlay">
                    <div className="modal-content">
                        <p>Thanks for the shopping! Your product is on the way.</p>
                        <button className="modal-close" onClick={handleCloseModal}>Close</button>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default ProductCard;
