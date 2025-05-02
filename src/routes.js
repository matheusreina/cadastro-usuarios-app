import { createBrowserRouter } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Principal from "./pages/Principal";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Cadastro />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/principal",
    element: <Principal />,
  },
]);
