import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>SNAKENATION.IO</h1>
          <p>Create, Earn and Grow</p>
        </div>
        <div>
          <a href="https://www.facebook.com/snakenationco">
            <i className="fab fa-facebook-square" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com/snakenation.co/">
            <i className="fab fa-instagram-square" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/company/snakenation/">
            <i class="fab fa-linkedin" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>App</h4>
          <a href="/">App Store</a>
          <a href="/">Play Store</a>
        </div>
        <div>
          <h4>Company</h4>
          <a href="/">About</a>
          <a href="/">Team</a>
        </div>
        <div>
          <h4>Support</h4>
          <a href="/">FAQ</a>
          <a href="/">Contact</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms and Conditions</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
