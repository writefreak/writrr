// components/AOSInit.tsx
"use client";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const AOSInit = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return null; // This component only runs AOS, so no UI needed.
};

export default AOSInit;
