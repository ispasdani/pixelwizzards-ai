import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Footer = () => {
  return (
    <footer className="w-full min-h-[33vh] bg-dark-600 flex justify-center items-center text-white pt-5">
      <Popover>
        <div className="max-w-5xl mx-auto px-5 md:px-10 w-full h-full flex flex-col">
          <div className="w-full min-h-[22vh] flex flex-wrap justify-between items-start">
            <div className="w-full sm:w-1/3 p-2">
              <p className="text-lg font-bold mb-1">Links</p>
              <ul>
                {navLinks.slice(1, 7).map((link) => (
                  <li className="text-sm">
                    <Link href={link.route} prefetch={false}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full sm:w-1/3 p-2">
              <p className="text-lg font-bold mb-1">Legal</p>
              <div className="flex flex-col">
                <Link href={"/legal"}>Terms of conditions</Link>
                <Link href={"/legal"}>Privacy policy</Link>
              </div>
            </div>
            <div className="w-full sm:w-1/3  flex flex-col justify-start items-start p-2">
              <Link
                href="/"
                className="text-2xl font-bold flex-center mb-5"
                prefetch={false}
              >
                pixelWizard.AI
              </Link>
              <p>
                Unleash the power of AI to edit, enhance, and transform your
                photos effortlessly.
              </p>
            </div>
          </div>
          <div className="w-full h-[8vh] flex justify-end items-center border-t border-white">
            <p className="text-md text-white">
              Copyright &copy; 2024 - All rights reserved
            </p>
          </div>
        </div>
      </Popover>
    </footer>
  );
};

export default Footer;
