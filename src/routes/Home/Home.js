import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import QRcode from "../../components/QRcode/QRcode";
import Features from "../../components/Features/Features";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo";
import heroimage from "../../assets/images/hero-image.png"
import Post from "../../components/Post/Post";
import feedpost from "../../assets/data/feedposts.json";
import walltop from "../../assets/data/walltop.json";
import wallbottom from "../../assets/data/wallbottom.json";
import "./Home.css";
import HorizontalScroll from "react-scroll-horizontal";

function Home() {
  const child = { width: `300em`, height: `100%` }


  return (
    <>
      <Navbar />
      {/* <Hero
        cName="hero"
        heroImg={heroimage}
        cNameText="hero-text"
      /> */}

      {/* <div className="device">
        <div className="media-scroller"> */}

      {/* <h1 style={{
        fontSize: "3rem", fontWeight: "bold", color: "black", textAlign: "center", marginBottom: "1rem", marginTop: "1rem"}}
          >
          Latest Posts
      </h1 > */}
      
    <section
      className="feed-section">
      {
        walltop.map((item, index) => (
          <Post feed={item} />
        ))
      }
    </section>

    <section
      className="feed-section1">
      {
        wallbottom.map((item, index) => (
          <Post feed={item} />
        ))
      }
    </section>


  {/* </div>
      </div> */}



      <QRcode />
      <Features />
      <Footer />
    </>
  );
}

export default Home;
