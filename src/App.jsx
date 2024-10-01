import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store/store";
import NotFound from "./views/NotFound";

import Header from "./components/Header";
import Login from "./views/Login";
import Search from "./views/Search";
import axios from "axios";
import OwnProducts from "./views/OwnProducts";
import SavedProducts from "./views/SavedProducts";
import SavedSearches from "./views/SavedSearches";
import { Provider } from "react-redux";

// axios.defaults.headers.common["Access-Control-Allow-Methods"] = "GET,PUT,POST,DELETE,PATCH,OPTIONS";
// axios.defaults.headers.common["Content-Type"] = "application/json";
//axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.baseURL = process.env.REACT_APP_API_LOCAL_URL;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      { path: "/", element: <Search /> },
      { path: "/login", element: <Login /> },
      { path: "/own-products", element: <OwnProducts /> },
      { path: "/saved-products", element: <SavedProducts /> },
      { path: "/saved-searches", element: <SavedSearches /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
