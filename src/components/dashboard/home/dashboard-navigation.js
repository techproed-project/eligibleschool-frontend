import React from "react";
import userMenuData from "@/helpers/data/user-menu.json";
import { auth } from "@/auth";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

export const DashboardNavigation = async () => {
	const session = await auth();
	const { role } = session.user;

	const userMenu = userMenuData[role.toLowerCase()];

	return (
		<Container>
			<Row xs={1} md={2} lg={3} className="g-4">
				{userMenu.map((item) => (
					<Col key={item.link}>
						<Link href={item.link} className="btn btn-outline-primary w-100">{item.title}</Link>
					</Col>
				))}
			</Row>
		</Container>
	);
};
