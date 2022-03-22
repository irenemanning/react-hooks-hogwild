import React, { useState } from "react";
import Nav from "./Nav";
import Hogs from "./Hogs";
import Filters from "./Filters";

import hogs from "../porkers_data";

function App() {
	const hogsArray = hogs
	const [showDetails, setShowDetails] = useState(false)
	const [showGreased, setShowGreased] =  useState(false)

	const handleShowGreased =hogsArray.filter((hog)=>(showGreased ? hog.greased : true))
	function handleShowGreasedChange(e) {
		setShowGreased(e.target.value)
	}
	

	function handleShowDetails() {
		console.log('clicked')
		setShowDetails(showDetails=> !showDetails)
	}
	return (
		<div className="App">
			<Nav />
			<Filters handleShowGreased={handleShowGreased} handleShowGreasedChange={handleShowGreasedChange}/>
			<Hogs hogsArray={hogsArray} handleShowDetails={handleShowDetails} showDetails={showDetails}/>
		</div>
	);
}

export default App;
