"use client";
import React from "react";
import { FormControl, FormGroup, FormLabel, FormSelect } from "react-bootstrap";

export const SelectInput = (props) => {
	const {
		label,
		error,
		options,
		optionLabel,
		optionValue,
		className = "mb-3",
		...rest
	} = props;


	return (
		<FormGroup className={className} controlId={rest.name}>
			<FormLabel>{label}</FormLabel>
			<FormSelect
				isInvalid={!!error}
				size="lg"
				{...rest}
			>
                <option value="" disabled>Select</option>
				{options.map((item) => (
					<option value={item[optionValue]} key={item[optionValue]}>
						{item[optionLabel]}
					</option>
				))}
			</FormSelect>
			<FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
		</FormGroup>
	);
};
