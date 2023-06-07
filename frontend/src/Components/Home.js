import { useEffect } from "react"
import { Link } from "react-router-dom";
import HomeHero from "./HomeHero";
import Footer from "./Footer";

const Dashboard = () => {
  useEffect(() => {
    console.log('load');
  }, []);

  return (<>
<<<<<<<< Updated upstream:frontend/src/Pages/Admin/Dashboard.js
    This is Dashboard
    <Link to="/second-level">Select</Link>
========
    
    This is Home Page
    <Link to="/second-level"> Select</Link>
  
>>>>>>>> Stashed changes:frontend/src/Components/Home.js
  </>);
}

export default Dashboard
