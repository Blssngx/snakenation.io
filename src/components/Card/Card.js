import "./styles.css";
import CardData from "./CardData";
import QRcode from "../../assets/images/qrCode.png";

function Card() {
  return (
    <div className="card">
      <h1>At Snakenation we</h1>
      <p>You belong with us</p>
      <div className="tripcard">
          
        <CardData
          image={QRcode}
          heading="Create"
          text="codnd dfushfbjs sfsjhfsnf fdjsjfsj"
        />
        
        <CardData
          image={QRcode}
          heading="Earn"
          text="codnd dfushfbjs sfsjhfsnf fdjsjfsj"
        />
        
        <CardData
          image={QRcode}
          heading="Grow"
          text="codnd dfushfbjs sfsjhfsnf fdjsjfsj"
        />
        
      </div>
    </div>
  );
}

export default Card;
