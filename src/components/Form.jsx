import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [activities, setActivities] = useState([]);

  axios
    .get("http://localhost:3000/api/activities")
    .then((result) => setActivities(result.data))
    .catch((err) => console.log(err.message));

  return (
    <div className="flex flex-col font-body bg-[#101010] h-full p-8 w-3/6 rounded-r-lg overflow-scroll scroll-none">
<div>      <h1 className="text-5xl pl-32 font-semibold mb-4">Add Activity</h1></div>
      <form
        onSubmit={() =>
          axios.post("http://localhost:3000/api/activities", {
            id: activities.length + 1,
            description: description,
            time: time,
          })
        }
      >
        <div>
          <label htmlFor="activity" className="font-normal">
            Description
          </label>
          <br />
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            name="activity"
            className="h-32 w-width-2 rounded-md py-3 px-3 border border-[#202020] bg-[#101010] outline-none"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="time" className="font-normal">
            Time
          </label>
          <br />
          <input
            onChange={(e) => setTime(e.target.value)}
            type="text"
            name="time"
            className="rounded-md py-3 px-3 border border-[#202020] bg-[#101010] outline-none"
          />
        </div>
        <button
          type="submit"
          className="hover:scale-a-little-bit ease-out duration-200 rounded-md font-black px-5 py-2 bg-white text-black mt-6 ml-60"
        >
          Add Activity
        </button>
      </form>
    </div>
  );
};

export default Form;
