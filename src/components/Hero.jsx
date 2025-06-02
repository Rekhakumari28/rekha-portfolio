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
                I build scalable full-stack web apps with a passion for clean
                code and UX.
              </p>
              <p className="fs-5 fw-normal mb-3">
                I'm passionate about improving user interfaces and experiences,
                particularly making web apps simpler to use.
              </p>
            </div>
            <div className="d-flex gap-3">
              <HashLink className="btn btn-success px-4 py-2 " to="#contact">
                Contact Me
              </HashLink>

              <Link
                className="btn btn-outline-secondary px-4 py-2"
                to="https://docs.google.com/document/d/1QqLFDh2lvwqLQnbq22J-lYElOtAj8z8L/edit?usp=sharing&ouid=116969599386205726941&rtpof=true&sd=true"
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
