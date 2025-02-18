import Link from "next/link";
import React from "react";

export const DataListHeader = ({ title, targetUrl, linkText = "New" }) => {
	return (
		<div className="d-flex justify-content-between align-items-center">
			<h2>{title}</h2>
			{targetUrl && (
				<Link href={targetUrl} className="btn btn-primary">
					{linkText}
				</Link>
			)}
		</div>
	);
};
