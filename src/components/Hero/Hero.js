import "./styles.css";

function Hero() {
  return (
    <>
      <div className="hero">
        <img
          alt="HeroImg"
          src="https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        />

        <div className="hero-text">
          <h1>Your Journey Your Story</h1>
          <p>Choose Your Favourite Destination.</p>
          <a href="/">Travel Plan</a>
        </div>
      </div>
    </>
  );
}

export default Hero;
