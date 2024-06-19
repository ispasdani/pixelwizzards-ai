"use client";

import { navLinks } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";

const Example = () => {
  const [activeLink, setActiveLink] = useState<string>("generativefill");

  return (
    <div className="relative flex flex-col justify-start items-center w-full min-h-[30vh] overflow-hidden mb-32">
      <ul className="w-full flex justify-evenly items-center flex-wrap mb-5">
        {navLinks.slice(1, 7).map((link) => (
          <div
            className="flex-center flex-col m-5"
            onClick={() =>
              setActiveLink(link.label.replace(/\s+/g, "").toLowerCase())
            }
          >
            <li
              className={`flex-center w-fit rounded-full cursor-pointer ${
                activeLink === link.label.replace(/\s+/g, "").toLowerCase()
                  ? "bg-[#2C67F2]"
                  : "border-2 border-[#2C67F2]"
              } p-3 mb-2`}
            >
              {activeLink === link.label.replace(/\s+/g, "").toLowerCase() ? (
                <Image
                  src={link.iconWhite}
                  alt="image"
                  width={24}
                  height={24}
                />
              ) : (
                <Image src={link.icon} alt="image" width={24} height={24} />
              )}
            </li>
            <p className="p-14-medium text-center text-[#2C67F2] cursor-pointer">
              {link.label}
            </p>
          </div>
        ))}
      </ul>

      <VideoPlayer src={`/assets/videos/${activeLink}.webm`} />
    </div>
  );
};

export default Example;
