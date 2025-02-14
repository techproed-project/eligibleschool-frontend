"use client";
import { Calendar } from "primereact/calendar";
import React, { useEffect, useState } from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
import "./date-input.scss";

export const DateInput = (props) => {
	const {
		label,
		error,
		defaultValue,
		className = "date-input mb-3",
		...rest
	} = props;
	const [val, setVal] = useState("");

	useEffect(() => {
		if (defaultValue) {
			setVal(new Date(defaultValue));
		}
	}, [defaultValue]);

	return (
		<FormGroup className={className} controlId={rest.name}>
			<FormLabel>{label}</FormLabel>

			<FormControl
				isInvalid={!!error}
				size="lg"
				as={Calendar}
				value={val}
				{...rest}
			/>

			<FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
		</FormGroup>
	);
};
