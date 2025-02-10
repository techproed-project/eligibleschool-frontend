"use client";
import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { PasswordInput, TextInput } from "../common/form-fields";

export const LoginForm = () => {
	return (
		<Container>
			<Row>
				<Col>
					<Card>
						<Card.Body>
							<h4>Please enter your username and password</h4>

							<Form>
								<TextInput label="Username" name="username" />
								<PasswordInput
									label="Password"
									name="password"
								/>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};
