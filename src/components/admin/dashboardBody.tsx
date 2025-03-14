import { User } from "lucia";
import React from "react";

interface Props {
  user: User;
}

const DashboardBody = ({ user }: Props) => {
  return (
    <div className="space-y-3 px-3 md:px-0 md:p-3">
      <h3 className="text-3xl font-bold">Hello, {user.firstName}! 👋</h3>
      <p>Create and manage your activities here</p>
    </div>
  );
};

export default DashboardBody;
