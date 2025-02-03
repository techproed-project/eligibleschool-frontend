"use client";
import { config } from "@/helpers/config";
import React from "react";
import { Nav } from "react-bootstrap";

const menuItems = Object.entries(config.contact.socialMedia);

const SocialMenu = (props) => {
	return (
		<Nav {...props}>
			{menuItems.map((item) => (
				<Nav.Link href={item[1].url} key={item[0]}>
					<i className={item[1].icon}></i> {item[0]}
				</Nav.Link>
			))}
		</Nav>
	);
};

export default SocialMenu;
