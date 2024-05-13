import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faRightFromBracket,
  faBoxesStacked,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark, faUser } from "@fortawesome/free-regular-svg-icons";

export default function Header() {
  return (
    <header className="header">
      <div className="header-user">
        <FontAwesomeIcon
          className="header-icon header-icon_user"
          icon={faUser}
        />
        <h2>Benjamín Sanchez</h2>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">
              <div className="header-icon_container">
                <FontAwesomeIcon
                  className="header-icon"
                  icon={faMagnifyingGlass}
                />
              </div>
              <h3>Buscar</h3>
            </a>
          </li>
          <li>
            <a href="/">
              <div className="header-icon_container">
                <FontAwesomeIcon
                  className="header-icon header-icon_products"
                  icon={faBoxesStacked}
                />
              </div>
              <h3>Productos</h3>
            </a>
          </li>
          <li>
            <a href="/">
              <div className="header-icon_container">
                <FontAwesomeIcon
                  className="header-icon header-icon_saved"
                  icon={faBookmark}
                />
              </div>
              <h3>Guardados</h3> {/* Tanto las busquedas como los productos */}
            </a>
          </li>
          <li>
            <a href="/">
              <div className="header-icon_container">
                <FontAwesomeIcon
                  className="header-icon header-icon_logout"
                  icon={faRightFromBracket}
                />
              </div>
              <h3>Cerrar Sesión</h3>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
