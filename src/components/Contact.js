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
            <h1> Want To Connect ?</h1>
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
