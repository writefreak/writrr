"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";

export default function ProgressBar() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const updateProgress = () => {
      const scrollPosition = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / totalHeight) * 100;
      setProgress(scrollPercentage);
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress(); // Call once to set initial state

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <>
      <Progress
        value={progress}
        className="fixed top-0 left-0 right-0 h-1 w-full"
      />
      <div className="min-h-[200vh] p-4">
        {/* Add more content here to make the page scrollable */}
      </div>
    </>
  );
}
