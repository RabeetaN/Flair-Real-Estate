import { Routes, Route } from "react-router-dom";
import Home from './Pages/routes/Home';
import About from './Pages/routes/About';
import Listing from './Pages/routes/Listing';
import Resources from './Pages/routes/Resources';
import Contact from './Pages/routes/Contact';
import MortCal from './Pages/Resources/MortCal';
import BuyProcess from './Pages/Resources/BuyProcess';
import SellProcess from './Pages/Resources/SellProcess';
import PropNews from './Pages/Resources/PropNews';
import "./styles.css";
import Dashboard from "./Components/Home";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mortCal" element={<MortCal />} />
        <Route path="/buy" element={<BuyProcess />} />
        <Route path="/sell" element={<SellProcess />} />
        <Route path="/news" element={<PropNews />} />
      </Routes>
    </div>
  );
}
