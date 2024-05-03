import Header from "./components/Header";
// import Login from "./views/Login";
import Search from "./views/Search";
import axios from "axios";

// axios.defaults.headers.common["Access-Control-Allow-Methods"] = "GET,PUT,POST,DELETE,PATCH,OPTIONS";
// axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.baseURL = "http://127.0.0.1:8000/ml_scraper_app/";

function App() {
  return (
    <div className="main-container">
      {/* <Login /> */}
      <Header />
      <Search />
    </div>
  );
}

export default App;
