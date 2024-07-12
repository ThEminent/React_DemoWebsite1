import React from "react";
import "./index.css";
import MidBoxes from "../../molecules/MidBoxes";
import Blog from "../../molecules/Blog";


export const DemoWebsite = () => {
  return (
    <div className="flex g-1">
      <MidBoxes />
      <Blog title={"The blog"} />
    </div>
  );
};