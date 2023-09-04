import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Containers/Home";

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	);
};
