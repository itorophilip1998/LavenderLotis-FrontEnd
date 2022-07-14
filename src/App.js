import React from "react";
import HomePage from "./pages/Homepage/HomePage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/navigation/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
