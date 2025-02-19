import { PageHeader } from "@/components/common/page-header";
import { Spacer } from "@/components/common/spacer";
import { getAllProgramsByPage } from "@/services/program-service";
import React from "react";

export const fetchCache = 'default-cache';

const Page = async ({ searchParams }) => {

	const { page } = await searchParams;
	

	const res = await getAllProgramsByPage(page);
	const data = await res.json();

	console.log(data.content[0].lessonName)
	console.log(data)

	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader title="Program" />
			<Spacer />
			
			<Spacer />
		</>
	);
};

export default Page;
