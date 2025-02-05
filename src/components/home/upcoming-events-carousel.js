"use client";
import React from "react";
import { Carousel } from "primereact/carousel";
import { EventCard } from "../events/event-card";

export const UpcomingEventsCarousel = ({ data }) => {
	const responsiveOptions = [
		{
			breakpoint: "1600px", // Büyük ekranlar (4 öğe)
			numVisible: 4,
			numScroll: 2,
		},
		{
			breakpoint: "1200px", // Orta büyüklükte ekranlar (3 öğe)
			numVisible: 3,
			numScroll: 1,
		},
		{
			breakpoint: "992px", // Tablet yatay (2 öğe)
			numVisible: 2,
			numScroll: 1,
		},
		{
			breakpoint: "768px", // Tablet dikey (1 öğe)
			numVisible: 1,
			numScroll: 1,
		},
		{
			breakpoint: "576px", // Küçük telefonlar (1 öğe)
			numVisible: 1,
			numScroll: 1,
		},
	];

	const itemTemplate = (item) => {
		return <EventCard {...item} />;
	};

	return (
		<Carousel
			value={data}
			numVisible={4}
			numScroll={1}
			responsiveOptions={responsiveOptions}
			itemTemplate={itemTemplate}
		/>
	);
};
