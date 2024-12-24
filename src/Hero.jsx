import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Explore Now</h1>
          <p>
            I’ve learned React by building some amazing projects! Hands-on
            experience is the best way to master any technology, and React is no
            exception. Check out the cool projects I’ve created to solidify my
            knowledge of React.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
