import React from "react";
import Box from "../../atoms/Box";

function MidBoxes(){
    return(
        <div className="main flex-col g-1">
        <div className="flex g-1">
          <Box title={"COS 101"} />
          <Box title={"MTH 201"} />
        </div>
        <Box title={"Advert"} />
        <Box title={"Assignments"} />
      </div>
    )
}

export default MidBoxes;