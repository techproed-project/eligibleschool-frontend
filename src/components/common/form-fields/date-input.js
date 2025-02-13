"use client";
import { Calendar } from "primereact/calendar";
import React, { useState } from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
import "./date-input.scss";

export const DateInput = (props) => {
	const { label, error, initialValue, className = "date-input mb-3", ...rest } = props;

	const [val, setVal] = useState(initialValue ?? "");

	return (
		<FormGroup className={className} controlId={rest.name}>
			<FormLabel>{label}</FormLabel>
			<Calendar value={val} onChange={(e) => setVal(e.value)} className="form-control" {...rest}  />

			<FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
		</FormGroup>
	);
};
