import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import Header from "./components/Header";
import Login from "./views/Login";
import Search from "./views/Search";
import axios from "axios";

// axios.defaults.headers.common["Access-Control-Allow-Methods"] = "GET,PUT,POST,DELETE,PATCH,OPTIONS";
// axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      { path: "/", element: <Search /> },
      { path: "/login", element: <Login /> },
      // { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
