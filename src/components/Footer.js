import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Import the LinkedIn icon
import { faGithub } from "@fortawesome/free-brands-svg-icons";



const Footer = (props) => {
  return (
    <div className="footer">
      <a
        className="footer-link"
        href="https://linkedin.com/in/haleh-bozorgnia/"
      >
        <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
      </a>
      <a className="footer-link" href="https://github.com/Haleh-Bozorgnia">
        <FontAwesomeIcon className="social-icon" icon={faGithub} />
      </a>
    </div>
  );
};

export default Footer;
