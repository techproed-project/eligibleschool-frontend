"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";
import { DataListHeader } from "../common/data-list-header";
import DataListToolbar from "../common/data-list-toolbar";
import { deleteTeacherAction } from "@/actions/teacher-action";

export const TeacherList = ({ data }) => {
	const { content, totalElements, pageable, size } = data;
	const { offset } = pageable;

	const router = useRouter();
	const pagePath = "/dashboard/teacher";

	const toolbar = (row) => (
		<DataListToolbar
			deleteAction={deleteTeacherAction}
			id={row.userId}
			editUrl={`${pagePath}/${row.userId}`}
		/>
	);

	const header = (
		<DataListHeader title="Teachers" targetUrl={`${pagePath}/new`} />
	);
	const onPage = (e) => {
		router.push(`${pagePath}?page=${e.page}`);
	};

	return (
		<Container>
			<DataTable
				dataKey="userId"
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
					field="name"
					header="First Name"
					bodyClassName="First Name"
				></Column>
				<Column
					field="surname"
					header="Last Name"
					bodyClassName="Last Name"
				></Column>
				<Column
					field="username"
					header="User Name"
					bodyClassName="User Name"
				></Column>
				<Column header="" body={toolbar} />
			</DataTable>
		</Container>
	);
};
