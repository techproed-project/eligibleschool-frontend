"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";
import { DataListHeader } from "../common/data-list-header";
import DataListToolbar from "../common/data-list-toolbar";
import { deleteTermAction } from "@/actions/term-action";
import { getTermLabel } from "@/helpers/misc";
import { formatDatell } from "@/helpers/date-time";

export const TermList = ({ data }) => {
	const { content, totalElements, pageable, size } = data;
	const { offset } = pageable;

	const router = useRouter();
	const pagePath = "/dashboard/education-term";

	const toolbar = (row) => (
		<DataListToolbar deleteAction={deleteTermAction} id={row.id} />
	);

	const header = (
		<DataListHeader title="Terms" targetUrl={`${pagePath}/new`} />
	);
	const onPage = (e) => {
		router.push(`${pagePath}?page=${e.page}`);
	};

	const formatTerm = (row) => {
		return getTermLabel(row.term);
	};

	const formatDate = (date) => {
		return formatDatell(date);
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
				/>
				<Column body={formatTerm} header="Term"></Column>
				<Column
					body={(row) => formatDate(row.startDate)}
					header="Start Date"
				></Column>
				<Column
					body={(row) => formatDate(row.endDate)}
					header="End Date"
				></Column>
				<Column
					body={(row) => formatDate(row.lastRegistrationDate)}
					header="Last Registration Date"
				></Column>
				<Column header="" body={toolbar} />
			</DataTable>
		</Container>
	);
};
