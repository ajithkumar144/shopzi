import { useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import './Login.css';

const Login = () => {
    const { user, login, logout } = useContext(ShopContext);
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        email: ''
    });
    const [errors, setErrors] = useState({});
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formData.name.trim()) tempErrors.name = '⚠ Required';
        if (!formData.age.trim()) tempErrors.age = '⚠ Required';
        if (!formData.gender) tempErrors.gender = '⚠ Required';
        if (!formData.email.trim()) tempErrors.email = '⚠ Required';

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setShowSuccessModal(true);
        }
    };

    const handleModalClose = () => {
        setShowSuccessModal(false);
        login(formData);
    };

    const handleLogout = () => {
        logout();
        setFormData({ name: '', age: '', gender: '', email: '' });
    };

    if (user) {
        return (
            <div className="login-page">
                <div className="user-card-decorated">
                    <div className="card-header">
                        <div className="avatar-placeholder">
                            {user.name.charAt(0).toUpperCase()}
                        </div>
                        <h2 style={{color:'white'}}>Welcome, {user.name}!</h2>
                    </div>
                    <div className="card-body">
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Age:</strong> {user.age}</p>
                        <p><strong>Gender:</strong> {user.gender}</p>
                    </div>
                    <button className="btn-logout" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        );
    }

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Login / Sign Up</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.name ? 'error-input' : ''}
                        />
                        {errors.name && <span className="error-msg">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <label>Age</label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            className={errors.age ? 'error-input' : ''}
                        />
                        {errors.age && <span className="error-msg">{errors.age}</span>}
                    </div>

                    <div className="form-group">
                        <label>Gender</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className={errors.gender ? 'error-input' : ''}
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.gender && <span className="error-msg">{errors.gender}</span>}
                    </div>

                    <div className="form-group">
                        <label>Email ID</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? 'error-input' : ''}
                        />
                        {errors.email && <span className="error-msg">{errors.email}</span>}
                    </div>

                    <button type="submit" className="btn-login">Login</button>
                </form>
            </div>

            {showSuccessModal && (
                <div className="modal-overlay">
                    <div className="modal-content success-modal">
                        <div className="success-icon">✔</div>
                        <h3>Login Successful!</h3>
                        <p>Welcome to Shopzi.</p>
                        <button className="modal-close" onClick={handleModalClose}>Continue</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
