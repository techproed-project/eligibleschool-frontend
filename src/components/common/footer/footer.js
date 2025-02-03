import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../header/logo";
import { config } from "@/helpers/config";
import MainMenu from "../header/main-menu";
import SocialMenu from "./social-menu";
import ContactMenu from "./contact-menu";

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row>
					<Col>
						<Logo />
						<p>{config.project.description}</p>
					</Col>

          <Col>
            <h3>Links</h3>
            <MainMenu className="flex-column" />
          </Col>

          <Col>
            <h3>Social</h3>
            <SocialMenu className="flex-column" />
          </Col>

          <Col>
            <h3>Contact</h3>
            <ContactMenu className="flex-column" />
          </Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
