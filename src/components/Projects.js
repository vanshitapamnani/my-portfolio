import { useEffect, useState } from "react";
import "../styles/project.css";
import PasswordModal from "./PasswordModal";

function Projects({ handleNext }) {
  const [showAll, setShowAll] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProject, setEditingProject] = useState(null);
  const [base64Image, setBase64Image] = useState("");
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  //DISPLAYING PROJECT ON RENDERING

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        const res = await fetch(
          "https://portfolio-backend-3-hm5b.onrender.com/api/projects",
        );
        const data = await res.json();
        console.log("FETCHED PROJECTS : ", data);
        setProjects(data);
      } catch (err) {
        console.error("ERROR IN FETCHING PROJECTS : ", err);
      } finally {
        setLoading(false);
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
  function handleEdit(project) {
    setEditingProject(project);
    setShowForm(true);
  }

  //DELETING PROJECT

  async function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project ?",
    );
    if (!confirmDelete) return;
    try {
      const res = await fetch(
        `https://portfolio-backend-3-hm5b.onrender.com/api/projects/${id}`,

        {
          method: "DELETE",
        },
      );
      console.log("Deleting project with ID:", id);
      if (!res.ok) throw new Error(`Failed to delete : ${res.status}`);
      setProjects((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Error in deleting project:", err);
    }
  }

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

      {loading && (
        <div className="loading-container">
          <p>Loading Projects...</p>
        </div>
      )}
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
                <button
                  className="action-btn1"
                  onClick={() => {
                    setPendingAction(() => () => handleDelete(project._id));
                    setShowAuthModal(true);
                  }}>
                  🗑️
                </button>
                <button
                  className="action-btn2"
                  onClick={() => {
                    setPendingAction(() => () => handleEdit(project));
                    setShowAuthModal(true);
                  }}>
                  ✏️
                </button>
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
          <button
            onClick={() => {
              setPendingAction(() => () => {
                setShowForm(!showForm);
                setEditingProject(null);
                setBase64Image("");
              });
              setShowAuthModal(true);
            }}>
            {showForm ? "Cancel" : "Add New Project"}
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
                //EDITING THE PROJECT
                if (editingProject) {
                  const res = await fetch(
                    `https://portfolio-backend-3-hm5b.onrender.com/api/projects/${editingProject._id}`,
                    {
                      method: "PUT",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(newProject),
                    },
                  );

                  const data = await res.json();
                  setProjects((prev) =>
                    prev.map((p) =>
                      p._id === editingProject._id ? data.project : p,
                    ),
                  );
                } else {
                  const res = await fetch(
                    "https://portfolio-backend-3-hm5b.onrender.com/api/projects",
                    {
                      method: "POST",
                      headers: {
                        "content-type": "application/json",
                      },
                      body: JSON.stringify(newProject),
                    },
                  );
                  const data = await res.json();
                  console.log(data);
                  setProjects((prev) => [...prev, data.project]);
                }
                e.target.reset();
                setBase64Image("");
                setEditingProject(null);
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
            <input
              type="text"
              name="title"
              placeholder="Title"
              defaultValue={editingProject?.title || ""}
              required
            />
            <label> Project Category:</label>
            <input
              type="text"
              name="role"
              placeholder="Category"
              defaultValue={editingProject?.role || ""}
              required
            />
            <label> Project Info:</label>
            <input
              type="text"
              name="info"
              placeholder="Short Info"
              defaultValue={editingProject?.info || ""}
              required
            />
            <label> Project Link:</label>
            <input
              type="text"
              name="link"
              placeholder="Link (GitHub Repo)"
              defaultValue={editingProject?.link || ""}
              required
            />

            <label> Status :</label>
            <select name="stage" defaultValue={editingProject?.stage || ""}>
              <option value="Completed"> Completed</option>
              <option value="In-Progress"> In Progress</option>
            </select>

            <label> Progress % : </label>
            <input
              type="number"
              name="progress"
              defaultValue={editingProject?.progress || "Completed"}
              placeholder="0-100"
              min="0"
              max="100"
            />

            <button
              type="submit"
              style={{ backgroundColor: "black" }}
              onClick={saveClick}>
              {editingProject ? "Update Project" : "Save Project"}
            </button>
          </form>
        )}
      </div>

      {/* {showForm || !showAll || (!showAll && <InProgress />)} */}
      {/* <InProgress /> */}

      <div className="button-container">
        <button onClick={handleNext}>Next </button>
      </div>

      {showAuthModal && (
        <PasswordModal
          onClose={() => setShowAuthModal(false)}
          onSuccess={() => {
            pendingAction?.();
            setPendingAction(null);
          }}
        />
      )}
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
