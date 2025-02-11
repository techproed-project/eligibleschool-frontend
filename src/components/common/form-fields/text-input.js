"use client";
import React, { useState } from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

export const TextInput = (props) => {
	const { label, error, initialValue, className = "mb-3", ...rest } = props;

	const [val, setVal] = useState(initialValue ?? "");

	return (
		<FormGroup className={className} controlId={rest.name}>
			<FormLabel>{label}</FormLabel>
			<FormControl
				isInvalid={!!error}
				size="lg"
				value={val}
				onChange={(e) => setVal(e.target.value)}
				{...rest}
			/>
			<FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
		</FormGroup>
	);
};
