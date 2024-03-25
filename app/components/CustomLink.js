"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({ path, prefetch = true, children }) => {
    const pathName = usePathname();
    const activeLink = path === pathName;
    return (
        <Link
            prefetch={prefetch}
            className={activeLink ? "text-blue-500" : "text-gray-50"}
            href={path}
        >
            {children}
        </Link>
    );
};

export default CustomLink;
