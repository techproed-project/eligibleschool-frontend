import React from "react";
import events from "@/helpers/data/events.json";
import SectionHeader from "../common/section-header";
import { Container } from "react-bootstrap";
import { UpcomingEventsCarousel } from "./upcoming-events-carousel";

export const UpcomingEvents = () => {
	const upcomingEvents = events.filter(
		(event) => new Date(`${event.date} ${event.time}`) > new Date()
	);


	return (
		<Container>
			<SectionHeader title="Upcoming Events" />
			<UpcomingEventsCarousel data={upcomingEvents} />
		</Container>
	);
};
