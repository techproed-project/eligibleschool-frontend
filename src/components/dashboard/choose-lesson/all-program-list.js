"use client";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { DataListHeader } from "../common/data-list-header";
import { getDayLabel } from "@/helpers/misc";
import { formatTimeLT } from "@/helpers/date-time";

export const AllProgramList = ({ allPrograms }) => {
	const [selectedItems, setSelectedItems] = useState([]);

	const header = <DataListHeader title="All Programs" />;

	const formatLessons = (row) => {
		return row.lessonName.map((item) => item.lessonName).join(", ");
	};

	const formatTeachers = (row) => {
		return row.teachers
			.map((item) => `${item.name} ${item.surname}`)
			.join(", ");
	};

	return (
		<Container>
			<DataTable
				dataKey="lessonProgramId"
				lazy
				value={allPrograms}
				showGridlines
				stripedRows
				header={header}
				selection={selectedItems}
				onSelectionChange={(e) => setSelectedItems(e.value)}
			>
				<Column selectionMode="multiple" />
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
					body={formatTeachers}
					header="Teachers"
					bodyClassName="Teachers"
				></Column>
				<Column
					body={(row)=> getDayLabel(row.day)}
					header="Day"
					bodyClassName="Day"
				></Column>
				<Column
					body={(row)=> formatTimeLT(row.startTime)}
					header="Start Time"
					bodyClassName="Start Time"
				></Column>
				<Column
					body={(row)=> formatTimeLT(row.stopTime)}
					header="End Time"
					bodyClassName="End Time"
				></Column>
			</DataTable>
		</Container>
	);
};
