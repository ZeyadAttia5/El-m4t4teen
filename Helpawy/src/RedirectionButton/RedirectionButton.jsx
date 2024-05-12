import PropTypes from 'prop-types';
import { useNavigate, Route, Routes } from 'react-router-dom';
import ChooseItemType from '../OrganizationRepresentative/RequestPost/RequestPost.jsx';

import './RedirectionButton.css';

const RedirectionButton = ({ title }) => {
    const navigateTo = useNavigate();

    const handleAddItemClick = () => {
        navigateTo('/create-new-post');
        // setButtonVisible(false);
    };

    return (
        <>

            <button className='Redirection-Button' onClick={handleAddItemClick}>
                {title}
            </button>

            <Routes>
                <Route path="/create-new-post" element={<ChooseItemType />} />
            </Routes>
        </>
    );
};

RedirectionButton.propTypes = {
    title: PropTypes.string.isRequired,
};

export default RedirectionButton;
