import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import QRcode from "../../components/QRcode/QRcode";
import heroimage from "../../assets/images/hero.png"

function Community() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        cNameText="hero-text-mid"
        heroImg={heroimage}
        title="Community"
        text="Snake Nation fosters a supportive and diverse community"
        btnClass="hide"
      />
      <QRcode />
    </>
  );
}

export default Community;
