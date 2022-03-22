import React from "react";
import Pig from "./Pig";


function Hogs({ hogsArray, handleShowDetails, showDetails }) {
    const pigsList = hogsArray.map((pig)=> <Pig key={pig.name} pig={pig} handleShowDetails={handleShowDetails} showDetails={showDetails}/>)
    return(
        <div className="ui grid container">
            {pigsList}
        </div>
    )
}

export default Hogs