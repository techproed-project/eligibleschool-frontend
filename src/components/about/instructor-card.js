"use client";
import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";
import "./instructor-card.scss";

export const InstructorCard = (props) => {
	const { firstName, lastName, title, image } = props;

	return (
		<Card className="instructor-card">
			<Image
				src={`/img/instructors/${image}`}
				width={400}
				height={500}
				alt={`${firstName} ${lastName}`}
				className="card-img-top card-img-bottom img-fluid"
			/>

			<Card.Title>
				<h4>
					{firstName} {lastName}
				</h4>
				<h6>
					<i>{title}</i>
				</h6>
			</Card.Title>
		</Card>
	);
};
