"use client";
import React, { useState } from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

export const TextInput = ({ label, error, className = "mb-3", ...rest }) => {
	const [val, setVal] = useState("");

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
