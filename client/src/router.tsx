import App from "./App";

import { createBrowserRouter } from "react-router-dom";
import NewPublication from "./components/Admin/NewPublication";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
//import LoginPage from "./pages/LoginPage";

export const mainRouter = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    element: <AdminPage />,
    children: [
      {
        path: "/login",
        element: <HomePage />,
      },
      {
        path: "/newpublication",
        element: <NewPublication />,
      },
    ],
  },
]);
