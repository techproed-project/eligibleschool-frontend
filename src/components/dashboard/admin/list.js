import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export const AdminList = ({data}) => {

    const { content } = data;

	console.log(content)

	return (
		<Container>
			<DataTable value={content} showGridlines stripedRows>
				<Column field="name" header="First Name"></Column>
				<Column field="surname" header="Last Name"></Column>
				<Column field="username" header="User Name"></Column>
				
			</DataTable>
		</Container>
	);
};
