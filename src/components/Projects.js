import { useEffect, useState } from "react";
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
    img: "image/project/travel.png",
    title: "Travel Checklist",
    role: "- React Development",
    info: "A smart checklist app to manage and track travel packing lists using React state management.",
    link: "https://vanshitapamnani.github.io/travel-list/",
  },

  {
    img: "image/project/BillSplit.png",
    title: "Split Bill with Friends",
    role: "- React Development",
    info: "A bill-splitting tool built using React that helps friends divide expenses fairly with interactive UI.",
    link: "https://vanshitapamnani.github.io/eat_and_split/",
  },

  {
    img: "image/project/DrumKit.png",
    title: "Interactive Drum Kit",
    role: "- JavaScript Development",
    info: "A fun drum kit app built with HTML, CSS, and JavaScript that plays sounds based on keyboard and UI actions.",
    link: "https://vanshitapamnani.github.io/Drum_Kit/",
  },

  {
    img: "image/project/SimonGame.png",
    title: "Simon Memory Game",
    role: "- JavaScript Development",
    info: "A classic memory game created using jQuery and DOM manipulation to enhance game logic and user engagement.",
    link: "https://vanshitapamnani.github.io/simon_challenge_game/",
  },

  {
    img: "image/project/TicTacToe.png",
    title: "Tic Tac Toe Game",
    role: "- JavaScript Development",
    info: "A two-player Tic Tac Toe game using HTML, CSS, and JavaScript with win detection logic.",
    link: "https://vanshitapamnani.github.io/tic-tac-toe-game/",
  },

  {
    img: "image/project/DiceGame.png",
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
  const [projects, setProjects] = useState([]);
  const [base64Image, setBase64Image] = useState("");

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch(
          "https://portfolio-backend-3-hm5b.onrender.com/api/projects"
        );
        const data = await res.json();
        console.log("FETCHED PROJECTS : ", data);
        setProjects(data);
      } catch (err) {
        console.error("ERROR IN FETCHING PROJECTS : ", err);
      }
    }

    fetchProjects();
  }, []);
  function saveClick() {
    console.log("project has been saved!");
  }

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  // function handleEdit() {
  //   return;
  // }

  // function handleDelete() {}

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
                  <a
                    key={index}
                    href={project.link || "#"}
                    target={project.link ? "_blank" : "_self"}
                    rel={project.link ? "noopener noreferrer" : undefined}
                    // style={{ textDecoration: "none", color: "inherit" }}
                    className="a-link">
                    Click to Visit Project
                  </a>
                </div>
              </div>
            </div>

            {/* {project info} */}
            <div>
              <h4>{project.title} </h4>
              <p> {project.role}</p>
              {project.progress !== undefined && (
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${project.progress}%` }}></div>
                </div>
              )}
              {project.stage && (
                <p style={{ marginTop: "5px", fontWeight: "600" }}>
                  {project.stage === "completed"
                    ? "Completed"
                    : `🚧 In Progress (${project.progress}%)`}
                </p>
              )}
              <div className="action-btns">
                <button className="action-btn1">🗑️</button>
                <button className="action-btn2">✏️</button>
              </div>
            </div>
          </div>
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
            onSubmit={async (e) => {
              e.preventDefault();
              const finalImage = base64Image || "/uploadImg.jpeg";

              const newProject = {
                // img: e.target.img.value || "uploadImg.jpeg",
                img: finalImage,

                title: e.target.title.value,
                role: e.target.role.value,
                info: e.target.info.value,
                link: e.target.link.value,
                stage: e.target.stage.value,
                progress:
                  e.target.stage.value === "Completed"
                    ? 100
                    : Number(e.target.progress.value),
              };

              console.log("submitting project:", newProject);

              try {
                const res = await fetch(
                  "https://portfolio-backend-3-hm5b.onrender.com/api/projects",
                  {
                    method: "POST",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify(newProject),
                  }
                );
                const data = await res.json();
                console.log(data);
                setProjects((prev) => [...prev, data.project]);
                e.target.reset();
                setBase64Image("");
                setShowForm(false);
              } catch (err) {
                console.error("ERROR in Saving project: ", err);
              }
            }}
            style={{
              backgroundColor: "white",
              margin: "40px auto",
              width: "400px",
              display: "grid",
              gap: "10px",
              padding: 30,
            }}>
            <label>Upload Image:</label>
            <input
              type="file"
              accept="image/*"
              placeholder="Please add your Image Path here"
              onChange={async (e) => {
                const file = e.target.files[0];
                if (file) {
                  const base64 = await convertToBase64(file);
                  setBase64Image(base64);
                }
              }}

              // {base64Image && (
              //   <img src = {base64Image}
              //   alt = "preview"
              //   style ={{width : "100%" , borderRadius :"10px" , marginTop :"10px"}} />
              // )}
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
              placeholder="Link (GitHub Repo)"
              required
            />

            <label> Status :</label>
            <select name="stage">
              <option value="Completed"> Completed</option>
              <option value="In-Progress"> In Progress</option>
            </select>

            <label> Progress % : </label>
            <input
              type="number"
              name="progress"
              placeholder="0-100"
              min="0"
              max="100"></input>
            <button
              type="submit"
              style={{ backgroundColor: "black" }}
              onClick={saveClick}>
              Save Project
            </button>
          </form>
        )}
      </div>

      {/* {showForm || !showAll || (!showAll && <InProgress />)} */}
      {/* <InProgress /> */}

      <div className="button-container">
        <button onClick={handleNext}>Next </button>
      </div>
    </>
  );
}

// const inProgressProject = [
//   {
//     img: "image/project/TicTacToe.png",
//     title: "testing",
//     role: "inprogress",
//     progress: 70,
//     info: "abcd",
//   },
// ];

// function InProgress() {
//   return (
//     <>
//       <div className="project">
//         <h1>In-progress Projects 🚧</h1>
//       </div>
//       <div className="para">
//         <p>Projects I’m currently working on and still improving ✨</p>
//       </div>
//       <div className="out-container">
//         {inProgressProject.map((project, index) => (
//           <div className="styling" key={index}>
//             <div className="flip-card">
//               <div className="flip-card-inner">
//                 <div className="flip-card-front">
//                   <img src={project.img} alt={project.title} />
//                 </div>

//                 <div className="flip-card-back">
//                   <h3>{project.title}</h3>
//                   <p> {project.info} </p>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <h4>{project.title} </h4>
//               <p> {project.role}</p>
//               <div className="progress-bar">
//                 <div
//                   className="progress"
//                   style={{ width: `${project.progress}%` }}></div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* <div className="btn">
//         <button> More</button>
//       </div> */}
//     </>
//   );
// }

export default Projects;
