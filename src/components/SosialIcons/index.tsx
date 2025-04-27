"use client";

import Image from "next/image";
import Link from "next/link";
import { ILink } from "@/types";

export const SosialIcons = ({ links }: { links: ILink[] }) => {
  return (
    <ul className="flex">
      {links.map((link) => (
        <li key={link.name} className="mr-[2px]">
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
