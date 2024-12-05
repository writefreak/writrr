import React from "react";
import AllUsers from "./allusers";

const UserHead = () => {
  return (
    <div>
      <div>
        <h3 className="text-2xl md:text-3xl">User Management</h3>
        <p className="text-sm text-gray-500">
          Track and monitor all user activities here
        </p>
        <AllUsers />
      </div>
    </div>
  );
};

export default UserHead;
