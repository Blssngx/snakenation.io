import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import QRcode from "../../components/QRcode/QRcode";
import Features from "../../components/Features/Features";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo";
import heroimage from "../../assets/images/hero-image.png"

function Home() {
  return (
    <>
      <Hero
        cName="hero"
        heroImg={heroimage}
        cNameText="hero-text"
        title="Your Story, Your Way."
        text="Tell and define your own narrative, freely and sustainably on a global scale."
      />
      <QRcode />
      <Features />
      <Footer />
    </>
  );
}

export default Home;
