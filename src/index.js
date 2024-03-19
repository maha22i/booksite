import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Favoris from "./components/Favoris";
import Connexion from "./components/Connexion";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserProvider from "./provider/UserProvider";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/favoris", element: <Favoris /> },
  { path: "/connexion", element: <Connexion /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
