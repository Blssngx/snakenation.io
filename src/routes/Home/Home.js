import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import QRcode from "../../components/QRcode/QRcode";
import Features from "../../components/Features/Features";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1414073875831-b47709631146?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
        title="Your Jorney Your Story"
        text="Choose your favourite destination"
        btntext="Travel Plan"
        url="/"
        btnClass="show"
      />
      <QRcode />
      {/* <Features /> */}
      {/* <Card /> */}
      <Footer />
    </>
  );
}

export default Home;
