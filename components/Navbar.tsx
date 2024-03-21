import Link from "next/link";
import React from "react";

const Navbar = () => {
  const sections = [
    {
      title: "About",
      href: "/#about-me",
    },
    {
      title: "Skills",
      href: "/#skills",
    },
    {
      title: "Projects",
      href: "/projects",
    },
  ];

  return (
    <div className="w-full h-[65px] fixed top-0 z-50">
      <div className="w-full h-full flex flex-row items-center justify-center m-auto">
        <div className="w-[500px] h-full flex flex-row items-center justify-between">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-7 py-[10px] rounded-full text-gray-200 shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md">
            {sections.map((section) => (
              <Link
                key={`section-${section.title}`}
                href={section.href}
                className="link-underline cursor-pointer"
              >
                {section.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
