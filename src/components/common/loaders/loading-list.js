"use client";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Skeleton } from "primereact/skeleton";
import React from "react";
import { Container, Placeholder } from "react-bootstrap";

export const LoadingList = ({ rowCount = 5, colCount = 5 }) => {
	const rows = Array.from({ length: rowCount }, (_, i) => i + 1);
	const columns = Array.from({ length: colCount }, (_, i) => i + 1);

	const header = (
		<div className="d-flex justify-content-between align-items-center">
			<h2>
				<Skeleton width="10rem" height="3rem" />
			</h2>

			<Skeleton width="5rem" height="3rem" />
		</div>
	);

	return (
		<Container>
			<DataTable value={rows} showGridlines stripedRows header={header}>
				<Column
					header="#"
					body={(row, options) => options.rowIndex + 1}
					headerStyle={{ width: "20px" }}
					bodyClassName="index"
				/>
				{columns.map((item) => (
					<Column
						key={item}
						header={<Skeleton width="100%" height="2rem" />}
						body={
							<Placeholder animation="glow">
								<Placeholder xs={6} />
							</Placeholder>
						}
						bodyClassName="Loading..."
					></Column>
				))}
			</DataTable>
		</Container>
	);
};
