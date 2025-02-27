import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const NotFound = () => {
	return (
		<Container className="my-4">
			<Row className="align-items-center text-center text-md-start" xs={1} md={2}>
				<Col>
					<Image
						src="/img/errors/error.png"
						alt="error"
						width={500}
						height={500}
                        className="img-fluid"
					/>
				</Col>
				<Col>
					<h2>Page not found</h2>
					<p>
						The requested page could not be found on our server. We
						apologize for any inconvenience. Please check the URL
						for errors or return to the homepage. If you believe
						this is an error, kindly contact our support team for
						assistance. Thank you for your understanding.
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default NotFound;
