import './App.css'
import TransportationPicker from './TransportationPicker/TransportationPicker.jsx'
import SchedulePicker from './SchedulePicker/SchedulePicker.jsx'
import ScheduleDropoff from './ScheduleDropoff/ScheduleDropoff.jsx'
import ChooseItemTypePage from './ChooseItemTypePage/ChooseItemTypePage.jsx'; // Assuming you have a component for choosing item type
import RedirectionButton from './RedirectionButton/RedirectionButton.jsx'
import { BrowserRouter as Router } from 'react-router-dom';

//comment
function App() {

  return (
    <>
    <TransportationPicker/>
    <SchedulePicker/>
    <ScheduleDropoff/>
      <Router>
        <RedirectionButton title="Add Item" />
      </Router>
    </>
  )
}

export default App
