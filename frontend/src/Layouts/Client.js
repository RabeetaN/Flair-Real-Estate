import { Outlet, useNavigate } from "react-router-dom"
import NavbarUser from "../Components/Navbar"
import HomeHero from "../Components/HomeHero"
import Footer from "../Components/Footer"
import Sidebar from "../Components/Sidebar"
import { useEffect, useState } from "react";
import moment from "moment";

const Client = () => {
    return <div id="body" className="vertical-layout vertical-menu-modern 2-column navbar-floating footer-static menu-expanded" data-menu="vertical-menu-modern">
    {/* <!-- fixed-top--> */}
    <NavbarUser />

    {/* <!-- BEGIN Navigation--> */}
    <HomeHero />
    {/* <!-- END Navigation--> */}

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

export default Client