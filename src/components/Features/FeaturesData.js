import { Component } from "react/cjs/react.production.min";
import "./styles.css";

class FeaturesData extends Component {
  render() {
    return (
      <div className="first-fea">
        <div className="fea-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>

        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default FeaturesData;
