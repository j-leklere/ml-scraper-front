import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faRightFromBracket,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="header">
      <div>
        <FontAwesomeIcon className="header-icon" icon={faUser} />
        <h2>Benjamín Sanchez</h2>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">
              <FontAwesomeIcon className="header-icon" icon={faMagnifyingGlass} />
              <h3>Buscar</h3>
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon className="header-icon header-icon_saved" icon={faBookmark} />
              <h3>Guardados</h3>
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon
                className="header-icon header-icon_logout"
                icon={faRightFromBracket}
              />
              <h3>Cerrar Sesión</h3>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
