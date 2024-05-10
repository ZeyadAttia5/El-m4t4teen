import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
import DonorPage from './DonorPage';

const DonorVolunteerRedirect = ({ title }) => {
    const [buttonVisible, setButtonVisible] = useState(true);

    const navigateTo = useNavigate();

    const handleAddItemClick = () => {
        navigateTo('donorpage');
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
                <Route path="/donorpage" element={<DonorPage />} />
            </Routes>
        </div>
    );
};

DonorVolunteerRedirect.propTypes = {
    title: PropTypes.string.isRequired,
};

export default DonorVolunteerRedirect;
