"use client";
import React, { useActionState, useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { DataListHeader } from "../common/data-list-header";
import { formatTimeLT } from "@/helpers/date-time";
import { SubmitButton } from "@/components/common/form-fields";
import { assignProgramToStudentAction } from "@/actions/student-action";
import { initialState } from "@/helpers/form-validation";
import { swAlert } from "@/helpers/swal";
import { getDayLabel } from "@/helpers/misc";

export const AllProgramList = ({ allPrograms }) => {
	const [selectedItems, setSelectedItems] = useState([]);
	const [state, formAction] = useActionState(
		assignProgramToStudentAction,
		initialState
	);

	const header = <DataListHeader title="All Programs" />;

	const formatLessons = (row) => {
		return row.lessonName.map((item) => item.lessonName).join(", ");
	};

	const formatTeachers = (row) => {
		return row.teachers
			.map((item) => `${item.name} ${item.surname}`)
			.join(", ");
	};

	useEffect(() => {
		if (state?.message) {
			swAlert(state.message, state.ok ? "success" : "error");
		}
	}, [state]);

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
				className={
					state?.errors?.lessonProgramId ? "border border-danger" : ""
				}
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
					body={(row) => getDayLabel(row.day)}
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
			</DataTable>

			{state?.errors?.lessonProgramId && (
				<div className="text-danger mt-3">
					{state?.errors?.lessonProgramId}
				</div>
			)}

			<Form className="text-center mt-5" action={formAction}>
				<input
					type="hidden"
					name="lessonProgramId"
					value={JSON.stringify(selectedItems)}
				/>
				<SubmitButton title="Select" className="w-auto" />
			</Form>
		</Container>
	);
};
