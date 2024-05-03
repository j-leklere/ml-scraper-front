import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import mainService from "../services/mainService";
import Result from "../components/Result";

export default function Search() {
  const [data, setData] = useState();

  const search = "sillagamer";
  const maxData = 3;

  const fetchData = async () => {
    if (search && maxData) {
      try {
        const res = await mainService.scrapBySearchInput(search, maxData);
        console.log(res.data);
        if (res.status === 200) {
          setData(res.data);
          console.log("FETCHED!");
        }
      } catch (error) {
        console.error(error);
      } finally {
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="search">
      <SearchBar />
      {data && data.results && (
        <>
          <h3 className="results-title">Cantidad de Resultados:</h3>
          <div className="results">
            {data.results.map((element) => (
              <Result nombre={element.title} precio={element.price} url={element.link} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
