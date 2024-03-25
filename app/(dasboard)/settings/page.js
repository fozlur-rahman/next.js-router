import CustomButton from "@/app/components/CustomButton";
import React from "react";

export const metadata = {
    title: "Settings",
    description: "Generated by create next app",
};

const Settings = () => {
    return (
        <div className="bg-green-700 p-5 w-3/4 mx-auto mt-10">
            <h1 className="text-2xl">Hello next.js Setting</h1>
            <p className="pt-10 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit doloribus esse omnis vel quis illum, placeat sequi
                adipisci excepturi labore? Blanditiis ea labore animi
                perferendis doloremque sit quas ullam nesciunt?
            </p>
            <CustomButton>Go to Analytics</CustomButton>
        </div>
    );
};

export default Settings;