"use client";
import React, { useActionState, useEffect, useRef, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import "./contact-form.scss";
import { createContactAction } from "@/actions/contact-actions";
import { initialState } from "@/helpers/form-validation";
import { swAlert } from "@/helpers/swal";

export const ContactForm = () => {

	const [state, formAction] = useActionState(
		createContactAction,
		initialState
	);

	const refForm = useRef(null);

	
	useEffect(() => {
		if (state.message) {
			if (state.ok) {
				swAlert(state.message, "success");
				refForm.current.reset();
			} else {
				swAlert(state.message, "error");
			}
		}
	}, [state.message]);

	return (
		<div className="contact-form">
			<Form action={formAction} ref={refForm}>
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
								isInvalid={!!state?.errors?.name}
								defaultValue={state?.data?.name ?? ""}
							/>
							<Form.Control.Feedback type="invalid">
								{state?.errors?.name}
							</Form.Control.Feedback>
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
								isInvalid={!!state?.errors?.email}
								defaultValue={state?.data?.email ?? ""}
							/>
							<Form.Control.Feedback type="invalid">
								{state?.errors?.email}
							</Form.Control.Feedback>
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
								isInvalid={!!state?.errors?.subject}
								defaultValue={state?.data?.subject ?? ""}
							/>
							<Form.Control.Feedback type="invalid">
								{state?.errors?.subject}
							</Form.Control.Feedback>
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
								isInvalid={!!state?.errors?.message}
								defaultValue={state?.data?.message ?? ""}
							/>
							<Form.Control.Feedback type="invalid">
								{state?.errors?.message}
							</Form.Control.Feedback>
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
