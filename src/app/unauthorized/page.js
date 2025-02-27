import { ButtonLogout } from "@/components/common/header/button-logout";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Page = () => {
	return (
		<Container className="my-4">
			<Row
				className="align-items-center text-center text-md-start"
				xs={1}
				md={2}
			>
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
					<h2>Unauthorized Access</h2>
					<p>
						You do not have the necessary permissions to access this
						page. This may be due to insufficient user privileges or
						an expired session. If you believe this is an error,
						please contact the administrator for further assistance.
						Alternatively, you can try logout and signing in with an
						account that has the appropriate access rights.
					</p>

					<ButtonLogout />
				</Col>
			</Row>
		</Container>
	);
};

export default Page;
