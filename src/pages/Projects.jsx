import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../css/project.css"

const Projects = () => {
  return (
    <>
  <Navbar />
  <div className="projects-container">
  <h1 className="section-title">My Projects</h1>
    {/* Project 1 */}

  <div className="project-card">
  <h2>Personal Portfolio </h2>

  <p className="project-date">
    2026 - Present
  </p>

  <p className="project-description">
    Designed and developed a responsive personal portfolio website using
    React.js to showcase my skills, professional experience, projects,
    and contact information. Implemented React Router for navigation and
    modern UI/UX design principles for an engaging user experience.
  </p>

  <div className="project-highlights">
    <h3>Key Features</h3>

    <ul>
      <li>Responsive UI</li>
      <li>Dark theme design</li>
      <li>Smooth navigation</li>
      
    </ul>
  </div>
     
 <ul className="project-highlights">
 <h3>Responsibilities</h3>
  <li>Built using React.js and React Router</li>
  <li>Fully responsive across devices</li>
  <li>Component-based architecture</li>
  <li>Modern dark-themed UI design</li>
  <li>Integrated Resume Download functionality</li>
  <li>Showcases Skills, Experience, Projects, and Contact Information</li>
  <li>Deployment on GitHub Pages</li>
</ul>
  <div className="tech-stack">
    <span>React.js</span>
    <span>JavaScript</span>
    <span>CSS</span>
    <span>React Icon</span>
    <span>React Router</span>
    <span>Bootstrap</span>
    <span>GitHub Pages</span>
  </div>
 

  <div className="project-links">
    <a
      href="YOUR_PORTFOLIO_LINK"
      target="_blank"
      rel="noopener noreferrer"
      className="project-btn"
    >
      Live Demo
    </a>

    <a
      href="YOUR_GITHUB_REPO"
      target="_blank"
      rel="noopener noreferrer"
      className="project-btn"
    >
      GitHub
    </a>
    
  </div>
</div>
{/* Project 2*/}

<div className="project-card">
  <h2>Myntra Clone 
    <span>(React E-Commerce Application)</span></h2>

  <p className="project-date">
  May 2026 -June 2026

  </p>

  <p className="project-description">
    Developed a fully responsive e-commerce application inspired by Myntra
    using React.js and Redux Toolkit. Users can browse products, manage
    shopping bags, and view order summaries with real-time state updates.
    Integrated REST APIs for product data and implemented dynamic routing
    for seamless navigation.
  </p>

  <div className="project-highlights">
    <h3>Key Features</h3>

    <ul>
      <li> Product Listing</li>
      <li> Shopping Bag Management</li>
      <li> Redux Toolkit State Management</li>
      <li> React Router Navigation</li>
      <li> REST API Integration</li>
      <li> Loading Spinner During API Fetch</li>
      <li> Dynamic Cart Count</li>
    </ul>
  </div>

  <div className="project-highlights">
    <h3>Responsibilities</h3>

    <ul>
      <li>Created reusable React components.</li>
      <li>Configured Redux Toolkit slices for items, cart, and fetch status.</li>
      <li>Integrated backend APIs using Fetch API.</li>
      <li>Implemented routing and navigation using React Router.</li>
      <li>Developed a responsive UI inspired by Myntra.</li>
    </ul>
  </div>

  <div className="tech-stack">
    <span>React.js</span>
    <span>Redux Toolkit</span>
    <span>React Router</span>
    <span>JavaScript ES6+</span>
    <span>Node.js</span>
    <span>Express.js</span>
    <span>Bootstrap</span>
    <span>CSS3</span>
  </div>



  <div className="project-links">
    <a
      href="https://github.com/mallicksharique/myntra-react-clone"
      target="_blank"
      rel="noopener noreferrer"
      className="project-btn"
    >
      FrontEnd Repo
    </a>
    <a
      href="https://mallicksharique.github.io/myntra-react-clone/"
      target="_blank"
      rel="noopener noreferrer"
      className="project-btn"
    >
      Live Demo
    </a>

  </div>
</div>
   {/* Projet 3*/}

   <div className="project-card">
    <h2>React Social Media App</h2>

    <p className="project-date">
      May 2026
    </p>

    <p className="project-description">
     A responsive Social Media Web Application built using React and Vite, designed to simulate core features of a modern social platform. The project focuses on component-based architecture, state management, and dynamic UI rendering.
    </p>

    <div className="project-highlights">
    <h3>Key Features</h3>

    <ul>
      <li>🧑‍💻 Create, view, and interact with posts</li>
      <li>💬 Comment system (if implemented)</li>
      <li>❤️ Like functionality (state-based interaction)</li>
      <li>📱 Fully responsive UI (mobile + desktop)</li>
      <li>⚡ Fast performance using Vite build tool</li>
      <li>🔁 React Router for multi-page navigation</li>
      <li>🧠 Component-based architecture for scalability</li>
    </ul>
  </div>


    <div className="tech-stack">
      <span>React.js</span>
      <span>Vite</span>
      <span>React Router DOM</span>
      <span>Bootstrap / CSS </span>
      <span>JavaScript (ES6+)</span>
    </div>

      <div className="project-links">
        <a
      href="https://github.com/mallicksharique/React-Social-Media-App"
      target="_blank"
      rel="noopener noreferrer"
      className="project-btn">
      View Repository
    </a>
     </div>
  </div>



    {/* Project 4*/}

  <div className="project-card">
    <h2>Ansar Group Product Page Development</h2>

    <p className="project-date">December 2023</p>

    <p className="project-description">
      Developed a product page for a Qatar-based company by converting
      Figma designs into a fully responsive and interactive web page.
      Ensured pixel-perfect implementation while maintaining
      cross-browser compatibility and responsiveness.
    </p>

    <div className="tech-stack">
      <span>HTML5</span>
      <span>CSS3</span>
      <span>JavaScript</span>
      <span>jQuery</span>
      <span>Figma</span>
    </div>
 
      <div className="project-links">
        <a
      href="https://mallicksharique.github.io/Ansar-Group-Product-Page/"
      target="_blank"
      rel="noopener noreferrer"
      className="project-btn"
    >
      Live Demo
    </a>
    </div>
  </div>

  {/* Project 5 */}
  <div className="project-card">
    <h2>Open Invoice UI</h2>

    <p className="project-date">
      February 2023 – August 2023
    </p>

    <p className="project-description">
      Contributed to the UI development of an open-source invoicing
      platform used for invoice generation, inventory tracking,
      and billing management. Developed responsive user interfaces
      and collaborated on Angular-based frontend components.
    </p>

    <div className="tech-stack">
      <span>Angular</span>
      <span>TypeScript</span>
      <span>Angular Material</span>
      <span>HTML5</span>
      <span>CSS3</span>
    </div>

      <div className="project-links">
        <a
      href="https://bitbucket.org/open-invoice/open-invoiceui/src/master/"
      target="_blank"
      rel="noopener noreferrer"
      className="project-btn"
    >
      View Repository
    </a>
     </div>
  </div>

</div>
      <Footer></Footer>
    </>
  );
};

export default Projects;