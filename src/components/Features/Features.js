import "./styles.css";
import FeaturesData from "./FeaturesData";
import image1 from "../../assets/images/channel-main.png";
import image2 from "../../assets/images/feed-main.png";
import image3 from "../../assets/images/wallet-vnm-in.png";
import image4 from "../../assets/images/vnm-qrscreen.png";
import image5 from "../../assets/images/upload-post.png";
import image6 from "../../assets/images/post-feed.png";

const Features = () => {
  return (
    <div className="features">
      <h1>Snakenation.io is our authentic social platform where creativity challenges rules and dopeness delivers value.</h1>

      <FeaturesData
        className="first-fea"
        heading="Create"
        text="On the main feed is where all creativity lives. All community content posted is displayed on the newsfeed. The Feed antidote drives personalization and preference, users are able to curate their feed based on personal preferences."
        img1={image1}
        img2={image2}
      />

      <FeaturesData
        className="first-fea-reverse"
        heading="Earn"
        text="The VNM wallet is a blockchain based wallet, all transactions are secure and can be verified within the wallet. The wallets securely stores all the value earned through platform activity. Users are able to send and receive VNM peer to peer, and for goods and services."
        img1={image3}
        img2={image4}
      />

      <FeaturesData
        className="first-fea"
        heading="Grow"
        text="By participating in brand assignments, projects and contest is the best way to tap into tour gig economy. VNM earned from gigs will be withdrawable immidiately."
        img1={image5}
        img2={image6}
      />
    </div>
  );
};

export default Features;
