import React from "react";

function Filters( { handleShowGreasedChange, handleSortingChange }){
    return(
        <div style={{margin: "80px"}}>
            <select onChange={handleShowGreasedChange} style={{margin: "10px"}} name="filter" id="">
                <option value="All">All</option>
                <option value="Greased">Greased</option>
            </select>

            <select onChange={handleSortingChange} style={{margin: "10px"}} name="Sort" id="">
                <option value="All">Sort by ...</option>
                <option value="name">Name: A-Z</option>
                <option value="weight">Weight: High to Low</option>
            </select>
        </div>
    )
}

export default Filters