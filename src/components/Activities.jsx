import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const fetchActivities = async () => {
    activitiesList = await axios
      .get("http://localhost:3000/api/activities")
      .then((result) => setActivities(result))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchActivities();
  }, [])
  return (
    <div className="flex flex-col font-body bg-[#101010] w-3/6 p-8 rounded-r-lg overflow-scroll scroll-none">
      <div>
        <h1 className="text-5xl flex justify-center font-semibold mb-12">
          Activities
        </h1>
      </div>
      {activities.map((activity) => (
        <div
          key={activity.id}
          className="flex flex-row items-center justify-between text-lg bg-[#151515] mb-2 border-2 border-[#303030] rounded-lg py-2 px-2 duration-200 ease-out"
        >
          <div className="flex w-1/2 justify-between items-center ml-4 space-x-8">
            <p>{activity.id}</p>
            <p className="overflow-x-scroll">{activity.description}</p>
            <p>{activity.time}</p>
          </div>
          <div className="flex justify-end">
            <button
              className="px-4 py-[5px] bg-white rounded-md text-black hover:scale-105 duration-300 ease-out"
              onClick={() => {
                axios.delete(
                  "http://localhost:3000/api/activities/" + activity.id
                );
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Activities;
