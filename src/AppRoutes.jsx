import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PublicRoute from "./routes/publicRoute";
import PrivateRoute from "./routes/privateRoute";

const LoginPage = React.lazy(() => import("./pages/public/Login"));
const RegisterPage = React.lazy(() => import("./pages/public/Register"));
const ProductPage = React.lazy(() => import("./pages/private/Product"));
const FeedbackPage = React.lazy(() => import("./pages/private/Feedback"));
const ProductList = React.lazy(() => import("./pages/private/ProductList"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<>....Lodaing</>}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />;
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/product" element={<ProductList />} />
          <Route path="/product/add" element={<ProductPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default AppRoutes;
