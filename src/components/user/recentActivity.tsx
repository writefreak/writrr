import React from "react";
import { Card } from "../ui/card";

const RecentActivity = () => {
  return (
    <div className="p-4 pt-5 w-[400px] md:w-full select-none flex flex-col gap-3">
      <p className="text-xl">Recent Activities</p>
      {activity.map((a) => (
        <Card
          key={a.id}
          className="p-2 md:hover:bg-lime-100 w-full flex items-center gap-3"
        >
          <div className="h-10 w-10 rounded-full bg-lime-600 text-white flex items-center justify-center">
            <h2 className="font-bold text-3xl">A</h2>
          </div>
          <div>
            <p className="text-sm font-bold">{a.time}</p>
            <p className="text-xs text-gray-500">{a.desc}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default RecentActivity;

const activity = [
  {
    id: 1,
    time: "Last 5minutes",
    desc: "Deleted a recent blog",
  },
  {
    id: 2,
    time: "Last 5minutes",
    desc: "Deleted a recent blog",
  },
  {
    id: 3,
    time: "Last 5minutes",
    desc: "Deleted a recent blog",
  },
];
