"use client";
import React, { useState } from "react";
import { Button, Nav, Offcanvas } from "react-bootstrap";
import userMenuData from "@/helpers/data/user-menu.json";
import Link from "next/link";

export const UserMenuAuth = ({ session }) => {
	const { name, role } = session.user;

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const getUser = () => {
		return (
			<>
				<i className="pi pi-user"></i> {name}
			</>
		);
	};

	const userMenu = userMenuData[role.toLowerCase()];

	return (
		<>
			<Button variant="primary" size="sm" onClick={handleShow}>
				{getUser()}
			</Button>

			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>{getUser()}</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Nav className="flex-column">
						{userMenu.map((item) => (
							<Nav.Link
								href={item.link}
								key={item.link}
								as={Link}
							>
								{item.title}
							</Nav.Link>
						))}
					</Nav>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};
