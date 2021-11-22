import "./styles.css";
import { ReactComponent as LinkedinIcon } from "./linkedin.svg";

function Footer() {
  return (
    <footer className="main-footer">
      App desenvolvido por Axel Douglas, Siga-me nas redes sociais:
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/axel-douglas-405251191/"
          target="_new"
        >
          <LinkedinIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
