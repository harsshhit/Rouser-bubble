import "../styles/HeroSection.css";
import BubbleComponent from "./BubbleComponent";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="bubble-container">
        <BubbleComponent />
      </div>
      <h1>Not sorry to <br/> burst your bubble</h1>
    </section>
  );
};

export default HeroSection;
