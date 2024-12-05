import React from "react";
import { ProfileImg } from "../profileimg";
import { cn } from "@/lib/utils";

//Passing the neccessary props to make this component extra-reusable

interface Props {
  userName?: string;
  userEmail?: string;
  additionalText?: string;
  src?: string;
  image?: {
    className?: string;
  };
  className?: string;
}

const UserImg = ({
  userName,
  userEmail,
  image,
  className,
  src,
  additionalText,
}: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row items-center gap-2 py-3",
        className
      )}
    >
      <img
        className={cn("h-40 w-40 rounded-full", image?.className)}
        src={src}
        alt=""
      />

      {/* i made the code very reusable above, so you can style image tag without coming back here to manually adjust any code */}

      <div>
        <div className="space-y-1">
          <p className="text-sm font-inter font-bold">{userName}</p>
          <p className="text-xs font-inter font-light">{userEmail}</p>
          <p className="text-xs font-inter font-light">{additionalText}</p>
        </div>
      </div>
    </div>
  );
};

export default UserImg;
