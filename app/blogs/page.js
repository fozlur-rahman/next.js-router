import React from "react";
import { blogs } from "../data/blogs";
import BlogItem from "../components/BlogItem";
const Blogs = () => {
    return (
        <div>
            <h1 className="text-5xl capitalize text-center py-5">Blog page</h1>
            <div className="w-3/4 mx-auto bg-slate-700 p-20 ">
                {blogs.map((item) => (
                    <BlogItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Blogs;
