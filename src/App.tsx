import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import MedicineGroup from './components/MedicineGroup';
import { Medicine } from './types/Medicine';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const medicines: Medicine[] = [
  { name: "medicineA", dosage : "10m/g", timesToTake : "once per day" },
  { name: "medicineB", dosage : "200m/g", timesToTake : "twice per day" },
  { name: "medicineC", dosage : "2.5m/g", timesToTake : "as needed" },
];

// Placeholder Components for Routes
const Home: React.FC = () => <div>Home Page</div>;
const About: React.FC = () => <div>About Page</div>;
const Services: React.FC = () => <div>Services Page</div>;
const Contact: React.FC = () => <div>Contact Page</div>;

function App() {
return(
  <Router>
    <Navbar /> {/* Render the Navbar at the top */}
      <div className="container mt-5 pt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<MedicineGroup medicines={medicines} patient='testpatient'/>} />
        </Routes>
      </div>
  </Router>
  
);
<div>
    <MedicineGroup medicines={medicines} patient='testpatient'/>
  </div>

}
export default App
