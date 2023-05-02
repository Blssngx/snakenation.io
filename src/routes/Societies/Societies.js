import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import QRcode from "../../components/QRcode/QRcode";
import heroimage from "../../assets/images/hero.png"

function Societies() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        cNameText="hero-text-mid"
        heroImg={heroimage}
        title="Societies"
        text="Join a society on your campus"
        btnClass="hide"
      />
      <QRcode />
    </>
  );
}

export default Societies;
