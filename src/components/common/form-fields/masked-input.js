"use client";
import React, { useState } from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { InputMask } from "primereact/inputmask";

export const MaskedInput = (props) => {
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
				as={InputMask}
				{...rest}
			/>
			<FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
		</FormGroup>
	);
};
