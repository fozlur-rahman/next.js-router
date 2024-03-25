import React from "react";

const DashBoardLayout = ({ children }) => {
    return (
        <>
            <nav className="bg-yellow-700 p-5">
                <ul className="flex space-x-6">
                    <li>Item-1</li>
                    <li>Item-2</li>
                    <li>Item-3</li>
                </ul>
            </nav>
            {children}
        </>
    );
};

export default DashBoardLayout;
