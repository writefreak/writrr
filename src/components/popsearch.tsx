"use client";
import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Find from "./search";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

const PopSearch: React.FC = () => {
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

  // Listen for the Ctrl + K keypress to open the search dialog
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if Ctrl + K is pressed
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault(); // Prevent Chrome's default behavior
        openDialog(); // Open the dialog
      }
    };

    // Add the event listener for Ctrl + K
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const dialogContent = (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      style={{ height: "100vh", width: "100vw" }}
    >
      <div
        ref={dialogRef}
        className="max-w-lg mx-auto flex justify-center items-center p-8"
      >
        <form action="" className="flex items-center border-b-2 border-b-white">
          <input
            type="text"
            placeholder="Search..."
            className=" text-white font-lato  placeholder:text-white bg-transparent  outline-none p-4 text-xl sm:w-96 shadow-lg"
          />
          <Find />
        </form>
      </div>
    </div>
  );

  return (
    <div>
      {/* div to trigger the search dialog */}
      <div onClick={openDialog} className=" ">
        <Find />
      </div>

      {/* Conditionally render the dialog */}
      {isOpen && createPortal(dialogContent, document.body)}
    </div>
  );
};

export default PopSearch;
