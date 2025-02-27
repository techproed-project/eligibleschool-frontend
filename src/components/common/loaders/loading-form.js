import { Skeleton } from "primereact/skeleton";
import React from "react";

export const LoadingForm = ({ inputCount = 5 }) => {
	const inputs = Array.from({ length: inputCount }, (_, index) => index);

	return (
		<FormContainer>
			{inputs.map((item) => (
				<div key={item}>
					<Skeleton width="2rem" height="1rem" />
					<Skeleton width="100%" height="2rem" />
				</div>
			))}

			<ButtonGroup className="w-100">
				<Skeleton width="100%" height="2rem" />
				<Skeleton width="100%" height="2rem" />
			</ButtonGroup>
		</FormContainer>
	);
};
