import { Link } from "react-router-dom";
import shoesanctuary from "./ssantuary.JPG"
import workasana from "./workasana.JPG"
import anvaya from "./anvaya.JPG"
import portfolio from "./portfolio.JPG"
function Projects() {
 
  return (
    <section className="py-5" id="projects">
      <div className="py-5 container">
        <div className="mb-5">
          <h2 className="display-4 fw-bold">Projects</h2>
          <p className="fs-5 text-secondary">Creating practical solutions for real-world challenges</p>
          <div
              className="bg-success mb-4"
              style={{ height: "3px", width: "100px" }}
            ></div>
        </div>
        <div className="row g-4">
<div className="col-md-4" >
  <div className="card bg-light  h-100 border-0 shadow-sm project">
    <div className="position-relative">
      <img src={shoesanctuary} alt="shoeSanctuary" className="card-img-top" />
    </div>

<div className="card-body p-4">
  <h4 className="card-title fw-bold">ShoeSanctuary</h4>
  <p className="card-text text-muted">ShoeSanctuary is simple website showcasing collection of shoes. This website build with using full-stack technologies that showcase both frontend and backend expertise, its key features like product browsing, shopping cart management, address management, user profile management, checkout, filter product by price & rate & category and wishlist management.</p>

<div className="mb-3">
<span  className="badge text-bg-secondary me-1 mb-1">
                  JavaScript
                </span>
<span  className="badge text-bg-secondary me-1 mb-1">
                  React
                </span>
<span  className="badge text-bg-secondary me-1 mb-1">
                  Redux Toolkit
                </span>
<span  className="badge text-bg-secondary me-1 mb-1">
                  Express.js
                </span>
<span  className="badge text-bg-secondary me-1 mb-1">
                  MongoDB
                </span>
<span  className="badge text-bg-secondary me-1 mb-1">
                  React-router
                </span>
<span  className="badge text-bg-secondary me-1 mb-1">
                  Bootstrap
                </span>
<span  className="badge text-bg-secondary me-1 mb-1">
                  Git
                </span>
</div>
<div className="d-flex gap-2">
 <Link
                  to="https://shoe-santuary-rekhakumari.vercel.app/"
                  className="btn btn-success "
                  target="_blank"
                >
                  View Demo
                </Link>{" "}
                <Link
                  to="https://github.com/Rekhakumari28/ShoeSantuary-frontend-rekhakumari"
                  target="_blank"
                  className="btn btn-outline-secondary"
                >
                  Source Code
                </Link>
</div>
  </div></div>
</div>
<div className="col-md-4" >
  <div className="card bg-light  h-100 border-0 shadow-sm project">
    <div className="position-relative">
      <img src={workasana} alt="workasana" className="card-img-top" />
    </div>
<div className="card-body p-4">
  <h4 className="card-title fw-bold">Workasana</h4>
  <p className="card-text text-muted">Workasana is a task management and team collaboration tool where users can create projects, assign tasks to teams and owners, set deadlines, and organize work using tags. With a user-friendly interface powered by React.   it supports authentication, dynamic filtering, URL-based queries, and reporting features to treak task, progress and team productivity.</p>

<div className="mb-3">
<span  className="badge text-bg-secondary me-1 mb-1">
                  JavaScript
                </span>
<span  className="badge text-bg-secondary me-1 mb-1">
                  React
                </span>
<span  className="badge text-bg-secondary me-1 mb-1">
                  Redux Toolkit
                </span>
<span  className="badge text-bg-secondary me-1 mb-1">
                  Express.js
                </span>
<span  className="badge text-bg-secondary me-1 mb-1">
                  MongoDB
                </span>
<span  className="badge text-bg-secondary me-1 mb-1">
                  React-router
                </span>
<span  className="badge text-bg-secondary me-1 mb-1">
                  Bootstrap
                </span>
<span  className="badge text-bg-secondary me-1 mb-1">
                  Git
                </span>
</div>
<div className="d-flex gap-2"> 
 <Link
                  to="https://workasana-frontend-five.vercel.app/"
                  className="btn btn-success "
                  target="_blank"
                >
                  View Demo
                </Link>{" "}
                <Link
                  to="https://github.com/Rekhakumari28/Workasana_frontend"
                  target="_blank"
                  className="btn btn-outline-secondary"
                >
                  Source Code
                </Link>
</div>
  </div></div>
</div>
<div className="col-md-4">
  <div className="card bg-light  h-100 border-0 shadow-sm project">
    <div className="position-relative">
      <img src={anvaya} alt="anvaya" className="card-img-top" />
    </div>
<div className="card-body p-4">
  <h4 className="card-title fw-bold">Anvaya</h4>
  <p className="card-text text-muted">The Anvaya CRM app will focus on lead management with defined steps for each lead's lifecycle. We will assign sales agents to leads and allow users to add comments or updates to each lead. key features including sales agent assignment, lead stage tracking, and collaborative commenting for enhanced sales team coordination.</p>

<div className="mb-3"> 
 <span  className="badge text-bg-secondary me-1 mb-1">
                  JavaScript
                </span>
 <span  className="badge text-bg-secondary me-1 mb-1">
                  React
                </span>
 <span  className="badge text-bg-secondary me-1 mb-1">
                  Redux Toolkit
                </span>
 <span  className="badge text-bg-secondary me-1 mb-1">
                  HTML
                </span>
 <span  className="badge text-bg-secondary me-1 mb-1">
                  Express.js
                </span>
 <span  className="badge text-bg-secondary me-1 mb-1">
                  MongoDB
                </span>
 <span  className="badge text-bg-secondary me-1 mb-1">
                  React-router
                </span>
 <span  className="badge text-bg-secondary me-1 mb-1">
                  Bootstrap
                </span>
 <span  className="badge text-bg-secondary me-1 mb-1">
                  Git
                </span>
</div>
<div className="d-flex gap-2">
 <Link
                  to="https://anvaya-frontend.vercel.app/"
                  className="btn btn-success "
                  target="_blank"
                >
                  View Demo
                </Link>{" "}
                <Link
                  to="https://github.com/Rekhakumari28/Anvaya_frontend"
                  target="_blank"
                  className="btn btn-outline-secondary"
                >
                  Source Code
                </Link>
</div>
  </div></div>
</div>
<div className="col-md-4" >   
  <div className="card bg-light  h-100 border-0 shadow-sm project">
    <div className="position-relative">
      <img src={portfolio} alt="shoeSanctuary" className="card-img-top" />
    </div>
<div className="card-body p-4">
  <h4 className="card-title fw-bold">MyPortfolio</h4>
  <p className="card-text text-muted">This is my portfolio website . It includes informations about my works and me. It includes all my project links. This is created by using react js. It contains all the fetures such as hero image introduction section, project listing, technologies listing, in footer it contains github link, linkdin link, and resume link.</p>

<div className="mb-3">
 <span className="badge text-bg-secondary me-1 mb-1">
                  Javascript
                </span>
 <span className="badge text-bg-secondary me-1 mb-1">
                  React
                </span>
 <span className="badge text-bg-secondary me-1 mb-1">
                  Bootstrap
                </span>
 <span className="badge text-bg-secondary me-1 mb-1">
                  Git
                </span>
</div>
<div className="d-flex gap-2">
 <Link
                  to="https://rekha-portfolio-eifv.vercel.app/"
                  className="btn btn-success "
                  target="_blank"
                >
                  View Demo
                </Link>{" "}
                <Link
                  to="https://github.com/Rekhakumari28/rekha-portfolio"
                  target="_blank"
                  className="btn btn-outline-secondary"
                >
                  Source Code
                </Link>
</div>
  </div></div>
</div>
        </div>
      </div>
     
     </section>
  );
}
export default Projects;
