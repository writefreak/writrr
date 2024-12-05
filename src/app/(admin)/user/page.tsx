import UserData from "@/components/user/userData";
import UserHead from "@/components/user/userHead";
import React from "react";

const page = () => {
  return (
    <div className="p-4">
      <UserHead />
      <UserData />
    </div>
  );
};

export default page;
