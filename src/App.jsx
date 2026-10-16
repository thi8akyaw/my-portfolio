import { FaGithub } from 'react-icons/fa'
import './App.css'

function App() {
return (
<div>
<nav>
  <h2>My Portfolio</h2>

  <div className="nav-links">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#education">Education</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </div>

  <a
    href="https://github.com/thi8akyaw"
    target="_blank"
    rel="noopener noreferrer"
    className="github-icon"
  >
    <FaGithub />
  </a>
</nav>
  <section id="home" className="hero">
    <img
  src="/images/profile.jpg"
  alt="My Profile"
  className="profile-photo"
/>
    <p>Hello, I'm</p>
    <h1>Thi Ha Kyaw</h1>
    <h3>Computer Science Student</h3>
    <p>Welcome to my personal portfolio website.</p>
   
    <a href="/thihakyaw_cv.pdf" download 
    className="cv-btn">
      <i  className="fa-sokid fa-download"></i>
  Download Resume
</a>
  </section>

  <section id="about">
    <h2>About Me</h2>
    <p>
      I am a final-year Computer Science student at the University of Computer Studies, Mandalay. 
      I am interested in technology, IT support, and software development. 
      I am eager to learn new skills, gain practical experience, and improve my technical knowledge.
    </p>
  </section>

  <section id="education">
  <h2>Education</h2>
  <h3>
    🎓 Bachelor of Computer Science (B.C.Sc)
  </h3>
  <p>2017 - Present</p>
  <p>University of Computer Studies, Mandalay</p>
  <p>Final Year Student</p>
</section>

  <section id="skills">
    <h2>My Skills</h2>

  <div className="skills">
    <div className="skill">
      <i className="devicon-html5-plain colored"></i>
      <span>HTML</span>
    </div>

    <div className="skill">
      <i className="devicon-css3-plain colored"></i>
      <span>CSS</span>
    </div>

    <div className="skill">
      <i className="devicon-javascript-plain colored"></i>
      <span>JavaScript</span>
    </div>

    <div className="skill">
      <i className="devicon-react-original colored"></i>
      <span>React</span>
    </div>
  </div>
</section>
  

  <section id="projects">
  <h2>My Projects</h2>  <div className="project-card">
    <h3>Personal Portfolio</h3>
    <p>A personal website built with React and CSS.</p>
  </div>  <div className="project-card">
    <h3>HR Management System</h3>
    <p>A student project for managing employee information.</p>
  </div>
</section>

  <section id="contact">
    <h2>Contact Me</h2>
    <p className="contact-item">
  <span style={{ color: "#38bdf8", marginRight: "8px" }}>
    &#9993;
  </span>
  Email:{" "}
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=thethk2001@gmail.com"
    target="_blank"
    rel="noreferrer"
  >
    thethk2001@gmail.com
  </a>
</p>

<p className="contact-item">
  Phone:{" "}
  <a href="tel:+959983579519">
    09983579519
  </a>
</p>

<p className="contact-item">
  <span style={{ color: "#000000", marginRight: "8px" }}>
    📍
  </span>
  Address: Mandalay, Myanmar
</p>
      <div className="social-links">
  <hr className="social-line" />

  <h3>Other Ways to Reach Me</h3>

  <hr className="social-line" />

 < p className="social-item">
  Telegram:{" "}
  <a href="https://t.me/thi8akyaw" target="_blank" rel="noreferrer">
    Contact me on Telegram
  </a>
</p>

<p className="social-item">
  Facebook:{" "}
  <a href="https://www.facebook.com/thethk2001" target="_blank" rel="noreferrer">
    Visit my Facebook
  </a>
</p>
</div>
  </section>
  <footer>Thi Ha Kyaw © 2026 Portfolio</footer>
</div>

)
}

export default App