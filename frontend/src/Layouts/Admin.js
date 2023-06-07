import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Sidebar from "../Components/Sidebar"
import Footer from "../Components/Footer"
import HomeHero from "../Components/HomeHero";
import NavbarUser from "../Components/NavbarUser"

const Admin = () => {
  return <div id="body" className="vertical-layout vertical-menu-modern 2-column navbar-floating footer-static menu-expanded" data-menu="vertical-menu-modern">
    {/* <!-- fixed-top--> */}
    <NavbarUser />

    {/* <!-- BEGIN Navigation--> */}
    <Sidebar homeUrl="/" />
    {/* <!-- END Navigation--> */}

    <HomeHero
        cName="hero"
        heroImg="https://www.gannett-cdn.com/presto/2021/06/21/PNAS/1a51b257-cf34-4d30-a2b3-297589a51dab-Bold_Colors-10.JPG?crop=2611,1469,x1,y226&width=1600&height=800&format=pjpg&auto=webp"
        title="Real Estate"
        text="Choose Your New Estate with Real Estate."
        btnClass="hide"
        url="/"
      />

    {/* <!-- BEGIN Content--> */}
    <div className="app-content content">
      <div className="content-wrapper">
        <Outlet />
      </div>
    </div>
    {/* <!-- END Content--> */}

    {/* <!-- START FOOTER LIGHT--> */}
    <footer className="footer footer-static footer-light">
      <Footer />
    </footer>
    {/* <!-- END FOOTER LIGHT--> */}

  </div>
}

export default Admin
