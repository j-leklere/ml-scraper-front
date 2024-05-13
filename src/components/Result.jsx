import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as fasBookmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import mainService from "../services/mainService";

export default function Result({ precio, nombre, url }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const saveProduct = async (data) => {
    try {
      const response = await mainService.saveProduct(data);
      console.log("Processing");
      console.log(response);
    } catch (e) {
      console.log("Error", e);
    }
  };

  const toggleBookmark = () => {
    const dataToSend = {
      precio,
      nombre,
      url,
    };
    saveProduct(JSON.stringify(dataToSend));
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="result">
      <h4 className="result-price">${precio}</h4>
      <div>
        <p className="strong">
          <strong>Nombre: </strong>
        </p>
        <p className="result-name">{nombre}</p>
        <p className="strong">
          <strong>Link:</strong>
        </p>
        <p className="result-url">
          <a href={url} rel="noopener noreferrer" target="_blank">
            {url}
          </a>
        </p>
      </div>
      <FontAwesomeIcon
        className="result-save--icon"
        icon={isBookmarked ? fasBookmark : farBookmark}
        onClick={toggleBookmark}
      />
    </div>
  );
}
