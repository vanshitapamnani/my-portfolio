import "../styles/project.css";
function Projects() {
  return (
    <>
      <div className="project">
        <h1>Projects I've Done</h1>
      </div>
      <div className="para">
        <p>
          These projects represent my journey as a front-end developer, where I
          experiment, learn, and build visually appealing, functional
          interfaces. Each project has helped me strengthen my skills and
          understand real-world web development.
        </p>
      </div>
      <div className="out-container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="image/project/pizzaa.png" alt="pizza menu" />
            </div>

            <div className="flip-card-back">
              <h3>React Project</h3>
              <p>This is a pizza menu webpage.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
