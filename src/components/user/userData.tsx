import React from "react";
import UserImg from "./userImg";
import { UserTable } from "./userTable";
import { UserChart } from "./userChart";

const UserData = () => {
  return (
    <div className="py-3 space-y-9">
      <UserTable />
      <UserChart />
    </div>
  );
};

export default UserData;
