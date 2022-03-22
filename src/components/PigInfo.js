import react from "react";

function PigInfo( {pig} ) {
    return(
        <div>
            <h5>Specialty: {pig.specialty}</h5>
            <h5>Weight: {pig.weight}</h5>
            <h5>Highest Medal Achieved: {pig['highest medal achieved']}</h5>
            <h5>Greased: {pig.greased}</h5>
        </div>
    )
}

export default PigInfo