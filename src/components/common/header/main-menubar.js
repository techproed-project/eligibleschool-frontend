"use client";
import React from "react";
import { Container, Navbar, Offcanvas } from "react-bootstrap";
import Logo from "./logo";
import MainMenu from "./main-menu";
import ButtonCallNow from "./button-call-now";
import Image from "next/image";
import { appConfig } from "@/helpers/config";

const MainMenubar = () => {
	return (
		<Navbar expand="lg" className="bg-body-tertiary" sticky="top">
			<Container>
				<Logo />
				<Navbar.Toggle aria-controls="main-menubar" />
				<Navbar.Offcanvas
					id="main-menubar"
					aria-labelledby="main-menubar-title"
					placement="end"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id="main-menubar-title">
							<Image
								src="/img/logos/logo-short.png"
								width="208"
								height="29"
								alt={appConfig.project.name}
							/>
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<MainMenu className="justify-content-center flex-grow-1" />
						<ButtonCallNow />
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
};

export default MainMenubar;
