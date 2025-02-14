"use client";
import { Calendar } from "primereact/calendar";
import React from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
import "./date-input.scss";

export const DateInput = (props) => {
	const { label, error, className = "date-input mb-3", ...rest } = props;

	return (
		<FormGroup className={className} controlId={rest.name}>
			<FormLabel>{label}</FormLabel>

			<FormControl
				isInvalid={!!error}
				size="lg"
				as={Calendar}
				{...rest}
			/>

			<FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
		</FormGroup>
	);
};
