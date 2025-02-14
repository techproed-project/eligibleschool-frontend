"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";
import { DataListHeader } from "../common/data-list-header";
import DataListToolbar from "../common/data-list-toolbar";
import { deleteManagerAction } from "@/actions/manager-action";

export const ManagerList = ({ data }) => {
	const { content, totalElements, pageable, size } = data;
	const { offset } = pageable;

	const router = useRouter();

	const toolbar = (row) => (
		<DataListToolbar
			deleteAction={deleteManagerAction}
			id={row.userId}
			editUrl={`/dashboard/manager/${row.userId}`}
		/>
	);

	const header = (
		<DataListHeader title="Managers" targetUrl="/dashboard/manager/new" />
	);
	const onPage = (e) => {
		router.push(`/dashboard/manager?page=${e.page}`);
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
				/>
				<Column field="name" header="First Name"></Column>
				<Column field="surname" header="Last Name"></Column>
				<Column field="username" header="User Name"></Column>
				<Column header="" body={toolbar} />
			</DataTable>
		</Container>
	);
};
