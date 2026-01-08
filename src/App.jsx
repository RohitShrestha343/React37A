import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { Suspense } from "react";
import PrivateRoutes from "./routes/privateRoute";
import PublicRoutes from "./routes/publicRoute";
import AppRoutes from "./AppRoutes";

const UserLogin = React.lazy(() => import("./pages/public/Login"));
const UserRegister = React.lazy(() => import("./pages/public/Register"));
function App() {
  return <AppRoutes />;
}

export default App;
