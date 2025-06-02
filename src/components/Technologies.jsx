function Technologies() {
  const stack = [
    "React JS",
    "Javascript",
    "Bootstrap",
    "Tailwind CSS",
    "HTML",
    "Axios",
    "Redux",
    "JWT",
    "Node JS",
    "Express JS",
    "MongoDB",
    "Rest APIs",
    "MERN Stack",
    "Github",
    "Web Hosting",
    "Vercel",
    "Accessibility",
    // "Python Basic",
  ];
  return (
    <section id="technologies" className="py-5">
      <div className="container py5">
        <div className="mb-5">
          <h2 className="display-4 fw-bold">Technologies</h2>
          <p className="fs-5 text-secondary">
            Technologies and tools I work with
          </p>
          <div
            className="bg-success mb-4"
            style={{ height: "3px", width: "100px" }}
          ></div>
        </div>
        <div className="row ">
          {stack.map((skill, index) => (
            <div key={index} className="col-6 col-lg-3">
              {" "}
              <div className="d-flex  mb-4">
                <span className="fs-5 fw-normal ms-5 ps-3 py-2">{skill}</span>
              </div>{" "}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Technologies;
