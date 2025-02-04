"use client";
import { appConfig } from "@/helpers/config";
import React from "react";
import { Nav } from "react-bootstrap";

const menuItems = Object.entries(appConfig.contact.info);

const ContactMenu = (props) => {
	return (
		<Nav {...props}>
			{menuItems.map((item) => (
				<Nav.Link href={item[1].url} key={item[0]}>
					<i className={item[1].icon}></i> {item[1].value}
				</Nav.Link>
			))}
		</Nav>
	);
};

export default ContactMenu;
