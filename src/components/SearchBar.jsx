import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar() {
  return (
    <div className="searchbar">
      <FontAwesomeIcon className="searchbar-icon" icon={faMagnifyingGlass} />
      <p>Ingrese su búsqueda</p>
    </div>
  );
}
