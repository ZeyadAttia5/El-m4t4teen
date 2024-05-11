import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
import Login from 'C:/Users/Seif/Documents/GitHub/El-m4t4teen/Helpawy/src/LoginPage/Login.jsx';
import './LoginRedirect.css';

const LoginRedirect = ({ title }) => {
    const [buttonVisible, setButtonVisible] = useState(true);

    const navigateTo = useNavigate();

    const handleAddItemClick = () => {
        navigateTo('login-redirect');
        setButtonVisible(false);
    };

    return (
        <div>
            {buttonVisible && (
                <button className="redirection-button" onClick={handleAddItemClick}>
                    {title}
                </button>
            )}
            
            <Routes>
                <Route path="/login-redirect" element={<Login />} />
            </Routes>
        </div>
    );
};

LoginRedirect.propTypes = {
    title: PropTypes.string.isRequired,
};

export default LoginRedirect;
