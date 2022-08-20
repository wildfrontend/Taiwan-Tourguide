import React from "react";
import { Route, Routes } from "react-router-dom";
import './index.css'

/**
 * ANCHOR Pages
 */
const Home = React.lazy(() => import("./pages/home"));

const Pages: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

/**
 * ANCHOR App
 */
const App: React.FC = () => {
  return (
    <>
      <Pages />
    </>
  );
};

export default App;
