import "../styles/main.css";

function Intro() {
  return (
    <>
      <div className="profile">
        <img src="/image/profile.png" alt="profile" />
        <p className="name">Vanshita Pamnani</p>
        <div className="intro">
          <h3>
            A DEVELOPER WHO LOVES BLENDING LOGIC WITH CREATIVITY. WHEN I'M NOT
            CODING, I'M DESIGNING EXPERIENCES THAT TELL STORIES.
          </h3>
          <p> Code. Design. Create. Repeat. ✨</p>
          <div className="button-container">
            <button>Contact Me </button>
            <button>About</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
