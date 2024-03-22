import React from "react";

const DashBoardLayout = ({ children }) => {
    return (
        <>
            <nav className="bg-yellow-300 p-5">
                <ul className="flex space-x-6">
                    <li>"items"</li>
                    <li>"items"</li>
                    <li>"items"</li>
                    <li>"items"</li>
                    <li>"items"</li>
                </ul>
            </nav>
            {children}
        </>
    );
};

export default DashBoardLayout;
