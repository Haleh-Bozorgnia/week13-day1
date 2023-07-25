const Header = (props) => {
    return (
      <div className="Header">
        <h1>My Profile </h1>
        <navbar className="navigation">
          <a
            className="profile-link"
            href="https://linkedin.com/in/haleh-bozorgnia/"
          >
            My linkedIn
          </a>
          <a className="profile-link" href="https://github.com/Haleh-Bozorgnia">
            My github
          </a>
        </navbar>
      </div>
    );
}
export default Header