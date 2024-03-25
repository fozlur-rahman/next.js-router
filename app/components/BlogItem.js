import Link from "next/link";
import React from "react";

const BlogItem = ({ item }) => {
    return (
        <div>
            <Link href={`/blogs/${item.id}`}>{item.title}</Link>
        </div>
    );
};

export default BlogItem;
