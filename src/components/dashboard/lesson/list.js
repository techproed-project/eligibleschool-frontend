"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";
import { DataListHeader } from "../common/data-list-header";
import DataListToolbar from "../common/data-list-toolbar";
import { deleteLessonAction } from "@/actions/lesson-action";

export const LessonList = ({ data }) => {
	const { content, totalElements, pageable, size } = data;
	const { offset } = pageable;

	const router = useRouter();
	const pagePath = "/dashboard/lesson";

	const toolbar = (row) => (
		<DataListToolbar deleteAction={deleteLessonAction} id={row.lessonId} />
	);

	const header = (
		<DataListHeader title="Lessons" targetUrl={`${pagePath}/new`} />
	);
	const onPage = (e) => {
		router.push(`${pagePath}?page=${e.page}`);
	};

	const formatCompulsory = (row) => {
		return row.compulsory ? (
			<i className="pi pi-check"></i>
		) : (
			<i className="pi pi-times"></i>
		);
	};

	return (
		<Container>
			<DataTable
				dataKey="lessonId"
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
				/>
				<Column field="lessonName" header="Name"></Column>
				<Column field="creditScore" header="Credit"></Column>
				<Column body={formatCompulsory} header="Compulsory"></Column>

				<Column header="" body={toolbar} />
			</DataTable>
		</Container>
	);
};
