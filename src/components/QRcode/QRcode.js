import "./styles.css";
import { Component } from "react";
import QRcode from "../../assets/images/qrCode.png";

class Navbar extends Component {
  render() {
    return (
      <img className="qrContainer" alt="www.snakenation.io" src={QRcode} />
    );
  }
}

export default Navbar;