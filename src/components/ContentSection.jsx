import "../styles/ContentSection.css";
import image from "../assets/brain.png";


const ContentSection = () => {
  return (
    <section className="content-section" style={{ backgroundColor: "#CEA5AD" }}>
      <div className="content-text">
        <h2>
          Rousers activism
          <br /> makes people <br /> think.
        </h2>
        <p>
          Our interventions can be funny, scary, strange ⁠-⁠ whatever it takes
          to grab peoples attention and make them stop and think. Rouser does
          this to wake as many people as possible to the burning need for action
          on climate change and eco⁠-⁠collapse.
        </p>
      </div>
      <div className="content-image-container">
        <img
          src={image}
          alt="Rousers activism makes people think."
          className="content-image"
        />
      </div>
    </section>
  );
};

export default ContentSection;
