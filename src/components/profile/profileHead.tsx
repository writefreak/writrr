import React from "react";
import UserImg from "../user/userImg";

const ProfileHead = () => {
  return (
    <div className="p-4">
      <UserImg
        src={"/images/beautiful-sky-full-stars-trona-ca.jpg"}
        userName="Alicia Ouihya"
        userEmail="alicia@gmail.com"
        additionalText="Monday, 2nd December, 2024"
        className="flex  md:items-center flex-row"
        image={{ className: "h-20 w-20 md:h-28 md:w-28" }}
      />
    </div>
  );
};

export default ProfileHead;
