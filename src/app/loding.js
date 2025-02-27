import { ProgressSpinner } from "primereact/progressspinner";
import React from "react";

const LodingPage = () => {
	return (
		<div className="d-flex justify-content-center align-items-center h-100">
			<ProgressSpinner
				style={{ width: "50px", height: "50px" }}
				strokeWidth="8"
				fill="var(--surface-ground)"
				animationDuration=".5s"
			/>
		</div>
	);
};

export default LodingPage;
