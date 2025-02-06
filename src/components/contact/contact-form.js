"use client";
import React from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import "./contact-form.scss";

export const ContactForm = () => {
	return (
		<div className="contact-form">
			<Form>
				<Row className="g-3">
					<Col md={6}>
						<InputGroup className="mb-3">
							<InputGroup.Text id="name">
								<i className="pi pi-user"></i>
							</InputGroup.Text>
							<Form.Control
								name="name"
								placeholder="Your name"
								aria-label="Your name"
								aria-describedby="name"
							/>
						</InputGroup>
					</Col>
					<Col md={6}>
						<InputGroup className="mb-3">
							<InputGroup.Text id="email">
								<i className="pi pi-envelope"></i>
							</InputGroup.Text>
							<Form.Control
								name="email"
								placeholder="Your email"
								aria-label="Your email"
								aria-describedby="email"
							/>
						</InputGroup>
					</Col>
					<Col xs={12}>
						<InputGroup className="mb-3">
							<InputGroup.Text id="subject">
								<i className="pi pi-tag"></i>
							</InputGroup.Text>
							<Form.Control
								name="subject"
								placeholder="Your subject"
								aria-label="Your subject"
								aria-describedby="subject"
							/>
						</InputGroup>
					</Col>
					<Col xs={12}>
						<InputGroup className="mb-3">
							<InputGroup.Text id="message">
								<i className="pi pi-comment"></i>
							</InputGroup.Text>
							<Form.Control
								name="message"
								placeholder="Your message"
								aria-label="Your message"
								aria-describedby="message"
								as="textarea"
							/>
						</InputGroup>
					</Col>
				</Row>
				<Button type="submit" variant="outline-secondary">
					 <i className="pi pi-send"></i> Submit
				</Button>
			</Form>
		</div>
	);
};
