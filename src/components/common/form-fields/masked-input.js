"use client";
import React from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { InputMask } from "primereact/inputmask";

export const MaskedInput = (props) => {
	const { label, error, className = "mb-3", ...rest } = props;

	return (
		<FormGroup className={className} controlId={rest.name}>
			<FormLabel>{label}</FormLabel>

			<FormControl
				isInvalid={!!error}
				size="lg"
				as={InputMask}
				{...rest}
			/>
			<FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
		</FormGroup>
	);
};
