import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Link from "react-router-dom";
import Form from "./Form";
import Navbar from "./Navbar";
import List from "./List";
import Layout from "./Layout";

const App = () => {
  const [activities, setActivities] = useState([]);
  const [postUi, setPostUi] = useState(false);

  axios
    .get("http://localhost:3000/api/activities")
    .then((result) => setActivities(result.data))
    .catch((err) => console.log(err.message));

  return (
    <div className="w-full h-full flex flex-row justify-center p-2 text-white bg-[#010101]">
      <Navbar
        onAddActivity={() => {
          setPostUi(!postUi);
        }}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={}/>
            <Route index path="/activities" element={<List />} />
            <Route path="/add-activities" element={<Form />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
