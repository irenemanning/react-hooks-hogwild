import React from "react";
import Nav from "./Nav";
import Hogs from "./Hogs";

import hogs from "../porkers_data";

function App() {
	const hogsArray = hogs
	return (
		<div className="App">
			<Nav />
			<Hogs hogsArray={hogsArray} />
		</div>
	);
}

export default App;
