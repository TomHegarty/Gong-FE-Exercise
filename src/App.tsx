import "./App.css";
import { Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage/LoginPage";
import HierarchyTreePage from "./pages/HierarchyTreePage/HierarchyTreePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export const routes = {
  login: "/login",
  hierarchy: "/hierarchy",
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path={routes.login} element={<LoginPage />} />
      <Route path={routes.hierarchy} element={<HierarchyTreePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
