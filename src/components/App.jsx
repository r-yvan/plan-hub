import Navbar from "./Navbar";
import List from "./List";
import { act, useState } from "react";
import { produce } from "immer";
import axios from "axios";
import { set } from "mongoose";
import Form from "./Form";
import Link from "react-router-dom";

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
      {postUi ? <Form /> : <List activities={activities} />}
    </div>
  );
};

export default App;
