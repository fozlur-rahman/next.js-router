"use client";
import { useRouter } from "next/navigation";
import React from "react";

const CustomButton = ({ children }) => {
    const router = useRouter();
    const handleNavigation = () => {
        router.push("/dasboard/analytics");
    };
    return (
        <button
            onClick={handleNavigation}
            className="bg-blue-500 rounded px-3 py-2 mt-5"
        >
            {children}
        </button>
    );
};

export default CustomButton;
