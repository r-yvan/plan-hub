import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./Form";
import List from "./List";
import Layout from "./Layout";
import Home from "./Home";

const App = () => {
  axios
    .get("http://localhost:3000/api/activities")
    .then((result) => setActivities(result.data))
    .catch((err) => console.log(err.message));

  return (
    <div className="w-screen h-screen flex flex-row justify-center p-2 text-white bg-[#010101]">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/activities" element={<List />} />
            <Route path="/add-activities" element={<Form />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
