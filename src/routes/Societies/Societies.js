import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import QRcode from "../../components/QRcode/QRcode";
import heroimage from "../../assets/images/hero.png"
import Post from "../../components/Post/Post";
import feedpost from "../../assets/data/feedposts.json";
import HorizontalScroll from 'react-scroll-horizontal';

function Societies() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero
        cName="hero-mid"
        cNameText="hero-text-mid"
        heroImg={heroimage}
        title="Features"
        text="Join a society on your campus"
        btnClass="hide"
      />

      {/* <DashboardNavbar /> */}
      {/* <div style={{
        marginTop: "50px",
        marginBottom: "50px",
        alignContent: "center",
        justifyContent: "flex-start",
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
      }}> */}

        <HorizontalScroll>
        {
          feedpost.map((item, index) => (
            <Post feed={item} />
          ))
        }
        </HorizontalScroll>
      {/* </div> */}

      {/* <BottomTab /> */}
      {/* <Post /> */}
      {/* <QRcode /> */}
    </>
  );
}

export default Societies;
