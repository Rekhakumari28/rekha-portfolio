import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`py-3 fixed-top ${scrolled ? "bg-white shadow-sm" : ""}`}>
      <div className="container d-flex justify-content-between align-items-center ">
        <div className="fw-bold fs-5">
          <HashLink to="#hero" className="text-decoration-none text-black">
            <span className="text-success">{"<>"}</span> Rekha Kumari Bheel
          </HashLink>
        </div>
         <input type="checkbox" id="nav-toggle" className="d-none" />
      <label htmlFor="nav-toggle" className="d-lg-none fs-3">
        &#9776;
      </label>

      <ul className="d-none d-lg-flex gap-4 mb-0 list-unstyled">
        <li>
          <HashLink className="text-decoration-none text-dark" to="#hero">
           Home
          </HashLink>
        </li>
       
        <li>
          <HashLink className="text-decoration-none text-dark" to="#projects">
            Projects
          </HashLink>
        </li>
         <li>
          <HashLink className="text-decoration-none text-dark" to="#technologies">
            Technologies
          </HashLink>
        </li>
        <li>
          <HashLink className="text-decoration-none text-dark" to="#contact">
            Contact
          </HashLink>
        </li>
      </ul>

      </div>

     
      {scrolled ? "" : <hr />}
    </nav>
  );
}
