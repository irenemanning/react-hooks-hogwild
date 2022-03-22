import react from "react";
import Pig from "./Pig";

function Hogs({ hogsArray }) {
    const pigsList = hogsArray.map((pig)=> <Pig pig={pig} />)
    return(
        <div>
            {pigsList}
        </div>
    )
}

export default Hogs