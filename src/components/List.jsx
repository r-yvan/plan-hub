import React from "react";
import axios from "axios";

const List = ({ activities }) => {
  return (
    <div>
      <div className="font-body bg-slate-200 h-full w-full p-8 ml-2 rounded-lg overflow-scroll scroll-none justify-center">
        <h1 className="text-5xl pl-32 font-semibold mb-4">
          Activities
        </h1>
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="drop-shadow grid grid-cols-7 gap-3 font-normal text-lg bg-white rounded-lg py-5 px-5 ml-2 mb-3 relative flex-3 duration-200 ease-out hover:scale-a-little-bit"
          >
            <p className="border-l-4 border-l-blue-600 pl-8 pt-2">
              {activity.id}
            </p>
            <p className="col-span-4 pt-2">{activity.description}</p>
            <p className="pt-2">{activity.time}</p>
            <button
              className="px-4 py-2 bg-red-900 z-10 rounded-full text-white font-bold active:bg-blue-700 hover:scale-105 duration-300 ease-out"
              onClick={() => {
                axios.delete(
                  "http://localhost:3000/api/activities/" + activity.id
                );
              }}
            >
              Delete
            </button>
            <img
              className="inline absolute bottom-2 right-2 w-12 shadow-2xl"
              src="./upt.png"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
