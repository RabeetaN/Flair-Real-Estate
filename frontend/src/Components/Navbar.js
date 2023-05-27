import { useEffect, useState } from "react";
import { Link, useNavigate, useMatch, useResolvedPath } from "react-router-dom";
import * as AuthServices from '../Services/AuthService';
import './Navbar.css';


const Navbar = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const onLogout = () => {
    AuthServices.logout();
    setTimeout(() => {
      navigate('/auth/login');
    }, 100);
  }

  useEffect(() => {
    let user = localStorage.getItem('user');
    if (user) {
      user = JSON.parse(user);
      setUser(user.payload);
    }
  }, [])

  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }

  return <>
    <nav className="header-navbar navbar-expand-lg navbar navbar-with-menu fixed-top navbar-light navbar-shadow">
      <div className="navbar-wrapper">
        <div className="navbar-container content">
          <div className="navbar-collapse" id="navbar-mobile">
            <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
              <ul className="nav navbar-nav">
                <li className="nav-item mobile-menu d-xl-none mr-auto"><a className="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i className="ficon feather icon-menu"></i></a></li>
              </ul>
              <ul className="nav navbar-nav bookmark-icons">
                <li className="nav-item d-none d-lg-block">
                </li>
              </ul>
              <ul className="navbar-nav">
              <li className="nav-item">
                <form className="form-inline my-2 my-lg-0 custom-search">
                  <div className="input-group">
                    <input className="form-control border-secondary py-2" type="search" placeholder="Search" aria-label="Search" />
                      <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">
                          <i className="fa fa-search"></i>
                        </button>
                      </div>
                  </div>
                </form>
              </li>

              
                <li className="nav-item">
                  <Link to="/" className="site-title">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <CustomLink to="/">About Us</CustomLink>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <CustomLink to="/">NSW Listing</CustomLink>
                     <div className="dropdown-options">
                        <CustomLink to="/">Sydney North West</CustomLink>
                        <CustomLink to="/">Sydney South West</CustomLink>
                        <CustomLink to="/">Newcastle</CustomLink>
                        <CustomLink to="/">Central Coast</CustomLink>
                        <CustomLink to="/">Wollongong</CustomLink>
                      </div>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                  <CustomLink to="/">Resources</CustomLink>
                    <div className="dropdown-options">
                      <CustomLink to="/">Mortgage Calculator</CustomLink>
                      <CustomLink to="/">Buying and Selling process</CustomLink>
                      <CustomLink to="/">Property news</CustomLink>
                    </div>
                  </div>
                </li>  
              <li className="nav-item">
                <CustomLink to="/">Contact Us</CustomLink>
              </li>
            </ul>
            </div>
            <ul className="nav navbar-nav float-right">
              <li className="dropdown dropdown-user nav-item"><a className="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">
                <div className="user-nav d-sm-flex d-none"><span className="user-name text-bold-600">{user?.email || 'John Doe'}</span><span className="user-status">Available</span></div><span><img className="round" src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/default/avatar.jpg`} alt="avatar" height="40" width="40" /></span>
              </a>
                <div className="dropdown-menu dropdown-menu-right"><a className="dropdown-item" href="#"><i className="feather icon-user"></i> Edit Profile</a><a className="dropdown-item" href="#"><i className="feather icon-mail"></i> My Inbox</a><a className="dropdown-item" href="#"><i className="feather icon-check-square"></i> Task</a><a className="dropdown-item" href="#"><i className="feather icon-message-square"></i> Chats</a>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="#" onClick={onLogout}><i className="feather icon-power"></i> Logout</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </>
}

export default Navbar
