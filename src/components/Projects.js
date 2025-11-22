import { useState } from "react";
import "../styles/project.css";

const projectData = [
  {
    img: "image/project/pizza.png",
    title: "Pizza Menu",
    role: "- React Development",
    info: "A dynamic pizza menu application built with React, showcasing reusable components and props handling.",
  },
  {
    img: "image/project/travel.png",
    title: "Travel Checklist",
    role: "- React Development",
    info: "A smart checklist app to manage and track travel packing lists using React state management.",
  },

  {
    img: "image/project/BillSplit.png",
    title: "Split Bill with Friends",
    role: "- React Development",
    info: "A bill-splitting tool built using React that helps friends divide expenses fairly with interactive UI.",
  },

  {
    img: "image/project/DrumKit.png",
    title: "Interactive Drum Kit",
    role: "- JavaScript Development",
    info: "A fun drum kit app built with HTML, CSS, and JavaScript that plays sounds based on keyboard and UI actions.",
  },

  {
    img: "image/project/SimonGame.png",
    title: "Simon Memory Game",
    role: "- JavaScript Development",
    info: "A classic memory game created using jQuery and DOM manipulation to enhance game logic and user engagement.",
  },

  {
    img: "image/project/TicTacToe.png",
    title: "Tic Tac Toe Game",
    role: "- JavaScript Development",
    info: "A two-player Tic Tac Toe game using HTML, CSS, and JavaScript with win detection logic.",
  },

  {
    img: "image/project/DiceGame.png",
    title: "Dice Game",
    role: "- Frontend (JavaScript)",
    info: "A simple two-player dice rolling game built with HTML, CSS, and JavaScript, using DOM manipulation to update scores and determine the winner.",
  },
  {
    img: "image/project/TinDog.png",
    title: "TinDog Landing Page",
    role: "- Frontend (Bootstrap)",
    info: "A responsive landing page built using HTML, CSS, and Bootstrap, designed for a fictional dog-matching startup.",
  },
  {
    img: "image/plus.svg",
    title: "Add New Project",
    role: "",
    info: "",
  },

  // {
  //   img: "image/project/DiceGame.png",
  //   title: "",
  //   role: "",
  //   info: "",
  // },
];

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projectData : projectData.slice(0, 3);
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
        {visibleProjects.map((project, index) => (
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
              <p> {project.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="btn">
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>

      {!showAll && <InProgress />}
    </>
  );
}

const inProgressProject = [
  {
    img: "image/project/TicTacToe.png",
    title: "testing",
    role: "inprogress",
    progress: 70,
    info: "abcd",
  },
];

function InProgress() {
  return (
    <>
      <div className="project">
        <h1>In-progress Projects 🚧</h1>
      </div>
      <div className="para">
        <p>Projects I’m currently working on and still improving ✨</p>
      </div>
      <div className="out-container">
        {inProgressProject.map((project, index) => (
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
              <p> {project.role}</p>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${project.progress}%` }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="btn">
        <button> More</button>
      </div> */}
    </>
  );
}

export default Projects;
