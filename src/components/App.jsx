import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddActivity from "./AddActivity";
import Activities from "./Activities";
import Layout from "./Layout";
import Home from "./Home";

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-row justify-center items-center p-2 text-white bg-[#010101]">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/add-activity" element={<AddActivity />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
