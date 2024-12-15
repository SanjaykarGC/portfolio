"use client";
import { timeline } from "@/constants/timeline";
import React from "react";
import { Paragraph } from "./Paragraph";
import { Heading } from "./Heading";
import { IconCircleCheckFilled } from "@tabler/icons-react";

export const WorkHistory = () => {
  return (
    <div>
      {timeline.map((item, index) => (
        <div
          className="flex md:flex-col flex-col md:space-x-10 my-10 relative"
          key={`timeline-${index}`}
        >
          {/* Date */}
          <Paragraph className="w-40 font-semibold text-emerald-500">
            {item.date}
          </Paragraph>

          {/* Content */}
          <div>
            <Heading
              as="h5"
              className="text-lg md:text-lg lg:text-lg text-emerald-500"
            >
              {item.title}
            </Heading>
            <Paragraph className="text-sm md:text-sm lg:text-sm mb-4">
              {item.description}
            </Paragraph>

            {/* Responsibilities */}
            {item.responsibilities.map((responsibility, idx) => (
              <Step key={idx}>{responsibility}</Step>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Step = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-start space-x-3 my-2">
      <div className="flex-shrink-0">
        {/* Circle Icon with fixed size */}
        <IconCircleCheckFilled className="h-5 w-5 text-emerald-500" />
      </div>
      <Paragraph className="text-sm md:text-sm lg:text-sm">
        {children}
      </Paragraph>
    </div>
  );
};
