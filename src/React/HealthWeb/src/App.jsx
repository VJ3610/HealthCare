
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Schedule from './pages/Schedules';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

