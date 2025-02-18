import { PageHeader } from "@/components/common/page-header";
import { Spacer } from "@/components/common/spacer";
import { TermList } from "@/components/dashboard/term/list";
import { getAllTermsByPage } from "@/services/term-service";
import React from "react";

export const fetchCache = 'default-cache';

const Page = async ({ searchParams }) => {

	const { page } = await searchParams;
	

	const res = await getAllTermsByPage(page);
	const data = await res.json();

	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader title="Term" />
			<Spacer />
			<TermList data={data} />
			<Spacer />
		</>
	);
};

export default Page;
