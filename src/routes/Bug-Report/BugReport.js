import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import QRcode from "../../components/QRcode/QRcode";
import heroimage from "../../assets/images/hero.png"

function BugReport() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        cNameText="hero-text-mid"
        heroImg={heroimage}
        title="Bug Report"
        text="Users can report any security vulnerabilities that they may discover"
        btnClass="hide"
      />
      <QRcode />
    </>
  );
}

export default BugReport;
