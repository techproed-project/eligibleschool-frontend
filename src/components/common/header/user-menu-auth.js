"use client";
import React, { useState } from "react";
import { Button, Nav, Offcanvas } from "react-bootstrap";
import userMenuData from "@/helpers/data/user-menu.json";
import { ButtonLogout } from "./button-logout";
import { usePathname, useRouter } from "next/navigation";

export const UserMenuAuth = ({ session }) => {
	const router = useRouter();
	const pathename = usePathname();

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

	const handleClick = (url) => {
		handleClose();
		router.push(url);
	};

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
							<button
								key={item.link}
								onClick={() => handleClick(item.link)}
								className={`nav-link text-start ${
									pathename === item.link ? "active" : ""
								}`}
							>
								{item.title}
							</button>
						))}
						<ButtonLogout className="mt-4" />
					</Nav>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};
