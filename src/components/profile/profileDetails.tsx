import React from "react";
import Details from "./details";
import { Card } from "../ui/card";
import { getProfile, UserData } from "@/server/profile";

interface Props {
  detail: UserData;
}

const ProfileDetails = ({ detail }: Props) => {
  return (
    <Card className="">
      <div className="bg-white rounded-xl space-y-3 p-4">
        <h3 className="font-bold">Basic Details</h3>
        <Details label={"Firstname"} value={detail?.firstName || ""} />
        <Details label={"Lastname"} value={detail?.lastName || ""} />
        <Details label={"Email"} value={detail?.email || ""} />
      </div>
    </Card>
  );
};

export default ProfileDetails;
