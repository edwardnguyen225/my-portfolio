import Link from "next/link";

export interface LinkItemProps {
  Icon: any;
  title: string;
  href: string;
}
const LinkItem = ({ Icon, title, href }: LinkItemProps) => {
  return (
    <Link
      href={href}
      className="flex flex-row items-center my-[15px] cursor-pointer group"
      passHref
      target="_blank"
    >
      <Icon />
      <span className="text-[15px] ml-[6px] group-hover:underline">
        {title}
      </span>
    </Link>
  );
};

export default LinkItem;
