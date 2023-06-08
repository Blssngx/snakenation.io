import { Component } from "react";
import "./styles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-black.svg";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">

        <img style={{
          width: "50px",
          padding: "5px",
        }}
          alt="www.snakenation.io"
          src={logo} />

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link 
                className={item.cName} 
                to={item.url}>
                  {item.title}
                  <i 
                  className={item.icon}></i>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
