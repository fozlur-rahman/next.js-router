import { blogs } from "@/app/data/blogs";
import React from "react";

export const generateStaticParams = () => {
    return blogs.map((blog) => ({
        id: blog.id,
    }));
};

const SinglePage = ({ params }) => {
    const { id } = params;
    const blog = blogs.find((item) => item.id === id);

    return (
        <div className="">
            {blog && (
                <>
                    <h2>{blog.title}</h2>
                    <p>{blog.des}</p>
                </>
            )}
        </div>
    );
};

export default SinglePage;
