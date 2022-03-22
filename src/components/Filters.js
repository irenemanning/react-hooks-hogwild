import React from "react";

function Filters( { handleShowGreased, handleShowGreasedChange }){
    return(
        <div style={{margin: "80px"}}>
            <select onChange={handleShowGreasedChange} style={{margin: "10px"}} name="filter" id="">
                <option value="All">All</option>
                <option value="Greased">Greased</option>
            </select>

            <select style={{margin: "10px"}} name="Sort" id="">
                <option value="">Sort by ...</option>
                <option value="name">Name: A-Z</option>
                <option value="weight">Weight: High to Low</option>
                <option value="weight">Low to High</option>
            </select>
        </div>
    )
}

export default Filters