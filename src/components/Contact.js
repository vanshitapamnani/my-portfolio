import "../styles/contact.css";

function Contact({ handleNext }) {
  const links = [
    { name: "📩 Email", url: "mailto:pamnanivanshita@gmail.com" },
    { name: "💻 GitHub", url: "https://github.com/vanshitapamnani" },
    {
      name: "🔗 LinkedIn",
      url: "https://www.linkedin.com/in/vanshitapamnani/",
    },
  ];
  return (
    <>
      <div className="contact-outer">
        <div className="contact-inner">
          <div className="contact-heading">
            <h1> Let’s Connect 😄</h1>
            <p>
              Let’s build something exceptional together. If you’re looking for
              a front-end developer who combines clean code with thoughtful
              design, feel free to contact me. Whether it’s a new project,
              collaboration, or a quick question, I’m here to help. Send me a
              message, and I’ll respond at the earliest.
            </p>
          </div>

          {/* <p>📩 Email - pamnanivanshita@gmail.com</p> */}
          {/* <p>🔗 LinkedIn - https://www.linkedin.com/in/vanshitapamnani/ </p>
          <p>💻 GitHub - https://github.com/vanshitapamnani</p> */}
          <div className="contact-links">
            {links.map((link, index) => (
              <a key={index} href={link.url}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="button-container">
        <button onClick={handleNext}>Back to Home</button>
      </div>
    </>
  );
}

export default Contact;
