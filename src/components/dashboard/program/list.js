"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";
import { DataListHeader } from "../common/data-list-header";
import DataListToolbar from "../common/data-list-toolbar";
import { deleteProgramAction } from "@/actions/program-action";
import { getDayLabel } from "@/helpers/misc";
import { formatTimeLT } from "@/helpers/date-time";

export const ProgramList = ({ data }) => {
	const { content, totalElements, pageable, size } = data;
	const { offset } = pageable;

	const router = useRouter();
	const pagePath = "/dashboard/program";

	const toolbar = (row) => (
		<DataListToolbar
			deleteAction={deleteProgramAction}
			id={row.lessonProgramId}
		/>
	);

	const header = (
		<DataListHeader title="Programs" targetUrl={`${pagePath}/new`} />
	);
	const onPage = (e) => {
		router.push(`${pagePath}?page=${e.page}`);
	};

	const formatLessons = (row) => {
		return row.lessonName.map((item) => item.lessonName).join(", ");
	};

	const formatDay = (row) => {
		return getDayLabel(row.day);
	};

	return (
		<Container>
			<DataTable
				dataKey="lessonProgramId"
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
					body={formatLessons}
					header="Lessons"
					bodyClassName="Lessons"
				></Column>
				<Column
					body={formatDay}
					header="Day"
					bodyClassName="Day"
				></Column>
				<Column
					body={(row) => formatTimeLT(row.startTime)}
					header="Start Time"
					bodyClassName="Start Time"
				></Column>
				<Column
					body={(row) => formatTimeLT(row.stopTime)}
					header="End Time"
					bodyClassName="End Time"
				></Column>
				<Column header="" body={toolbar} />
			</DataTable>
		</Container>
	);
};
