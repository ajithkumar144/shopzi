import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import './Navbar.css'; // We'll create this or use index.css

const Navbar = () => {
    const { user, cartItems } = useContext(ShopContext);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo" onClick={() => navigate('/')}>
                    <h1>Shopzi</h1>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <div className={isOpen ? "bar open" : "bar"}></div>
                    <div className={isOpen ? "bar open" : "bar"}></div>
                    <div className={isOpen ? "bar open" : "bar"}></div>
                </div>
            </div>
            <ul className={isOpen ? "navbar-links active" : "navbar-links"}>
                <li onClick={toggleMenu}><Link to="/">Home</Link></li>
                <li onClick={toggleMenu}><Link to="/products">Products</Link></li>
                <li onClick={toggleMenu}><Link to="/cart">Cart ({cartItems.length})</Link></li>
                {user ? (
                    <li className="navbar-user" onClick={toggleMenu}>
                        <Link to="/login" className="user-profile-link">Hi, {user.name}</Link>
                    </li>
                ) : (
                    <li onClick={toggleMenu}><Link to="/login">Login</Link></li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
