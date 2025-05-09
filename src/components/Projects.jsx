import { Link } from "react-router-dom";

function Projects(){
return(
    <section className="p-4 section ow" id="projects">
    <h2 className="text-green py-3">My Projects</h2>
    <div className="row">
      <div className="col-md-4  my-2">
        <div className="card  ">                  
          <div className="card-body">
          <h3 className="card-title text-secondary ">ShoeSanctuary</h3>
            <p>
              An e-commerce website developed using full-stack techniques
              that showcase both frontend and backend expertise, its key
              features like product browsing, shopping cart management,
              address management, user profile management, checkout, filter
              product by price & rate & category and wishlist management.
            </p>
            <p>
              {" "}
              <span className="badge rounded-pill text-bg-secondary ms-1">
                JavaScript
              </span>
              <span className="badge rounded-pill text-bg-secondary ms-1">
                React
              </span>
              <span className="badge rounded-pill text-bg-secondary ms-1">
                Express.js
              </span>
              <span className="badge rounded-pill text-bg-secondary ms-1">
                Axios
              </span>
              <span className="badge rounded-pill text-bg-secondary ms-1">
                Redux Toolkit
              </span>{" "}
              <span className="badge rounded-pill text-bg-secondary ms-1">
                MongoDB
              </span>
              <span className="badge rounded-pill text-bg-secondary ms-1">
                React-router
              </span>
              <span className="badge rounded-pill text-bg-secondary ms-1">
                Bootstrap
              </span>
              <span className="badge rounded-pill text-bg-secondary ms-1">
                Git
              </span>
            </p>
            <p className="pt-3">              
              <Link to="https://shoe-santuary-rekhakumari.vercel.app/" className="link link-primary text-white" target="_blank">
                View Demo
              </Link>{" "}
              <Link to="https://github.com/Rekhakumari28/ShoeSantuary-frontend-rekhakumari" target="_blank" className="link link-secondary">
                Source Code
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4  my-2">
        <div className="card ">
         <div className="card-body">
         <h3 className="card-title text-secondary">Workasana</h3>
            <p>
              Workasana is a task management and team collaboration tool
              where users can create projects, assign tasks to teams and
              owners, set deadlines, and organize work using tags. it
              supports authentication, dynamic filtering, URL-based queries,
              and reporting features to treak task, progress and team
              productivity.
            </p>
            <p>
             
              <span className="badge rounded-pill text-bg-secondary ms-1">
                REST APIs
              </span>
              <span className="badge rounded-pill text-bg-secondary ms-1">
                React
              </span>
              <span className="badge rounded-pill text-bg-secondary ms-1">
                Express.js
              </span>
              <span className="badge rounded-pill text-bg-secondary ms-1">
                Axios
              </span>
              <span className="badge rounded-pill text-bg-secondary ms-1">
                Redux Thunk
              </span>{" "}
              <span className="badge rounded-pill text-bg-secondary ms-1">
                MongoDB
              </span>
              <span className="badge rounded-pill text-bg-secondary ms-1">
                React Toolkit
              </span>
              <span className="badge rounded-pill text-bg-secondary ms-1">
                HTML{" "}
              </span>
              <span className="badge rounded-pill text-bg-secondary ms-1">
                Bootstrap{" "}
              </span>
            </p>
            <p className="pt-3">
              {" "}
              <Link to="https://workasana-frontend-five.vercel.app/" className="link link-primary text-white" target="_blank">
                View Demo
              </Link>{" "}
              <Link to="https://github.com/Rekhakumari28/Workasana_frontend" target="_blank" className="link link-secondary">
                Source Code
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4  my-2">
        <div className="card ">  
        <div className="card-body">
          <h3 className="card-title text-secondary">Anvaya</h3>
            <p>
            The Anvaya CRM app will focus on lead management with defined steps for each lead's lifecycle.
             We will assign sales agents to leads and allow users to add comments or updates to each lead.
            </p>
            <p>
              {" "}
              <span className="badge rounded-pill text-bg-secondary ms-1">
                REST APIs
              </span>
              <span className="badge rounded-pill text-bg-secondary ms-1">
                React
              </span>
              <span className="badge rounded-pill text-bg-secondary ms-1">
                Express.js
              </span>
              <span className="badge rounded-pill text-bg-secondary ms-1">
                Axios
              </span>
              <span className="badge rounded-pill text-bg-secondary ms-1">
                Redux Thunk
              </span>{" "}
              <span className="badge rounded-pill text-bg-secondary ms-1">
                MongoDB
              </span>
              <span className="badge rounded-pill text-bg-secondary ms-1">
                React Toolkit
              </span>
              <span className="badge rounded-pill text-bg-secondary ms-1">
                HTML{" "}
              </span>
              <span className="badge rounded-pill text-bg-secondary ms-1">
                Bootstrap{" "}
              </span>
            </p>
            <p className="pt-3">
              {" "}
              <Link to="https://anvaya-frontend.vercel.app/" className="link link-primary text-white" target="_blank">
                View Demo
              </Link>{" "}
              <Link to="https://github.com/Rekhakumari28/Anvaya_frontend" target="_blank" className="link link-secondary">
                Source Code
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
}
export default Projects;