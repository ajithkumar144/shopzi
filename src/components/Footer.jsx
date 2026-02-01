import './Footer.css';

const Footer = () => {
    return (
        <footer className="shopzi-footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Shopzi. All rights reserved.</p>
                <div className="footer-links">
                    <span>Designed by Ajithkumar</span>
                    {/* <span>Terms of Service</span>
                    <span>Contact Us</span> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
