import './Popup.css';
import propTypes from 'prop-types';


const Popup = ({ selectedRequest, onClose, onDonate }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-popup" onClick={onClose}>&times;</button>
        {selectedRequest && (
          <div>
            <h2>{selectedRequest.name}</h2>
            <p>Type: {selectedRequest.type}</p>
            <p>Quantity: {selectedRequest.quantity}</p>
            <p>{selectedRequest.description}</p>
            <div className="lowerpart">
            <img className='medsupimg' src={selectedRequest.image} alt={selectedRequest.name} />
            <p>Enter the Quantity You Would like to Donate Below:</p>
            <input type="number" min="0" max={selectedRequest.quantity} />
            <button className="button donate" onClick={onDonate}>Donate</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Popup.propTypes = {
  selectedRequest: propTypes.object.isRequired,
  onClose: propTypes.func.isRequired,
  onDonate: propTypes.func.isRequired
};
export default Popup;
