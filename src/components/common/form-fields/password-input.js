"use client";
import React, { useState } from "react";
import { FormControl, FormGroup, FormLabel, InputGroup } from "react-bootstrap";

export const PasswordInput = (props) => {
	const { label, error, initialValue, className = "mb-3", ...rest } = props;
	const [type, setType] = useState("password");
	const [val, setVal] = useState(initialValue ?? "");

	const handleClick = () => {
		setType((prev) => (prev === "password" ? "text" : "password"));
	};

	return (
		<FormGroup className={className} controlId={rest.name}>
			<FormLabel>{label}</FormLabel>

			<InputGroup>
				<FormControl
					isInvalid={!!error}
					size="lg"
					type={type}
					value={val}
					onChange={(e) => setVal(e.target.value)}
					{...rest}
				/>
				<InputGroup.Text
					id="password"
					onClick={handleClick}
					style={{ cursor: "pointer" }}
				>
					{type === "password" ? (
						<i className="pi pi-eye-slash"></i>
					) : (
						<i className="pi pi-eye"></i>
					)}
				</InputGroup.Text>
				<FormControl.Feedback type="invalid">
					{error}
				</FormControl.Feedback>
			</InputGroup>
		</FormGroup>
	);
};
