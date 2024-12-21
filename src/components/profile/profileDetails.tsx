import React from "react";
import Details from "./details";
import { Card } from "../ui/card";

const ProfileDetails = () => {
  return (
    <Card className="">
      <div className="bg-white rounded-xl space-y-3 p-4">
        <h3 className="font-bold">Basic Details</h3>
        {item.map((i) => (
          <Details key={i.id} label={i.label} value={i.value} />
        ))}
      </div>
    </Card>
  );
};

export default ProfileDetails;

const item = [
  {
    id: 1,
    label: "Name",
    value: "Endwell Heritage",
  },
  {
    id: 2,
    label: "Username",
    value: "Writefreak",
  },
  {
    id: 3,
    label: "Email",
    value: "EndwellHeritage@gmail.com",
  },
];
