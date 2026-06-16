import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "../css/experience.css"
import fLogo from '../images/fucient_logo.jpg'

const Experience=()=>{
  return(
<> 
 <Navbar/>
  <div className="experience-container">
    <h1 className="section-title">My Experience</h1>
   <div className="card text-center">
     <div className="card-header">Fucient Consulting <img src={fLogo} alt="fucient logo" /></div>
     <div className="card-body">
     <h5 className="card-title">Pega Developer</h5>
     <p className="card-text"> 
      <div className="duration">Feb 2025 - Jan 2026</ div>
       <p className="location">📍Pune, Maharashtra, India</p>
     <b>Fucient Consulting</b>  is a technology consulting firm specializing in  digital transformation using low-code no-code platforms.</p>
     <ul className="card-list">
       <li>Worked on end-to-end Pega application development, including requirement analysis, design, development, testing, and deployment.</li>
       <li>Designed and optimized case life cycles, workflows, and business rules to improve process efficiency and scalability.</li>
       <li>Implemented REST API integrations to enable seamless communication between Pega and external systems.</li>
       <li>Automated complex business processes using Pega low-code features, reducing manual intervention and turnaround time.</li>
       <li>Collaborated closely with cross-functional teams (Business Analysts, QA, and stakeholders) to deliver high-quality, scalable solutions in Agile sprints.</li>
       <li>Improved overall application performance through effective rule design and data page optimization.</li>
       <li>Reduced manual effort and processing time by automating key business workflows.</li>
       <li>Successfully delivered multiple Pega enhancements within sprint timelines while adhering to Pega guardrails and best practices.</li>
      </ul>
     <div className="tech-section">
       <h3 className="tech-title">Technologies & Skills Used</h3>
       <div className="tech-stack">
         <span>Pega PRPC</span>
         <span>Case Management</span>
         <span>Flows & Flow Actions</span>
         <span>Decision Tables</span>
         <span>Data Pages</span>
         <span>REST API Integration</span>
         <span>Low-Code Development</span>
        </div>
      </div>

      
     </div>
      <div className="card-footer text-body-secondary"></div>
   </div>


  </div><Footer/>
</>
)

}
export default Experience;