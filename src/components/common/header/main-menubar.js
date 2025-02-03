"use client"
import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import Logo from "./logo";

const MainMenubar = () => {
	return (
		<Navbar expand="lg" className="bg-body-tertiary mb-3" sticky="top">
			<Container>
				<Logo/>
				<Navbar.Toggle
					aria-controls="main-menubar"
				/>
				<Navbar.Offcanvas
					id="main-menubar"
					aria-labelledby="main-menubar-title"
					placement="end"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title
							id="main-menubar-title"
						>
							Offcanvas
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-end flex-grow-1 pe-3">
							<Nav.Link href="#action1">Home</Nav.Link>
							<Nav.Link href="#action2">Link</Nav.Link>
							
						</Nav>
						
                        Hello

					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
};

export default MainMenubar;
