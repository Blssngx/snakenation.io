import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import QRcode from "../../components/QRcode/QRcode";

function Societies() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1414073875831-b47709631146?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
        title="Societies"
        btnClass="hide"
      />
      <QRcode />
    </>
  );
}

export default Societies;
