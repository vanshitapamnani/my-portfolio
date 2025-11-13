import "../styles/skills.css";

function Skills() {
  return (
    <div className="outer-container">
      <div className="inner-container">
        <img src="/image/html5.svg" alt="HTML" />
        <p>HTML</p>
      </div>
      <div className="inner-container">
        <img src="/image/css.svg" alt="CSS" />
        <p>CSS</p>
      </div>
      <div className="inner-container">
        <img src="/image/bootstrap.svg" alt="BOOTSTRAP" />
        <p>BOOTSTRAP</p>
      </div>
      <div className="inner-container">
        <img src="/image/javascript.svg" alt="JAVASCRIPT" />
        <p>JAVASCRIPT</p>
      </div>

      <div className="inner-container">
        <img src="/image/react.svg" alt="REACT" />
        <p>REACT</p>
      </div>
    </div>
  );
}

export default Skills;
