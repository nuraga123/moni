"use client";

import Image from "next/image";
import Link from "next/link";
import { ILink } from "@/types";

export const SosialIcons = ({ links }: { links: ILink[] }) => {
  return (
    <ul className="flex w-10 bg-transparent px-[2px] py-[3px]">
      {links.map((link) => (
        <li key={link.name} className="mr-2">
          <Link href={link.linkUrl}>
            <Image
              src={link.logoUrl}
              alt={link.name}
              width={12}
              height={12}
              priority
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
