import React from "react";
import { Col, Form, Row } from "react-bootstrap";

export const ContactForm = () => {
	return (
		<div>
			<Form>
				<Row>
					<Col>
						<InputGroup className="mb-3">
							<InputGroup.Text id="basic-addon1">
								@
							</InputGroup.Text>
							<Form.Control
								placeholder="Username"
								aria-label="Username"
								aria-describedby="basic-addon1"
							/>
						</InputGroup>
					</Col>
				</Row>
			</Form>
		</div>
	);
};
