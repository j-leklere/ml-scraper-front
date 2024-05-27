import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBookmark as fasBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import numberFormatter from "../utils/numberFormatter";
import mainService from "../services/mainService";
import { Link } from "react-router-dom";

export default function Result({
  precio,
  moneda,
  nombre,
  url,
  selectedCurrency,
}) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const saveSearchProduct = async (data) => {
    try {
      const response = await mainService.saveSearchProduct(data);
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
    saveSearchProduct(JSON.stringify(dataToSend));
    setIsBookmarked(!isBookmarked);
  };

  console.log(selectedCurrency);

  return (
    <a
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      className="result-a"
    >
      <div className="result">
        <h4 className="result-price">
          {selectedCurrency === "ARS" ? "AR$" : "US$"} {numberFormatter(precio)}
        </h4>

        <p className="result-name">{nombre}</p>

        <p className="result-url">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </p>

        {/* <FontAwesomeIcon
        className="result-save--icon"
        icon={isBookmarked ? fasBookmark : farBookmark}
        onClick={toggleBookmark}
      /> */}
      </div>
    </a>
  );
}
