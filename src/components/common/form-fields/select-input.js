"use client";
import React, { useState } from "react";
import { FormControl, FormGroup, FormLabel, FormSelect } from "react-bootstrap";

export const SelectInput = (props) => {
	const {
		label,
		error,
		initialValue,
		options,
		optionLabel,
		optionValue,
		className = "mb-3",
		...rest
	} = props;

	const [val, setVal] = useState(initialValue ?? "");

	return (
		<FormGroup className={className} controlId={rest.name}>
			<FormLabel>{label}</FormLabel>
			<FormSelect
				isInvalid={!!error}
				size="lg"
				value={val}
				onChange={(e) => setVal(e.target.value)}
				{...rest}
			>
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
