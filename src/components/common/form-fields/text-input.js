import React from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

export const TextInput = ({ label, error, className = "mb-3", ...rest }) => {
	return (
		<FormGroup className={className} controlId={rest.name}>
			<FormLabel>{label}</FormLabel>
			<FormControl isInvalid={!!error} size="lg"  {...rest}/>
			<FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
		</FormGroup>
	);
};
