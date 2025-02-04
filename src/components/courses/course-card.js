"use client"
import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";
import "./course-card.scss";

export const CourseCard = (props) => {
	const { title, image, user, price, rating } = props;
	return (
		<Card className="course-card">
			<Card.Body>
				<div className="img-container">
					<Image src={`/img/courses/${image}`} fill alt={title} />
				</div>
				<Card.Title>{title}</Card.Title>
			</Card.Body>
			<Card.Footer>
				<span>
					<i className="pi pi-user"></i> {user}
				</span>
				<span>
					<i className="pi pi-chart-line"></i> {rating}
				</span>
				<span>
					<i className="pi pi-dollar"></i> {price}
				</span>
			</Card.Footer>
		</Card>
	);
};
