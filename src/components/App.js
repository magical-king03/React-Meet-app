import '../assests/css/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import AddMeetings from '../pages/AddMeeting';
import NotFound from '../pages/NotFound';
import UpcomingMeeting from '../pages/UpcomingMeeting';
import PastMeeting from '../pages/PastMeeting';
import Nav from '../components/Nav'

function App() {
  return (
    <div className="App">
      <div>
        <Nav />
      </div>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-meeting' element={<AddMeetings />} />
        <Route path='/upcoming-meeting' element={<UpcomingMeeting />} />
        <Route path='/past-meeting' element={<PastMeeting />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
