import React from "react";

import MyNabvar from "./navBar";
import MyCard from "./myCards";
import MyJumbotron from "./jumbotron";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<MyNabvar />
			<MyJumbotron />
			<MyCard />	
		</div>
	);
};

export default Home;
