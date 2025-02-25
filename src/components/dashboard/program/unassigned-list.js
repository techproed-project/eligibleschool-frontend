"use client";
import React, { useActionState, useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { DataListHeader } from "../common/data-list-header";
import { getDayLabel } from "@/helpers/misc";
import { formatTimeLT } from "@/helpers/date-time";
import { assignProgramToTeacherAction } from "@/actions/teacher-action";
import { initialState } from "@/helpers/form-validation";
import { SelectInput, SubmitButton } from "@/components/common/form-fields";
import { swAlert } from "@/helpers/swal";

export const UnassignedProgramList = ({ programs, teachers }) => {
	const [state, formAction, isLoading] = useActionState(
		assignProgramToTeacherAction,
		initialState
	);

	const [selectedItems, setSelectedItems] = useState([]);

	const header = <DataListHeader title="Program Assignment" />;

	const formatLessons = (row) => {
		return row.lessonName.map((item) => item.lessonName).join(", ");
	};

	const formatDay = (row) => {
		return getDayLabel(row.day);
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
				value={programs}
				showGridlines
				stripedRows
				header={header}
				selection={selectedItems}
				onSelectionChange={(e) => setSelectedItems(e.value)}
				className={
					state?.errors?.lessonProgramId ? "border border-danger" : ""
				}
			>
				<Column
					selectionMode="multiple"
					headerStyle={{ width: "20px" }}
					bodyClassName="Select"
				></Column>
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
			</DataTable>
			{state?.errors?.lessonProgramId && (
				<div className="text-danger mt-2">
					{state?.errors?.lessonProgramId}
				</div>
			)}

			<Form
				action={formAction}
				className="d-flex flex-column flex-md-row align-items-md-start gap-4 mt-5"
			>
				<input
					type="hidden"
					name="lessonProgramId"
					value={JSON.stringify(selectedItems)}
				/>
				<SelectInput
					name="teacherId"
					label="Teacher"
					error={state?.errors?.teacherId}
					options={teachers}
					optionValue="value"
					optionLabel="label"
					defaultValue={state?.data?.teacherId ?? ""}
					key={`teacherId-${isLoading}`}
					className="align-items-end"
				/>
				<SubmitButton
					title="Assign"
					className="w-auto"
					style={{ marginTop: "30px" }}
				/>
			</Form>
		</Container>
	);
};
