import "../styles/project.css";

const projectData = [
  {
    img: "image/project/pizza.png",
    title: "React Pizza Menu",
    role: "Frontend",
    desc: "A pizza menu webpage built using React.",
    info: "vv",
  },
  {
    img: "image/project/travel.png",
    title: "React",
    role: "Frontend",
    desc: "Travel- Check List",
    info: "aaa",
  },

  {
    img: "",
    title: "",
    desc: "",
    role: "",

    info: "",
  },
];

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
        {projectData.map((project, index) => (
          <div className="styling" key={index}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={project.img} alt={project.title} />
                </div>

                <div className="flip-card-back">
                  <h3>{project.title}</h3>
                  <p> {project.info} </p>
                </div>
              </div>
            </div>
            <div>
              <h4>{project.title} </h4>
              <p>{project.desc}.</p>
              <p>{project.role}</p>
            </div>
          </div>
        ))}
      </div>
      <button> See More</button>
    </>
  );
}

export default Projects;
