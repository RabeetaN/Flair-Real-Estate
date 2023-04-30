import { BrowserRouter } from 'react-router-dom';
import RenderRouters from './routes';
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

function App() {
  return (
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
  );
}

export default App;
