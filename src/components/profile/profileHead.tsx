import React from "react";
import UserImg from "../user/userImg";
import ProfileAbout from "./profileAbout";
import ProfileDetails from "./profileDetails";
import { Delete } from "./delete";
import { Edit } from "./edit";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { UserData } from "@/server/profile";
import { Card } from "../ui/card";
import About from "../about";

interface Props {
  data: UserData;
}

const ProfileHead = ({ data }: Props) => {
  return (
    <div>
      <Link
        href={"/profile/profileDashboard"}
        className="flex items-center text-sm p-4 md:hidden"
      >
        <ChevronLeft className="h-6 w-6" />
        <span>Back</span>
      </Link>
      <div className="p-4">
        <UserImg
          src={"/images/beautiful-sky-full-stars-trona-ca.jpg"}
          userName={data?.firstName.toUpperCase()}
          userEmail={data?.email}
          className="flex  md:items-center flex-row"
          image={{ className: "h-20 w-20 md:h-28 md:w-28" }}
        />

        <div className="flex gap-2 md:gap-3">
          <div className="border border-black flex items-center text-xs h-8 rounded-full px-5">
            {data?.role.toUpperCase()}
          </div>
          <Edit />
        </div>
      </div>

      <div className="grid md:grid-cols-2 p-4 gap-3">
        <ProfileAbout desc={data} />
        <ProfileDetails detail={data} />
      </div>
      <div className="px-4">
        <Delete />
      </div>
    </div>
  );
};

export default ProfileHead;
