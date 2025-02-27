import { Skeleton } from "primereact/skeleton";
import React from "react";
import { FormContainer } from "../form-fields";
import { ButtonGroup } from "react-bootstrap";

export const LoadingForm = ({ inputCount = 5 }) => {
	const inputs = Array.from({ length: inputCount }, (_, index) => index);

	return (
		<FormContainer>
			{inputs.map((item) => (
				<div key={item} className="mb-3">
					<Skeleton width="5rem" height="1.5rem" className="mb-2" />
					<Skeleton width="100%" height="3rem" />
				</div>
			))}

			<ButtonGroup className="w-100">
				<Skeleton width="100%" height="3rem" />
				<Skeleton width="100%" height="3rem" />
			</ButtonGroup>
		</FormContainer>
	);
};
