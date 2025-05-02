import ProfileHead from "@/components/profile/profileHead";
import { getProfile } from "@/server/profile";
import React from "react";

const page = async () => {
  const getUser = await getProfile();
  return (
    <div className="">
      <ProfileHead data={getUser} />
    </div>
  );
};

export default page;
