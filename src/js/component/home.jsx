import React from "react";

import MyNabvar from "./NavBar";
import MyJumbotron from "./Jumbotron";
import MyFooter from "./Footer";
import MyCards from "./MyCards";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<MyNabvar />
			<MyJumbotron />
			<MyCards />
			<MyFooter />	
		</div>
	);
};

export default Home;
