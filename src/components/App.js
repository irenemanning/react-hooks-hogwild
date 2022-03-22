import React, { useState } from "react";
import Nav from "./Nav";
import Hogs from "./Hogs";
import Filters from "./Filters";

import hogs from "../porkers_data";

function App() {
	const hogsArray = hogs
	const [showDetails, setShowDetails] = useState(false)
	const [showGreased, setShowGreased] =  useState(false)
	const [sortPigs, setSortPigs] = useState("All")

	const handleShowGreased =hogsArray.filter((hog)=>(showGreased ? hog.greased : true))
	console.log(handleShowGreased)
	function handleShowGreasedChange(e) {
		console.log(e.target.value)
		setShowGreased(!showGreased)
	}
	
	function handleSortingChange(e) {
		setSortPigs(e.target.value)
	}
	function SortArray(x, y){
		if (x.name < y.name) {return -1;}
		if (x.name > y.name) {return 1;}
		return 0;
	}
	function sortedByWeight(a, b) { 
		return b.weight - a.weight  ||  b.weight.localeCompare(a.weight);
	  };
	const sortedPigs = sortPigs === "All" ? handleShowGreased : sortPigs === "name" ? handleShowGreased.sort(SortArray) : handleShowGreased.sort(sortedByWeight);

	

	function handleShowDetails() {
		console.log('clicked')
		setShowDetails(showDetails=> !showDetails)
	}
	return (
		<div className="App">
			<Nav />
			<Filters handleShowGreasedChange={handleShowGreasedChange} handleSortingChange={handleSortingChange}/>
			<Hogs hogsArray={sortedPigs} handleShowDetails={handleShowDetails} showDetails={showDetails}/>
		</div>
	);
}

export default App;
