import React from "react";
import { Switch } from "../ui/switch";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const UserPermit = () => {
  return (
    <div className="p-4 pt-5 space-y-3">
      <p className="text-xl">Permissions</p>
      {permit.map((p) => (
        <Card
          key={p.id}
          className="p-4 md:hover:bg-lime-100 w-full flex items-center gap-3"
        >
          <div className="flex items-center w-full justify-between">
            <p className="text-sm">{p.desc}</p>
            <div className="flex items-center space-x-2">
              <Switch />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default UserPermit;

const permit = [
  {
    id: 1,
    desc: "Deactivate Account",
  },
  {
    id: 2,
    desc: "Make Admin",
  },
  {
    id: 3,
    desc: "Verify Account",
  },
];
