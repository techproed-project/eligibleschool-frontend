"use client";
import Image from "next/image";
import React from "react";
import { Card } from "react-bootstrap";
import "./event-card.scss";

export const EventCard = (props) => {
	const { title, image, location, time } = props;
	return (
		<Card className="event-card">
			<Card.Body>
				<div className="img-container">
					<Image src={`/img/events/${image}`} fill alt={title} />
				</div>
				<Card.Subtitle>
					<span>
						<i className="pi pi-user"></i> {time}
					</span>
					<span>
						<i className="pi pi-chart-line"></i> {location}
					</span>
				</Card.Subtitle>
				<Card.Title>{title}</Card.Title>
			</Card.Body>
		</Card>
	);
};
