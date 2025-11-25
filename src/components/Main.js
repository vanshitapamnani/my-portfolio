import "../styles/main.css";
import { SocialIcon } from "react-social-icons";

function Intro({ handleNext }) {
  return (
    <>
      <div className="profile">
        <img src="image/profile.png" alt="profile" />
        <p className="name">Vanshita Pamnani</p>
        <div className="intro">
          <h3>
            A DEVELOPER WHO LOVES BLENDING LOGIC WITH CREATIVITY. WHEN I'M NOT
            CODING, I'M DESIGNING EXPERIENCES THAT TELL STORIES.
          </h3>
          <p> Code. Design. Create. Repeat. ✨</p>
          <div>
            <p> Fell Free To Connect.</p>
            <div className="info-outer">
              <SocialIcon url="https://github.com/vanshitapamnani" />
              <SocialIcon url="https://www.linkedin.com/in/vanshitapamnani/" />

              <SocialIcon url="www.youtube.com/@vanshita_pamnani" />
              <SocialIcon url="https://discord.com/users/1388935183243284480" />
              <SocialIcon url="https://www.instagram.com/mindful_muncher_/" />
              <SocialIcon url="https://www.reddit.com/user/Calm_Console/ " />
            </div>
          </div>
          {/* Start from here NEXT ...*/}
          <div className="resume-link">
            <a href="resume.pdf" target="_blank">
              Click Here to Open Resume <span>↗</span>
            </a>
          </div>
          <div className="button-container">
            <button onClick={handleNext}>Next </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
