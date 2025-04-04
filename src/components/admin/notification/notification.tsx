import Image from "next/image";
import React from "react";
import { ChevronLeft, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomAvatar from "./customAvatar";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const Notifications = () => {
  return (
    <div>
      <Link
        href={"/profile/userBlog"}
        className="flex items-center text-sm md:hidden"
      >
        <ChevronLeft className="h-6 w-6" />
        <span>Back</span>
      </Link>

      <div className="py-8 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Notifications</h2>
          <p>View and respond to all your notifications</p>
        </div>

        <div className="pt-10 space-y-6">
          {days.map((d) => (
            <div key={d.id} className="pb-5 space-y-3">
              <p> {d.day}</p>
              {strips.map((strip) => (
                <Card
                  key={strip.id}
                  className="flex items-center gap-4  dark:border md:w-[900px] px-4 py-3 rounded-md justify-between"
                >
                  <div className="flex gap-3 items-center">
                    {strip.avatar}
                    <div className="flex flex-col">
                      <h2 className=" font-bold text-sm md:text-base">
                        {strip.title}
                      </h2>
                      <p className="text-xs line-clamp-1">{strip.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button className="bg-black rounded-full h-7 text-xs hover:bg-black/80 hover:text-white">
                      View
                    </Button>
                    <Button className="bg-red-800 rounded-full h-7 text-xs hover:bg-red-700">
                      <Trash2 width={16} strokeWidth={2} />
                      <span className="hidden md:block"> Delete</span>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;

const days = [
  {
    id: 1,
    day: "Today",
  },
  {
    id: 2,
    day: "Yesterday",
  },
  {
    id: 3,
    day: "October 30th",
  },
  {
    id: 4,
    day: "October 31st",
  },
];

const strips = [
  {
    id: "a",
    title: "Notifications",
    desc: "View and respond to notifications",
    avatar: <CustomAvatar />,
  },
  {
    id: "b",
    title: "Notifications",
    desc: "View and respond to notifications",
    avatar: <CustomAvatar />,
  },
  {
    id: "c",
    title: "Notifications",
    desc: "View and respond to notifications",
    avatar: <CustomAvatar />,
  },
];
