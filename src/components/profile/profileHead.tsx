import React from "react";
import UserImg from "../user/userImg";
import { Button } from "../ui/button";
import ProfileAbout from "./profileAbout";
import ProfileDetails from "./profileDetails";
import { Delete, Trash } from "lucide-react";

const ProfileHead = () => {
  return (
    <div>
      <div className="p-4">
        <UserImg
          src={"/images/beautiful-sky-full-stars-trona-ca.jpg"}
          userName="Alicia Ouihya"
          userEmail="alicia@gmail.com"
          additionalText="Monday, 2nd December, 2024"
          className="flex  md:items-center flex-row"
          image={{ className: "h-20 w-20 md:h-28 md:w-28" }}
        />

        <div className="flex gap-2 md:gap-3">
          <div className="border border-black flex items-center text-xs h-8 rounded-full px-5">
            User
          </div>
          <Button className="bg-black h-8 text-xs rounded-full">
            Edit details
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 p-4 gap-3">
        <ProfileAbout />
        <ProfileDetails />
      </div>
      <div className="px-4">
        <Button className="bg-red-600 h-8 text-xs rounded-full flex items-center">
          <Trash /> Delete Account
        </Button>
      </div>
    </div>
  );
};

export default ProfileHead;
