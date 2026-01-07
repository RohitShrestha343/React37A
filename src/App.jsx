import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { Suspense } from "react";
import PrivateRoutes from "./routes/privateRoute";
import PublicRoutes from "./routes/publicRoute";

const UserLogin = React.lazy(() => import("./pages/public/Login"));
const UserRegister = React.lazy(() => import("./pages/public/Register"));
function App() {
  const token = localStorage.getItem("access_token");
  return <>{token ? <PrivateRoutes /> : <PublicRoutes />}</>;
}

export default App;
