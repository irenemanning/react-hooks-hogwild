import React, { useState } from "react";
import Nav from "./Nav";
import Hogs from "./Hogs";
import Filters from "./Filters";

import hogs from "../porkers_data";

function App() {
	const hogsArray = hogs
	const [showDetails, setShowDetails] = useState(false)
	function handleShowDetails() {
		console.log('clicked')
		setShowDetails(showDetails=> !showDetails)
	}
	return (
		<div className="App">
			<Nav />
			<Filters />
			<Hogs hogsArray={hogsArray} handleShowDetails={handleShowDetails} showDetails={showDetails}/>
		</div>
	);
}

export default App;
