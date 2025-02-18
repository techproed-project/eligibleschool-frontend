import { PageHeader } from "@/components/common/page-header";
import { Spacer } from "@/components/common/spacer";
import { AssistantList } from "@/components/dashboard/assistant/list";
import { getAllAssistantsByPage } from "@/services/assistant-service";
import React from "react";

export const fetchCache = 'default-cache';

const Page = async ({ searchParams }) => {

	const { page } = await searchParams;
	

	const res = await getAllAssistantsByPage(page);
	const data = await res.json();

	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader title="Assistant" />
			<Spacer />
			<AssistantList data={data} />
			<Spacer />
		</>
	);
};

export default Page;
