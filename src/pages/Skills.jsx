import Navbar from "../components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Footer from "../components/Footer";
import "../css/skill.css"


const Skills = () => {
  return (
    <>
      <Navbar />
      
  <div className="skills-container">
        <h1 className="skills-header">Technical Skills</h1>

      <div className="skills-section">
    <div className="skill-category">
    <h2>Web Technologies</h2>
    <div className="skill-tags">
      <span>HTML5</span>
      <span>CSS3</span>
      <span>JavaScript</span>
      <span>Bootstrap</span>
      <span>React</span>
      <span>Redux</span>
    </div>
  </div>

  <div className="skill-category">
    <h2>Pega Technologies</h2>
    <div className="skill-tags">
      <span>Pega</span>
      <span>Pega PRPC</span>
      <span>Case Management</span>
      <span>Flows & Flow Actions</span>
      <span>Decision Tables</span>
      <span>REST API Integration</span>
    </div>
  </div>

  <div className="skill-category">
    <h2>Database</h2>
    <div className="skill-tags">
      <span>MySQL</span>
      <span>DBMS</span>
    </div>
  </div>

  <div className="skill-category">
    <h2>Tools & IDEs</h2>
    <div className="skill-tags">
     <span>Jira</span>
      <span>VS Code</span>
      <span>GitHub</span>
      <span>Postman</span>
      <span>NPM</span>
      <span>Canva</span>
    </div>
  </div>

</div>
  </div>
      <Footer/>
      
    </>
    
  );
};

export default Skills;