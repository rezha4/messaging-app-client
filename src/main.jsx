import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login.jsx";
import { Signup } from "./pages/Signup.jsx";
import { Navbar } from "./components/Navbar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar />
        <Login />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <Navbar />
        <Signup />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
