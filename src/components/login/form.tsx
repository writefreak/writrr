"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Eye, Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Use next/navigation for redirect
import { toast } from "sonner";
import { loginUser } from "@/actions/auth";

const LoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const result = await loginUser(formData.email, formData.password);

    if (result.error) {
      toast.error(result.error);
    }
    if (result.success) {
      router.push("/");
      toast.success("logged in successfully");
    }

    setLoading(false);
  };

  return (
    <div className="flex p-6 pt-16 justify-center flex-col max-w-[500px] h-full font-raleway sm:h-screen sm:mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <p className="text-3xl font-bold">Welcome Back!</p>
          <h3 className="text-xl">Login Here</h3>
        </div>
        <div className="space-y-3 py-5">
          <div className="grid gap-3">
            <input
              type="email"
              name="email"
              placeholder="Email: user@gmail.com"
              className="bg-black/10 outline-none p-3 rounded-xl placeholder:text-xs placeholder:text-black/50"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <div className="flex items-center bg-black/10 outline-none p-3 rounded-xl justify-between">
              <input
                type="text"
                name="password"
                placeholder="Password"
                className="placeholder:text-xs placeholder:text-black/50 bg-transparent outline-none"
                required
                value={formData.password}
                onChange={handleChange}
              />
              <Eye className="h-4 w-4" />
            </div>
          </div>
          <div className="flex items-center w-full pb-3 gap-1 text-xs">
            <p>Not yet a member?</p>
            <Link href={"/signup"} className="text-lime-600 underline">
              Sign up
            </Link>
          </div>
          <Button
            className="w-full rounded-xl flex gap-2 items-center"
            type="submit"
            disabled={loading}
          >
            {loading && <Loader className=" w-4 h-4 animate-spin" />}
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
