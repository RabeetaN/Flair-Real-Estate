import { BrowserRouter } from 'react-router-dom';
import RenderRouters from './routes';
<<<<<<< Updated upstream
import Home from "./Pages/Design/Home"
import NSWListings from "./Pages/Design/NSWListings"
import Resources from "./Pages/Design/Resources"
import AboutUs from "./Pages/Design/AboutUs"
import ContactUs from "./Pages/Design/ContactUs"
import { Route, Routes } from "react-router-dom"
import SydneyNorthWest from './Pages/Design/listing/SydneyNorthWest';
import SydneySouthWest from './Pages/Design/listing/SydneySouthWest';
import CentralCoast from './Pages/Design/listing/CentralCoast';
import Newcastle from './Pages/Design/listing/Newcastle';
import Wollongong from './Pages/Design/listing/Wollongong';
import MortgageCal from './Pages/Design/resources/MortgageCal';
import BuyAndSell from './Pages/Design/resources/BuyAndSell';
import PropertyNews from './Pages/Design/resources/PropertyNews';
=======
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
>>>>>>> Stashed changes

export default function App() {
  return (
<<<<<<< Updated upstream
    <BrowserRouter>
      <RenderRouters />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing" element={<NSWListings />} />
            <Route path="/sydneyNW" element={<SydneyNorthWest />} />
            <Route path="/sydneySW" element={<SydneySouthWest />} />
            <Route path="/centralCoast" element={<CentralCoast />} />
            <Route path="/newcastle" element={<Newcastle />} />
            <Route path="/wollongong" element={<Wollongong />} />
          <Route path="/resources" element={<Resources />} />
            <Route path="/mortgageCal" element={<MortgageCal />} />
            <Route path="/buyAndSell" element={<BuyAndSell />} />
            <Route path="/propNew" element={<PropertyNews />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </BrowserRouter>
=======
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
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
>>>>>>> Stashed changes
  );
}
