const Projects = (props) => {
  return (
    <div>
      <div className="perofile-info">
        <div className="profile-image">
          <img className="personal-img" src="../profile.png" alt="Haleh" />
        </div>
        <div className="profile-description">
          <h3>Haleh Bozorgnia</h3>
          <h2>FullStack Developer</h2>
        </div>
      </div>

      <div className="project-info">
        <div className="project1">
          <div className="project-img">
            <img className="personal-img" src="../project1.png" alt="Haleh" />
          </div>
          <div className="project-dec">
            <h2>Book Finder </h2>

            <a href="https://github.com/Haleh-Bozorgnia/project1">
              <h3>Github Link</h3>
            </a>

            <a href="https://project1-five-swart.vercel.app/">
              <h3>Deployed Site</h3>
            </a>
          </div>
        </div>

        <div className="project2">
          <div className="project-img">
            <img className="personal-img" src="../project2.png" alt="Haleh" />
          </div>
          <div className="project-dec">
            <h2>Expense Management </h2>

            <a href="https://github.com/Haleh-Bozorgnia/ExpenseManagement">
              <h3>Github Link</h3>
            </a>

            <a href="https://expensesmanagement.onrender.com/">
              <h3>Deployed Site</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
