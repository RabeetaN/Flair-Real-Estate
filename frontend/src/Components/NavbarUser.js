import { Component } from "react";
import "./NavbarUser.css";
import { Link } from "react-router-dom";
import { MenuItems } from "../paths";

const NavbarUser = () => {

  const navigate = useNavigate();

  const onLogIn = () => {
    AuthServices.logout();
    navigate('/auth/login');
  };

  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Real Estate</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
           <Link
              onClick={onLogIn}>
              <button>Log In</button>
            </Link>
          
        </ul>
      </nav>
    );
}
export default NavbarUser;
