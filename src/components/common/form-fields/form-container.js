import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const FormContainer = ({ children }) => {
	return (
		<Container>
			<Row className="justify-content-center">
				<Col md={7} lg={5}>
					{children}
				</Col>
			</Row>
		</Container>
	);
};
