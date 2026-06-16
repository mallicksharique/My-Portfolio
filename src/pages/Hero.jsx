import "../css/Hero.css";
import profile from '../Images/ProfilePhoto.jpg'
import { Link } from "react-router";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';



const Hero = () => {

  return (
    <><section className="hero" id="home">
      
      <div className="hero-content">
        <h1> Hello, I'm <span className="highlight">Md Sharique Alam</span>
</h1>

        <TypeAnimation
  sequence={[
    'Frontend Developer',
    2000,
    'React Developer',
    2000,
    'JavaScript Developer',
    2000,
    'Former Pega Developer',
    2000,
    'Content Creator',
    2000,
  ]}
  wrapper="h2"
  speed={60}
  repeat={Infinity}
  className="typing-text"
/>

        <p>
I build responsive and user-friendly web applications using React, JavaScript, HTML, CSS, and Bootstrap. Previously worked as a Pega Developer with 1 year of professional experience.
        </p>

        <div className="hero-buttons">
  <div className="resume-dropdown">
    <button className="btn">Download Resume ▼</button>

    <div className="dropdown-content">
      <a href="/Md_Sharique_Alam_React_Resume.pdf" download>
      React Resume
       </a>

    <a href="PegaResume.pdf" download>
      Pega Resume
    </a>
  </div>
</div>
         <Link to="/contact"><button >Contact Me</button></Link>
        </div>
        <div className="hero-icon"> 
          <a href="https://www.linkedin.com/in/md-sharique-alam-dev/" target="_blank"> <FaLinkedin /></a>
          <a href="https://github.com/mallicksharique" target="_blank"><SiGithub /></a>
          <a href="https://www.youtube.com/@BeardYatri" target="_blank"> <FaYoutube /></a>
          </div>
      </div>

      

    <div className="hero-image">
        <img src={profile} alt="" />
     </div>
      

    </section>
   </>
    
  );
};

export default Hero;