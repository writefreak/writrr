import { cn } from "@/lib/utils";
import { Send, SendHorizonal } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import RateStar from "./rateStar";
interface Props {
  className?: string;
}
const CommentBox = ({ className }: Props) => {
  return (
    <div className={cn("sm:pt-6", className)}>
      <div className="space-y-5">
        <h3 className="text-2xl">Leave Us a Review—Your Voice Matters Here!</h3>
        <div className="flex items-center gap-6 border-lime-600 border rounded-full justify-between px-3 py-2 h-14 sm:w-full w-96 sm:hidden">
          <input
            type="text"
            placeholder="Write your comment here..."
            className="outline-none w-80"
          />
          <form action="">
            <Button className="rounded-full h-11 w-11 bg-lime-600 flex items-center justify-center">
              <SendHorizonal className="text-white border-1" fill="white" />
            </Button>
          </form>
        </div>
        <form action="">
          <div className="hidden sm:flex flex-col gap-3">
            <textarea
              name=""
              id=""
              className="w-full outline-none border border-lime-600 rounded-xl p-3 h-52"
              placeholder="Write your review here..."
            ></textarea>
            <Button className="w-full bg-lime-600 text-base">Submit</Button>
          </div>
        </form>
        <p className="text-xl sm:text-2xl">Don't Forget to Rate us</p>
        <RateStar />
      </div>
    </div>
  );
};

export default CommentBox;
