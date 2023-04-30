import "./styles.css";
import QRcode from "../../assets/images/logo-black.svg";

const Features = () => {
  return (
    <div className="features">
      <h1>Features</h1>
      <p>Earm Value for your content</p>

      <div className="first-fea">
        <div className="fea-text">
          <h2>Taal Volcano, Batangas</h2>
          <p>Tours</p>
        </div>

        <div className="image">
          <img alt="img" src={QRcode} />
        </div>
      </div>
    </div>
  );
};

export default Features;
