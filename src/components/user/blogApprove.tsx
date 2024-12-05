import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const BlogApprove = () => {
  return (
    <Card className="flex w-full items-center justify-between p-3">
      <h3>Blog Approval</h3>
      <Button className="h-7 rounded-full">Approve</Button>
    </Card>
  );
};

export default BlogApprove;
