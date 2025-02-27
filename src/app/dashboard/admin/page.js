import { PageHeader } from "@/components/common/page-header";
import { Spacer } from "@/components/common/spacer";
import { AdminList } from "@/components/dashboard/admin/list";
import { wait } from "@/helpers/misc";
import { getAllAdminsByPage } from "@/services/admin-service";
import React from "react";

export const fetchCache = 'default-cache';

const Page = async ({ searchParams }) => {

	const { page } = await searchParams;
	

	const res = await getAllAdminsByPage(page);
	const data = await res.json();

	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader title="Admin" />
			<Spacer />
			<AdminList data={data} />
			<Spacer />
		</>
	);
};

export default Page;
