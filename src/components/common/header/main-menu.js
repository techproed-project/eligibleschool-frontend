"use client";
import React from "react";
import { Nav } from "react-bootstrap";
import menuItems from "@/helpers/data/main-menu.json";

const MainMenu = (props) => {
	return (
		<Nav {...props}>
			{menuItems.map((item) => (
				<Nav.Link href={item.link} key={item.link}>
					<i className={item.icon}></i> {item.title}
				</Nav.Link>
			))}
		</Nav>
	);
};

export default MainMenu;
