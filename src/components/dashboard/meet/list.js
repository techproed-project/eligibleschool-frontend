"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";
import { DataListHeader } from "../common/data-list-header";
import DataListToolbar from "../common/data-list-toolbar";
import { deleteMeetAction } from "@/actions/meet-action";
import { formatDatell, formatTimeLT } from "@/helpers/date-time";

export const MeetList = ({ data }) => {
	const { content, totalElements, pageable, size } = data;
	const { offset } = pageable;

	const router = useRouter();
	const pagePath = "/dashboard/meet";

	const toolbar = (row) => (
		<DataListToolbar
			deleteAction={deleteMeetAction}
			id={row.id}
			editUrl={`${pagePath}/${row.id}`}
		/>
	);

	const header = (
		<DataListHeader title="Meets" targetUrl={`${pagePath}/new`} />
	);
	const onPage = (e) => {
		router.push(`${pagePath}?page=${e.page}`);
	};

	const formatStudent = (row) => {
		const { name, surname } = row.studentResponse;
		return `${name} ${surname}`;
	};
	return (
		<Container>
			<DataTable
				dataKey="id"
				lazy
				value={content}
				showGridlines
				stripedRows
				paginator
				rows={size}
				totalRecords={totalElements}
				first={offset}
				onPage={onPage}
				header={header}
			>
				<Column
					header="#"
					body={(row, options) => options.rowIndex + 1}
					headerStyle={{ width: "20px" }}
					bodyClassName="index"
				/>
				<Column
					body={(row) => formatDatell(row.date)}
					header="Date"
					bodyClassName="Date"
				></Column>
				<Column
					body={(row) => formatTimeLT(row.startTime)}
					header="Start"
					bodyClassName="Start"
				></Column>
				<Column
					body={(row) => formatTimeLT(row.stopTime)}
					header="End"
					bodyClassName="End"
				></Column>
				<Column
					field="description"
					header="Description"
					bodyClassName="Description"
				></Column>

				<Column header="" body={toolbar} />
			</DataTable>
		</Container>
	);
};
