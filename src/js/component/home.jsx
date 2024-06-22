import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron/>
		</div>
	);
};

export default Home;
