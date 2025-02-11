"use client";
import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

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

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				{getUser()}
			</Button>

			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>{getUser()}</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					Some text as placeholder. In real life you can have the
					elements you have chosen. Like, text, images, lists, etc.
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};
