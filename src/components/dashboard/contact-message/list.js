"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";
import { DataListHeader } from "../common/data-list-header";

export const MessageList = ({ data }) => {
	const { content, totalElements, pageable, size } = data;
	const { offset } = pageable;

	const router = useRouter();
	const pagePath = "/dashboard/contact-message";

	const header = <DataListHeader title="Messages" />;
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
					field="name"
					header="Contact Name"
					bodyClassName="Contact Name"
				></Column>
				<Column
					field="email"
					header="Email"
					bodyClassName="Email"
				></Column>
				<Column
					field="subject"
					header="Subject"
					bodyClassName="Subject"
				></Column>
				<Column
					field="message"
					header="Message"
					bodyClassName="Message"
				></Column>
			</DataTable>
		</Container>
	);
};
