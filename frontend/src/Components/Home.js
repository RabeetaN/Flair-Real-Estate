import { useEffect } from "react"
import { Link } from "react-router-dom";
import HomeHero from "./HomeHero";
import Footer from "./Footer";

const Dashboard = () => {
  useEffect(() => {
    console.log('load');
  }, []);

  return (<>
    This is Dashboard
    <Link to="/second-level">Select</Link>
  </>);
}

export default Dashboard
