import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Activities = () => {
  const navigate = useNavigate();
  const [activities, setActivities] = useState([]);
  const fetchActivities = async () => {
    await axios
      .get("http://localhost:3000/api/activities")
      .then(({ data }) => setActivities(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchActivities();
  }, []);
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
          className="grid grid-cols-[1fr_10fr_5fr_1fr] grid-rows-1 place-items-center text-lg bg-[#151515] mb-2 border border-[#303030] rounded-lg py-2 px-2 duration-200 ease-out"
        >
          <div>
            <p>{activity.id}</p>
          </div>
          <div>
            <p>{activity.description}</p>
          </div>
          <div>
            <p>{activity.time}</p>
          </div>
          <div>
            <button
              className="px-4 py-[5px] bg-white rounded-md text-black hover:scale-105 duration-300 ease-out"
              onClick={() => {
                axios
                  .delete("http://localhost:3000/api/activities/" + activity.id)
                  .then(() => {
                    setActivities((prevActivities) =>
                      prevActivities.filter((item) => item.id !== activity.id)
                    );
                  })
                  .catch((error) =>
                    console.error("Error deleting activity:", error)
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
