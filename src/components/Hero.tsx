import '../components/style/Hero.css';


const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm Akashdeep Singh</h1>
          <p>A Frontend Developer</p>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Akashdeep Singh" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
