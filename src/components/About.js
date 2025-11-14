import "../styles/about.css";

function About({ handleNext }) {
  return (
    <>
      <div className="about">
        <p className="about-text">
          I’m Vanshita Pamnani, A{" "}
          <span className="highlight">Front-End Developer </span> Passionate
          About Building <span className="highlight">Visually Engaging </span>{" "}
          And
          <span className="highlight"> Performance-Driven</span> Web
          Applications. With A Background In{" "}
          <span className="highlight">Nutrition and Dietetics </span>, I Bring A
          Unique Mix Of{" "}
          <span className="highlight">Analytical Problem-Solving </span> and
          <span className="highlight"> Creative Storytelling</span> To My
          Development Process. I Focus On writing{" "}
          <span className="highlight"> Clean</span>,{" "}
          <span className="highlight">Efficient Code</span> and Crafting
          Interfaces That Not Only Look Great But Also Offer{" "}
          <span className="highlight">Seamless User Experiences.</span>{" "}
          Currently, I’m Exploring Modern Frameworks Like{" "}
          <span className="highlight">React </span>and Working On Projects That
          Help Me Grow As Both A<span className="highlight"> Developer </span> .
        </p>

        <p>
          Front-End Developer in Progress | Clinical Dietitian | Bridging
          Wellness & Tech
        </p>
        <div>
          {" "}
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </>
  );
}

export default About;
