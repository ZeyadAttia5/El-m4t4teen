import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import PropTypes from 'prop-types';

const CountDownTimerComponent = ({ timerKey, durationInSeconds, handleTimerCompletion, formatTime }) => {
    return (
        <CountdownCircleTimer
            key={timerKey}
            isPlaying
            duration={durationInSeconds}
            onComplete={handleTimerCompletion}
            colors={[['#FF0000']]}
        >
            {({ remainingTime }) => (
                <div className="timer">
                    <div className="text">&nbsp;The driver arrives after&nbsp;</div>
                    <div className="value">{formatTime(remainingTime)}</div>
                </div>
            )}
        </CountdownCircleTimer>
    );
};

CountDownTimerComponent.propTypes = {
    timerKey: PropTypes.string.isRequired,
    durationInSeconds: PropTypes.number.isRequired,
    handleTimerCompletion: PropTypes.func.isRequired,
    formatTime: PropTypes.func.isRequired
};


export default CountDownTimerComponent;
