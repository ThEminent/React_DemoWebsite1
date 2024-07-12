import React from "react";
import "./index.css";

function Box({title}){
    return(
        <div className="box" >
            <span>{title}</span>
        </div>
    )
}

export default Box;