"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";
import { DataListHeader } from "../common/data-list-header";

export const AdminList = ({ data }) => {
	const { content, totalElements, pageable, size } = data;
	const { offset } = pageable;

	const router = useRouter();

	const header = (
		<DataListHeader title="Admins" targetUrl="/dashboard/admin/new" />
	);
	const onPage = (e) => {
		router.push(`/dashboard/admin?page=${e.page}`);
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
				/>
				<Column field="name" header="First Name"></Column>
				<Column field="surname" header="Last Name"></Column>
				<Column field="username" header="User Name"></Column>
			</DataTable>
		</Container>
	);
};
