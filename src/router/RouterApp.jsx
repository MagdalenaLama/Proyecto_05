import { Routes, Route } from "react-router-dom";
import { HomePage } from "../views/HomePage";
import { SearchPage } from "../views/SearchPage";

export const RouterApp = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/search" element={SearchPage} />
      </Routes>
    </>
  );
};
