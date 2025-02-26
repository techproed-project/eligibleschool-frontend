import { PageHeader } from "@/components/common/page-header";
import { Spacer } from "@/components/common/spacer";
import { MeetList } from "@/components/dashboard/meet/list";
import { getAllIMeetsForAdvisorByPage } from "@/services/meet-service";
import React from "react";

export const fetchCache = 'default-cache';

const Page = async ({ searchParams }) => {

	const { page } = await searchParams;
	

	const res = await getAllIMeetsForAdvisorByPage(page);
	const data = await res.json();

	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader title="Meet" />
			<Spacer />
			<MeetList data={data} />
			<Spacer />
		</>
	);
};

export default Page;
