import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container py-5">
        <div className="mb-5">
          <h2 className="display-4 fw-bold">Contact</h2>
          <p className="fs-5 text-secondary">
            Open to exciting collaborations—let’s connect
          </p>
          <div
            className="bg-success mb-4"
            style={{ height: "3px", width: "100px" }}
          ></div>
        </div>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="card bg-light text-light h-100 border-0 shadow-sm project p-4">
              <div className="d-flex align-item-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-envelope-fill text-success fs-3 me-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                </svg>
                <h3 className="fs-4 mb-0">Email</h3>
              </div>
              <p className="mb-0 text-muted">rekha.kumari1928@gmail.com</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card bg-light text-light h-100 border-0 shadow-sm project p-4">
              <div className="d-flex align-item-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-envelope-fill text-success fs-3 me-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>

                <h3 className="fs-4 mb-0">
                  <Link
                    target="_blank"
                    className="text-decoration-none text-black"
                    to="https://github.com/Rekhakumari28"
                  >
                    Github
                  </Link>
                </h3>
              </div>
              <p className="mb-0 text-muted">See My Work on GitHub</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card bg-light text-light h-100 border-0 shadow-sm project p-4">
              <div className="d-flex align-item-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-linkedin text-success fs-3 me-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
                <h3 className="fs-4 mb-0">
                  <Link
                    target="_blank"
                    className="text-decoration-none text-black"
                    to="https://www.linkedin.com/in/rekha-gunarat-7b9459279/"
                  >
                    Linkedin
                  </Link>
                </h3>
              </div>
              <p className="mb-0 text-muted">Visit My LinkedIn Profile</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card bg-light text-light h-100 border-0 shadow-sm project p-4">
              <div className="d-flex align-item-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-twitter text-success fs-3 me-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                </svg>
                <h3 className="fs-4 mb-0">
                  <Link
                    target="_blank"
                    className="text-decoration-none text-black"
                    to="https://x.com/RGunarat1928"
                  >
                    Twitter
                  </Link>
                </h3>
              </div>
              <p className="mb-0 text-muted">Connect with Me on Twitter</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
