import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
import ChooseItemType from '../ChooseItemTypePage/ChooseItemTypePage.jsx';

import './RedirectionButton.css';

const RedirectionButton = ({ title }) => {
    const [buttonVisible, setButtonVisible] = useState(true);

    const navigateTo = useNavigate();

    const handleAddItemClick = () => {
        navigateTo('/choose-item-type');
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
                <Route path="/choose-item-type" element={<ChooseItemType />} />
            </Routes>
        </div>
    );
};

RedirectionButton.propTypes = {
    title: PropTypes.string.isRequired,
};

export default RedirectionButton;
