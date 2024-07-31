import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Routes
import './App.css';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Tasks from './Components/Tasks';
import ProgressTracker from './Components/ProgressTracker';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Home/>}/>
          <Route path="/tasks" element={<Tasks/>}/>
          <Route path="/progresstracker" element={<ProgressTracker/>}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
