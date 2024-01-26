"use client";
import React from "react";
import { Navbar } from "@/components/ui/navbar";

const JobsLayout: React.FC<{ children?: React.ReactNode }> = (props) => {
  return (
    <div>
      <Navbar />
      <div>{props.children}</div>
    </div>
  );
};

export default JobsLayout;
