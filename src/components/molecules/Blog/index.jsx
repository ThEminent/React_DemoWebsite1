import React from "react";
import "./index.css";

function Blog({title}){
    return(
        <div className="blog" >
            <span>{title}</span>
        </div>
    )
}

export default Blog;