"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";
import { DataListHeader } from "../common/data-list-header";

export const GradeList = ({ grades }) => {
	const { content, totalElements, pageable, size } = grades;
	const { offset } = pageable;

	const router = useRouter();
	const pagePath = "/dashboard/grades-meets";

	const header = <DataListHeader title="Grades" />;
	const onPage = (e) => {
		router.push(`${pagePath}?page=${e.page}`);
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
					field="lessonName"
					header="Lesson"
					bodyClassName="Lesson"
				></Column>
				<Column
					field="absentee"
					header="Absentee"
					bodyClassName="Absentee"
				></Column>
				<Column
					field="midtermExam"
					header="Midterm Exam"
					bodyClassName="Midterm Exam"
				></Column>
				<Column
					field="finalExam"
					header="Final Exam"
					bodyClassName="Final Exam"
				></Column>

				<Column
					field="average"
					header="Average"
					bodyClassName="Average"
				></Column>
				<Column
					field="creditScore"
					header="Credit"
					bodyClassName="Credit"
				></Column>
				<Column
					field="infoNote"
					header="Info"
					bodyClassName="Info"
				></Column>
			</DataTable>
		</Container>
	);
};
