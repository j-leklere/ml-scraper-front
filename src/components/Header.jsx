import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../store/store";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faBoxesStacked,
  faHome,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const login = useSelector((state) => state.user.login);
  const user = useSelector((state) => state.user.actualUser);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(userActions.logout());
    dispatch(userActions.setActualUser({ id: "", username: "", password: "" }));
  };

  return (
    <>
      <header className="header">
        {!login && (
          <div className="header-user">
            <NavLink
              to="/login"
              className="header-user-login"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#f5f5f5" : "",
                  borderRadius: isActive ? "4px" : "",
                };
              }}
            >
              <FontAwesomeIcon
                className="header-icon header-icon_user"
                icon={faUser}
              />
              <h2>Iniciar Sesión</h2>
            </NavLink>
          </div>
        )}
        {login && (
          <div className="header-user">
            <FontAwesomeIcon
              className="header-icon header-icon_user"
              icon={faUser}
            />
            <h2>{user.username}</h2>
          </div>
        )}
        <nav className="header__nav">
          {login && (
            <NavLink
              to="/"
              className="header__nav-link"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#f5f5f5" : "",
                  borderRadius: isActive ? "4px" : "",
                };
              }}
            >
              <div className="header-icon_container">
                <FontAwesomeIcon className="header-icon" icon={faHome} />
              </div>
              Inicio
            </NavLink>
          )}
          {login && (
            <NavLink
              to="/saved-products"
              className="header__nav-link"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#f5f5f5" : "",
                  borderRadius: isActive ? "4px" : "",
                };
              }}
            >
              <div className="header-icon_container">
                <FontAwesomeIcon
                  className="header-icon header-icon_saved__products"
                  icon={faBoxesStacked}
                />
              </div>
              Productos
            </NavLink>
          )}
          {login && (
            <NavLink
              to="/saved-results"
              className="header__nav-link"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#f5f5f5" : "",
                  borderRadius: isActive ? "4px" : "",
                };
              }}
            >
              <div className="header-icon_container">
                <FontAwesomeIcon
                  className="header-icon header-icon_saved__results"
                  icon={faBookmark}
                />
              </div>
              Guardados
            </NavLink>
          )}
          {login && (
            <NavLink
              to="/saved-searchs"
              className="header__nav-link"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#f5f5f5" : "",
                  borderRadius: isActive ? "4px" : "",
                };
              }}
            >
              <div className="header-icon_container">
                <FontAwesomeIcon
                  className="header-icon header-icon_saved__searchs"
                  icon={faSearch}
                />
              </div>
              Búsquedas
            </NavLink>
          )}
          {/*
          {login && (
            <NavLink
              to="/saved"
              className="header__nav-link"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#f5f5f5" : "",
                  borderRadius: isActive ? "4px" : "",
                };
              }}
            >
              <div className="header-icon_container">
                <FontAwesomeIcon className="header-icon header-icon_saved" icon={faBookmark} />
              </div>
              Guardados
            </NavLink>
          )} */}
          {login && (
            <div
              className="header__nav-link header__nav-logout"
              onClick={logoutHandler}
            >
              <div className="header-icon_container">
                <FontAwesomeIcon
                  className="header-icon header-icon_logout"
                  icon={faRightFromBracket}
                />
              </div>
              Cerrar Sesión
            </div>
          )}
        </nav>
      </header>
      <Outlet />
    </>
  );
}
