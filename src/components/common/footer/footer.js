import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../header/logo";
import MainMenu from "../header/main-menu";
import SocialMenu from "./social-menu";
import ContactMenu from "./contact-menu";
import { appConfig } from "@/helpers/config";
import "./footer.scss";

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row className="g-4">
					<Col xs={12}>
						<Logo />
						<p className="mt-3">{appConfig.project.description}</p>
					</Col>

          <Col xs={6} lg>
            <h3>Links</h3>
            <MainMenu className="flex-column" />
          </Col>

          <Col xs={6} lg>
            <h3>Social</h3>
            <SocialMenu className="flex-column" />
          </Col>

          <Col lg>
            <h3>Contact</h3>
            <ContactMenu className="flex-column" />
          </Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
