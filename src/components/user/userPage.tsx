import React from "react";
import UserImg from "./userImg";
import { Button } from "../ui/button";
import { icons, Trash2 } from "lucide-react";
import RecentActivity from "./recentActivity";
import UserPermit from "./userPermit";
import RecentBlog from "./recentBlog";

interface Props {
  data?: string;
}

const UserPage = () => {
  return (
    <div>
      <div className="md:flex items-center justify-between md:w-[900px] p-4">
        <UserImg
          src={"/images/beautiful-sky-full-stars-trona-ca.jpg"}
          userName="Alicia Ouihya"
          userEmail="alicia@gmail.com"
          additionalText="Monday, 2nd December, 2024"
          className="flex  md:items-center flex-row"
          image={{ className: "h-20 w-20 md:h-28 md:w-28" }}
        />

        <div className="flex items-center gap-2">
          <div className="flex rounded-full items-center border px-2 h-7 border-black select-none">
            <p className="text-xs"> Verified</p>
          </div>
          <Button className="flex h-7 rounded-full text-xs bg-red-700 items-center">
            Delete User <Trash2 />
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 items-center gap-2">
        <RecentActivity />
        <UserPermit />
      </div>
      <RecentBlog />
    </div>
  );
};

export default UserPage;
