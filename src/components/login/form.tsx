import { Eye } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const LoginForm = () => {
  return (
    <div className="flex p-6 pt-16 justify-center flex-col  max-w-[500px]  h-full font-raleway sm:h-screen sm:mx-auto">
      <form action="">
        <div className="flex flex-col gap-3 ">
          <p className="text-3xl font-bold">Welcome Back!</p>
          <h3 className="text-xl">Login Here</h3>
        </div>
        <div className="space-y-3 py-5">
          <div className="grid gap-3">
            <input
              type="text"
              placeholder="Email: user@gmail.com"
              className=" bg-black/10 outline-none p-3 rounded-xl placeholder:text-xs placeholder:text-black/50"
              required
            />
            <div className="flex items-center bg-black/10 outline-none p-3 rounded-xl grid-cols-2 justify-between">
              <input
                type="text"
                placeholder="Password"
                className="placeholder:text-xs placeholder:text-black/50 bg-transparent outline-none"
                required
              />
              <Eye className="h-4 w-4" />
            </div>
          </div>
          <div className="flex items-center w-full  pb-3 gap-1 text-xs">
            <p>Not yet a member?</p>
            <Link href={"/signup"} className="text-lime-600 underline">
              Sign up
            </Link>
          </div>
          <Button className="w-full rounded-xl">Login</Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
