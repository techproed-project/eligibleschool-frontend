"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";

export const BackButton = ({
	title = "Return Back",
	icon = "chevron-left",
	className = "w-100",
	...rest
}) => {
	const router = useRouter();

	const handleClick = () => {
		router.back();
	};

	return (
		<Button
			type="button"
			className={className}
			size="lg"
			variant="outline-secondary"
			onClick={handleClick}
			{...rest}
		>
			<>
				{icon && <i className={`pi pi-${icon}`}></i>}&nbsp;
				{title}
			</>
		</Button>
	);
};
