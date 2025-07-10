import '../components/style/project.css';


const projects = [
  {
    name: "Portfolio Website",
    description: "A personal website to showcase my projects and skills.",
    image: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Food Ordering App",
    description: "A React-based app with cart and filtering features.",
    image: "https://images.unsplash.com/photo-1578960281840-cb36759fb109?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Weather Dashboard",
    description: "Fetches real-time weather using a public API.",
    image: "https://images.unsplash.com/photo-1705077031869-51b60754302a?q=80&w=1109&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <img src={proj.image} alt={proj.name} className="project-image" />
            <h3>{proj.name}</h3>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
