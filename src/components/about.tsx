"use client";
import Link from "next/link";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Find from "./search";
import { Card, CardHeader } from "./ui/card";

const About: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null); // Ref to detect outside clicks

  // Open the dialog
  const openDialog = () => setIsOpen(true);

  // Close the dialog
  const closeDialog = () => setIsOpen(false);

  // Add outside-click functionality
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dialogRef.current && // Ensure the dialog is rendered
        !dialogRef.current.contains(event.target as Node) // Detect clicks outside
      ) {
        closeDialog();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const dialogContent = (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      style={{ height: "100vh", width: "100vw" }}
    >
      <div
        ref={dialogRef}
        className="max-w-xl mx-auto flex justify-center items-center p-8"
      >
        {content.map((c) => (
          <Card key={c.id} className="p-7">
            <h3 className="text-3xl py-4 font-bold font-raleway">About Us</h3>
            <p className="font-inter font-light">{c.text}</p>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      {/* div to trigger the search dialog */}
      <div onClick={openDialog} className=" ">
        <div className="">
          {/* <div className="group">
            <Link href={"#"} className="font-lato">
              About
            </Link>
            <div className="group-hover:sm:w-full relative w-0 transition-all duration-1000 h-1 bottom-0 left-0 right-0 z-50 bg-lime-600"></div>
          </div> */}
        </div>
      </div>

      {/* Conditionally render the dialog */}
      {isOpen && createPortal(dialogContent, document.body)}
    </div>
  );
};

export default About;

const content = [
  {
    id: 1,
    text: `The Writrr is a platform dedicated to exploring the dynamic intersection of technology, innovation, and practical solutions for the modern world. Our goal is to deliver insightful, well-researched content that empowers readers to navigate the ever-evolving tech landscape with clarity and confidence. From in-depth analyses of emerging trends to actionable tips for leveraging digital tools, The Writrr is where tech enthusiasts and professionals find the knowledge to stay ahead in a fast-paced industry.`,
  },
];
