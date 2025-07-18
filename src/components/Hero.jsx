import { Link } from "react-router-dom";

import { HashLink } from "react-router-hash-link";
export function Hero() {
  return (
    <section id="hero" className=" py-5  ">
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-lg-9">
            <h1 className="display-3 fw-bold mt-5 pt-5">Rekha Kumari Bheel</h1>
            <h2 className="fs-3 fw-normal mb-4 text-secondary">
              Full Stack Developer
            </h2>
            <div
              className="bg-success mb-4"
              style={{ height: "3px", width: "100px" }}
            ></div>
            <div className="mb-4">
              <p className="fs-5 fw-normal mb-2">
                Full-stack developer passionate about crafting modern, intuitive digital experiences.
              </p>
              <p className="fs-5 fw-normal mb-3">
                 Skilled in building scalable, user-centric applications using React, Node.js, and MongoDB.
              </p>
            </div>
            <div className="d-flex gap-3">
              <HashLink className="btn btn-success px-4 py-2 " to="#contact">
                Contact Me
              </HashLink>

              <Link
                className="btn btn-outline-secondary px-4 py-2"
                to="https://docs.google.com/document/d/1Dacmzk0rmjWG4YKb_-fXFP-b76uAv1KPVTAT5bTVk0s/edit?tab=t.0"
                target="_blank"
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
