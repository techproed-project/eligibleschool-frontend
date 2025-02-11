import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export const AdminList = ({data}) => {

    const { content } = data;

	return (
		<Container>
			<DataTable value={content}>
				<Column field="username" header="User Name"></Column>
				
			</DataTable>
		</Container>
	);
};
