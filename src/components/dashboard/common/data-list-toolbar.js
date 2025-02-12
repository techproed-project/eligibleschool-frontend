import { swAlert, swConfirm } from "@/helpers/swal";
import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";

const DataListToolbar = (props) => {
	const { editUrl, deleteAction, id } = props;

	const handleDelete = async () => {
		const confirm = await swConfirm("Are you sure to delete?");
		if (!confirm.isConfirmed) return;

		const res = await deleteAction(id);

		swAlert(res.message, res.ok ? "success" : "error");
	};

	return (
		<div className="d-flex justify-content-end align-items-center gap-3">
			{editUrl && (
				<Button variant="link" href={editUrl} as={Link}>
					<i className="pi pi-pen-to-square"></i>
				</Button>
			)}

			<Button variant="link" onClick={handleDelete}>
				<i className="pi pi-trash"></i>
			</Button>
		</div>
	);
};

export default DataListToolbar;
