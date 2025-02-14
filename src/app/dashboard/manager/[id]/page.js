import { PageHeader } from "@/components/common/page-header";
import { Spacer } from "@/components/common/spacer";
import { ManagerEditForm } from "@/components/dashboard/manager/edit-form";
import { getManagerById } from "@/services/manager-service";
import React from "react";

const Page = async ({ params }) => {
	const { id } = await params;

	const res = await getManagerById(id);
	const data = await res.json();

	if (!res.ok) throw new Error(data?.message);

	return (
		<>
			<PageHeader title="Edit Manager" />
			<Spacer />
			<ManagerEditForm user={data?.object} />
			<Spacer />
		</>
	);
};

export default Page;
