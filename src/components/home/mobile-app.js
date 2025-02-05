import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./mobile-app.scss";

export const MobileApp = () => {
	return (
		<Container className="mobile-app">
			<Row>
				<Col lg={7}>
					<h2>Are you ready to start your online course?</h2>
				</Col>
				<Col lg={5}>
					<a
						href="https://www.apple.com/app-store/"
						target="_blank"
						className="btn btn-outline-dark me-3"
					>
						<i className="pi pi-apple"></i> App Store
					</a>

					<a
						href="https://play.google.com/store/apps"
						target="_blank"
						className="btn btn-outline-dark"
					>
						<i className="pi pi-android"></i> Play Store
					</a>
				</Col>
			</Row>
		</Container>
	);
};
