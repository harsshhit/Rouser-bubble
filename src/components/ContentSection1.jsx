import image from "../assets/eye.png";

const ContentSection = () => {
  return (
    <section className="content-section" style={{ backgroundColor: "#70AABC" }}>
      <div className="content-text">
        <h2>
          Change only happens <br /> when everyone <br /> is paying attention.
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
