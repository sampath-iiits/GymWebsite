const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToPricing = () => {
    document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="content">
        <div className="title">
          <h1>LET'S</h1>
          <h1>GET</h1>
          <h1>MOVING</h1>
        </div>
        <div className="sub-title">
          <p>Your Journey to Fitness Starts Here</p>
          <p>Show Your Potential</p>
        </div>
        <div className="buttons">
          <button onClick={scrollToPricing}>View Plans</button>
          <button onClick={scrollToContact}>Start Your Journey</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
