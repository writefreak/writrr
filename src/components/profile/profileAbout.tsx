import React from "react";
import { Card } from "../ui/card";

const ProfileAbout = () => {
  return (
    <Card className="p-4 bg-white rounded-xl space-y-2">
      <h3 className="font-bold">About me </h3>
      <p className="text-sm font-poppins font-light">
        Passionate tech enthusiast and writer with a knack for breaking down
        complex topics into simple, engaging content. I explore the latest
        innovations, digital solutions, and trends in technology, making tech
        accessible and relatable for everyone.
      </p>
    </Card>
  );
};

export default ProfileAbout;
