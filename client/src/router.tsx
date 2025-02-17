import App from "./App";

import { createBrowserRouter } from "react-router-dom";
import NewPublication from "./components/Admin/NewPublication";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

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
    path: "/login",
    element: <LoginPage />,
  },
  {
    element: <AdminPage />,
    children: [
      {
        path: "/newpublication",
        element: <NewPublication />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);
