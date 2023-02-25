import React from "react";

import MyNabvar from "./navBar";
import MyCard from "./myCards";
import MyJumbotron from "./jumbotron";
import MyFooter from "./footer";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<MyNabvar />
			<MyJumbotron />
			<MyCard />
			<MyFooter />	
		</div>
	);
};

export default Home;
