import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/about.css";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
      <h1>About Me</h1>

      <p>
        Hi, I'm <strong>Md Sharique Alam</strong>, a passionate Frontend Developer
        with experience in building responsive and user-friendly web applications
        using React.js, JavaScript, HTML, and CSS.
      </p>

      <p>
        I graduated with a B.Tech in Computer Science & Engineering from
        UEM Jaipur in 2022. I have 1 year of professional experience as a
        Pega Developer at Fucient Consulting Services, where I worked on
        enterprise-level applications and workflow automation solutions.
      </p>

      <p>
        Currently, I am focused on Frontend Development and continuously
        improving my skills in React, Redux, and modern web technologies.
        I enjoy creating clean, responsive, and interactive user interfaces.
      </p>

      <p>
        I am actively looking for opportunities as a Frontend Developer
        where I can contribute, learn, and grow as a software professional.
      </p>
    </div>
      <Footer/>
    </>
  );
};

export default About;