import React from "react";
import { RxDiscordLogo, RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { CiMail } from "react-icons/ci";
import { FaFacebook, FaRegUser } from "react-icons/fa";

import LinkItem from "./LinkItem";

const communityLinks = [
  {
    Icon: RxGithubLogo,
    title: "Github",
    href: "https://github.com/edwardnguyen225",
  },
  {
    Icon: RxDiscordLogo,
    title: "Discord",
    href: "https://discordapp.com/users/832505391794880515",
  },
];

const socialMediaLinks = [
  {
    Icon: RxLinkedinLogo,
    title: "Linkedin",
    href: "https://www.linkedin.com/in/nhan-nguyen-839020295/",
  },
  {
    Icon: FaFacebook,
    title: "Facebook",
    href: "https://facebook.com/trinhan.vn",
  },
];

const columns = [
  {
    title: "Community",
    links: communityLinks,
  },
  {
    title: "Social Media",
    links: socialMediaLinks,
  },
  {
    title: "About",
    links: [
      {
        Icon: FaRegUser,
        title: "Learning about me",
        href: "#about-me",
      },
      {
        Icon: CiMail,
        title: "trinhan.dev@outlook.com",
        href: "mailto:trinhan.dev@outlook.com",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {columns.map((column) => (
            <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
              <div className="font-bold text-[16px]">{column.title}</div>
              {column.links.map((link) => (
                <LinkItem
                  Icon={link.Icon}
                  title={link.title}
                  href={link.href}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          This portfolio is inspired by WebChain Dev
        </div>
      </div>
    </div>
  );
};

export default Footer;
