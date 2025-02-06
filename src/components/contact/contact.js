import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactMenu from "../common/footer/contact-menu";
import "./contact.scss";
import { ContactForm } from "./contact-form";
import { ContactMap } from "./map";

const Contact = () => {
	return (
		<div className="contact">
			<Container>
				<Row>
					<Col lg={7}>
						<h2>Send Message</h2>
						<ContactForm />
					</Col>
					<Col lg={5}>
						<h2>Get in touch</h2>
						<ContactMenu className="flex-column" />
					</Col>
				</Row>
			</Container>

			<ContactMap />
		</div>
	);
};

export default Contact;
