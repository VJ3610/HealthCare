
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar/Navbar';
import Home from './pages/Homepage/Home';
import Schedule from './pages/Schedulepage/Schedules';
import Topbar from './pages/Navbar/Topbar';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Topbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          {/* <Route path="/Medi" element={<Medicals/>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

