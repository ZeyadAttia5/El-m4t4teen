// my User stories:     55, 56, 57, 58, 59, 66, 67, 68, 69, 70, 71, 72, 73
// the ones I finished: 55, 56, 57, 58, 59, 66, 67, 68,   , 70, 71, 72, 73

// import PostsContainer from './OrganizationRepresentative/Posts/PostsContainer.jsx'
import Navbar from './NavigationBar/NavBar'
import Profile from './profile/profile.jsx';
import NotificationsPage from './notifications/notifications.jsx';
import ScheduleDropoff from './ScheduleDropoff/ScheduleDropoff.jsx';
import OrgSendAppreciation from './OrganizationRepresentative/OrgSendAppreciation/OrgSendAppreciation.jsx';
import SchedulePicker from './SchedulePicker/SchedulePicker.jsx';
import TransportationPicker from './TransportationPicker/TransportationPicker.jsx';
// import HomePage from './home/home.jsx';
import OrgDashboard from './OrganizationRepresentative/OrgDashboard.jsx';
import OrgNewPost from './OrganizationRepresentative/RequestPost/RequestPost.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequestView from './RequestView/RequestView.jsx';

import './App.css'

const App = () => {

    return (
        <>
            <Router>
                <Navbar />
                <RequestView/>
                <Routes>
                    <Route path="/" element={<OrgDashboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/notifications" element={<NotificationsPage />} />
                    <Route path="/OrgChooseDropOffTime" element={<ScheduleDropoff />} />
                    <Route path="/OrgSendAppreciation" element={<OrgSendAppreciation />} />
                    <Route path='/DonateSchedPicker'element={<SchedulePicker/>}/>
                    <Route path='/DonateTransportPicker'element={<TransportationPicker/>}/>
                    <Route path='/OrgRepr/NewPost'element={<OrgNewPost/>}/>

                </Routes>
            </Router>
            {/* <TestList /> */}
            {/* <PostsContainer /> */}
        </>
    );


}

export default App