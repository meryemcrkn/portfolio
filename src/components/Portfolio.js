import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "C# ile Pizza Sipariş Uygulaması",
      description: "C# forms kullanarak istenilen özelliklerde sipariş oluşturma.",
      image: "/images/project1.jpg",
      technologies: ["C#", "Forms"],
      github: "https://github.com/meryemcrkn/C--ile-pizza-siparis",
      demo: "https://github.com/meryemcrkn/C--ile-pizza-siparis"
    },
    {
      id: 2,
      title: "Web Tabanlı Portfolyo",
      description: "React ve modern web teknolojileri kullanılarak geliştirilmiş kişisel portfolyo sitesi.",
      image: "/images/project2.jpg",
      technologies: ["React", "JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/meryemcrkn/portfolio",
      demo: "https://github.com/meryemcrkn/portfolio"
    },
    {
      id: 3,
      title: "Mobil Sürüş Asistanı",
      description: "React Native + Expo ile geliştirilmiş mobil uygulama.",
      image: "/images/project3.jpg",
      technologies: ["React Native", "JavaScript", "Firebase"],
      github: "https://github.com/meryemcrkn/mobil_drive_asistant",
      demo: "https://github.com/meryemcrkn/mobil_drive_asistant"
    }
  ];

  return (
    <div className="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2>Projelerim</h2>
          <p>Geliştirdiğim bazı projeler ve çalışmalar</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="technology-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
