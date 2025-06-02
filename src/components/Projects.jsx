import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "ShoeSanctuary",
      description:
        "ShoeSanctuary is simple website showcasing collection of shoes. This website build with using full-stack technologies that showcase both frontend and backend expertise, its key features like product browsing, shopping cart management, address management, user profile management, checkout, filter product by price & rate & category and wishlist management.",
      stack: ["JavaScript", "React", "Redux Toolkit", "Express.js", "MongoDB", "React-router", "Bootstrap", "Git"],
      demo_link:"https://shoe-santuary-rekhakumari.vercel.app/",
      code_link:"https://github.com/Rekhakumari28/ShoeSantuary-frontend-rekhakumari"
    },
    {
      id: 2,
      name: "Workasana",
      description:"Workasana is a task management and team collaboration tool where users can create projects, assign tasks to teams and owners, set deadlines, and organize work using tags. With a user-friendly interface powered by React.   it supports authentication, dynamic filtering, URL-based queries, and reporting features to treak task, progress and team productivity.",
      stack:["JavaScript", "React", "Redux Toolkit", "Express.js", "MongoDB", "React-router", "Bootstrap", "Git"],
        demo_link:"https://workasana-frontend-five.vercel.app/",
      code_link:"https://github.com/Rekhakumari28/Workasana_frontend"
    },
     {
      id: 3,
      name: "Anvaya",
      description:"The Anvaya CRM app will focus on lead management with defined steps for each lead's lifecycle. We will assign sales agents to leads and allow users to add comments or updates to each lead. key features including sales agent assignment, lead stage tracking, and collaborative commenting for enhanced sales team coordination.",
      stack:["JavaScript", "React", "Redux Toolkit", "HTML", "Express.js", "MongoDB", "React-router", "Bootstrap", "Git"],
      demo_link:"https://anvaya-frontend.vercel.app/",
      code_link:"https://github.com/Rekhakumari28/Anvaya_frontend"
    },
     {
      id: 4,
      name: "MyPortfolio",
      description:"This is my portfolio website . It includes informations about my works and me. It includes all my project links. This is created by using react js. It contains all the fetures such as hero image introduction section, project listing, technologies listing, in footer it contains github link, linkdin link, and resume link.",
      stack:["Javascript", "React", "Bootstrap", "Git"],
      demo_link:"https://rekha-portfolio-eifv.vercel.app/",
      code_link:"https://github.com/Rekhakumari28/rekha-portfolio"
    }
  ];
  console.log(projects.map(project=>project.name))
  return (
    <section className="p-4 section ow" id="projects">
      <h2 className="text-green py-3">My Projects</h2>
      <div className="row">
      
        {projects.map(project=> <div className="col-md-4 my-2" key={project.id}>
          <div className="rounded bg-white p-3"><h3 className="card-title text-secondary">{project.name}</h3>
            <p >
               {project.description}
              </p>
              <p>
                {project.stack.map((skill, index)=> <span key={index} className="badge rounded-pill text-bg-secondary ms-1">
                  {skill}
                </span> )}
            
              </p>
              <p className="pt-3">
                <Link
                  to={project.demo_link}
                  className="link link-primary text-white"
                  target="_blank"
                >
                  View Demo
                </Link>{" "}
                <Link
                  to={project.code_link}
                  target="_blank"
                  className="link link-secondary"
                >
                  Source Code
                </Link>
              </p>
          </div>
        </div> )}
      
      </div>
    </section>
  );
}
export default Projects;
