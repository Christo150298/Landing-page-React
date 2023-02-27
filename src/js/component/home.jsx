import React from "react";

import MyNabvar from "./NavBar";
import MyJumbotron from "./Jumbotron";
import MyFooter from "./Footer";
import MyCards from "./MyCards";

//create your first component
const Home = () => {
	return (
		<>
			<MyNabvar />
		<div className="container-fluid">
			<MyJumbotron />
			<MyCards />
		</div>
			<MyFooter />	
		</>
	);
};

export default Home;
