import "./App.css";
import { Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage/LoginPage";
import HierarchyTreePage from "./pages/HierarchyTreePage/HierarchyTreePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/hierarchy" element={<HierarchyTreePage />} />
    </Routes>
  );
}

export default App;
