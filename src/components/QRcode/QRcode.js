import "./styles.css";
import { Component } from "react";
import QRcode from "../../assets/images/qrCode.png";
import logo from "../../assets/images/logo-black.svg";

class Navbar extends Component {
  render() {
    return (
      <div className="QRcontainer">
      <img className="qr-image" alt="www.snakenation.io" src={QRcode} />
      <img className="qr-image2" alt="www.snakenation.io" src={logo} />
      </div>
    );
  }
}

export default Navbar;
