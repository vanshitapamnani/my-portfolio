import { useState } from "react";
import "../styles/project.css";

const projectData = [
  {
    img: "image/project/pizza.png",
    title: "Pizza Menu",
    role: "- React Development",
    info: "A dynamic pizza menu application built with React, showcasing reusable components and props handling.",
    link: "https://vanshitapamnani.github.io/Pizza_menu/",
  },
  {
    img: "/image/project/travel.png",
    title: "Travel Checklist",
    role: "- React Development",
    info: "A smart checklist app to manage and track travel packing lists using React state management.",
    link: "https://vanshitapamnani.github.io/travel-list/",
  },

  {
    img: "/image/project/BillSplit.png",
    title: "Split Bill with Friends",
    role: "- React Development",
    info: "A bill-splitting tool built using React that helps friends divide expenses fairly with interactive UI.",
    link: "https://vanshitapamnani.github.io/eat_and_split/",
  },

  {
    img: "/image/project/DrumKit.png",
    title: "Interactive Drum Kit",
    role: "- JavaScript Development",
    info: "A fun drum kit app built with HTML, CSS, and JavaScript that plays sounds based on keyboard and UI actions.",
    link: "https://vanshitapamnani.github.io/Drum_Kit/",
  },

  {
    img: "/image/project/SimonGame.png",
    title: "Simon Memory Game",
    role: "- JavaScript Development",
    info: "A classic memory game created using jQuery and DOM manipulation to enhance game logic and user engagement.",
    link: "https://vanshitapamnani.github.io/simon_challenge_game/",
  },

  {
    img: "/image/project/TicTacToe.png",
    title: "Tic Tac Toe Game",
    role: "- JavaScript Development",
    info: "A two-player Tic Tac Toe game using HTML, CSS, and JavaScript with win detection logic.",
    link: "https://vanshitapamnani.github.io/tic-tac-toe-game/",
  },

  {
    img: "/image/project/DiceGame.png",
    title: "Dice Game",
    role: "- Frontend (JavaScript)",
    info: "A simple two-player dice rolling game built with HTML, CSS, and JavaScript, using DOM manipulation to update scores and determine the winner.",
    link: "https://vanshitapamnani.github.io/Dice_Game/",
  },
  {
    img: "image/project/TinDog.png",
    title: "TinDog Landing Page",
    role: "- Frontend (Bootstrap)",
    info: "A responsive landing page built using HTML, CSS, and Bootstrap, designed for a fictional dog-matching startup.",
    link: "https://vanshitapamnani.github.io/Tin_Dog/",
  },
  // {
  //   img: "image/plus.svg",
  //   title: "Add New Project",
  //   role: "",
  //   info: "",
  // },

  // {
  //   img: "image/project/DiceGame.png",
  //   title: "",
  //   role: "",
  //   info: "",
  // },
];

function Projects({ handleNext }) {
  const [showAll, setShowAll] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [projects, setProjects] = useState(projectData);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

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
          <a
            key={index}
            href={project.link || "#"}
            target={project.link ? "_blank" : "_self"}
            rel={project.link ? "noopener noreferrer" : undefined}
            style={{ textDecoration: "none", color: "inherit" }}>
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
          </a>
        ))}
      </div>
      <div className="btn">
        {!showForm && (
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "Show More"}
          </button>
        )}
        {!showAll && (
          <button onClick={() => setShowForm(!showForm)}>
            {showForm ? "cancel" : "Add New Project"}
          </button>
        )}
      </div>
      <div>
        {showForm && (
          <form
            onSubmit={(e) => {
              e.preventDefault();

              const newProject = {
                img: e.target.img.value || "uploadImg.jpeg",

                title: e.target.title.value,
                role: e.target.role.value,
                info: e.target.info.value,
                link: e.target.link.value,
              };

              setProjects([...projects, newProject]);
              e.target.reset();

              setShowForm(false);
            }}
            style={{
              backgroundColor: "white",
              margin: "40px auto",
              width: "400px",
              display: "grid",
              gap: "10px",
              padding: 30,
            }}>
            <label>Image Path:</label>
            <input
              type="text"
              name="img"
              placeholder="Please add your Image Path here"
            />
            <label> Project Title:</label>
            <input type="text" name="title" placeholder="Title" required />
            <label> Project Category:</label>
            <input type="text" name="role" placeholder="Category" required />
            <label> Project Info:</label>
            <input type="text" name="info" placeholder="Short Info" required />
            <label> Project Link:</label>
            <input
              type="text"
              name="link"
              placeholder="Link (GitHub)"
              required
            />
            <button type="submit" style={{ backgroundColor: "black" }}>
              Save Project
            </button>
          </form>
        )}
      </div>

      {showForm || !showAll || (!showAll && <InProgress />)}

      <div className="button-container">
        <button onClick={handleNext}>Next </button>
      </div>
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
