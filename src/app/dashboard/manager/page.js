import { PageHeader } from "@/components/common/page-header";
import { Spacer } from "@/components/common/spacer";
import { ManagerList } from "@/components/dashboard/manager/list";
import { getAllManagersByPage } from "@/services/manager-service";
import React from "react";

export const fetchCache = 'default-cache';

const Page = async ({ searchParams }) => {

	const { page } = await searchParams;
	

	const res = await getAllManagersByPage(page);
	const data = await res.json();

	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader title="Manager" />
			<Spacer />
			<ManagerList data={data} />
			<Spacer />
		</>
	);
};

export default Page;
