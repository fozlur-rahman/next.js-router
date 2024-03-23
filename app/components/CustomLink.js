"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({ path, children }) => {
    const pathName = usePathname();
    const activeLink = path === pathName;
    return (
        <Link
            className={activeLink ? "text-blue-500" : "text-gray-50"}
            href={path}
        >
            {children}
        </Link>
    );
};

export default CustomLink;
