"use client";
import React, { useState } from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { MultiSelect } from "primereact/multiselect";

export const MultipleSelectInput = (props) => {

	const {
		id,
		label,
		error,
		options,
		optionLabel,
		optionValue,
		values,
		className = "mb-3",
		...rest
	} = props;

	const [selectedItems, setSelectedItems] = useState(values || []);

	return (
		<FormGroup className={className} controlId={rest.name}>
			<input type="hidden" name={id} value={JSON.stringify(selectedItems)}/>
			<FormLabel>{label}</FormLabel>

			<FormControl
				as={MultiSelect}
				value={selectedItems}
				onChange={(e) => setSelectedItems(e.value)}
				options={options}
				optionLabel={optionLabel}
				optionValue={optionValue}
				display="chip"
				placeholder="Select"
				isInvalid={!!error}
				{...rest}
			/>

			<FormControl.Feedback type="invalid">{error}</FormControl.Feedback>
		</FormGroup>
	);
};
