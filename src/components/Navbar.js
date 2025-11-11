import "../styles/Navbar.css";

function NavBar({ setSection }) {
  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => setSection("main")}>Home</li>
        <li onClick={() => setSection("about")}>About</li>
        <li onClick={() => setSection("skills")}>Skills</li>
        <li onClick={() => setSection("projects")}>Projects</li>
        <li onClick={() => setSection("contact")}>Contact</li>
      </ul>
    </nav>
  );
}

export default NavBar;
//     <nav className="navbar">
//       <div className="logo">Vanshita</div>
//       <ul className="nav-links">
//         <li>
//           <a href="#home">Home</a>
//         </li>
//         <li>
//           <a href="#about">About</a>
//         </li>
//         <li>
//           <a href="#skills">Skills</a>
//         </li>
//         <li>
//           <a href="#projects">Projects</a>
//         </li>
//         <li>
//           <a href="#contact">Contact</a>
//         </li>
//       </ul>
//     </nav>
//   );
