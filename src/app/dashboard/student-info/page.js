import { PageHeader } from "@/components/common/page-header";
import { Spacer } from "@/components/common/spacer";
import { StudentInfoList } from "@/components/dashboard/student-info/list";
import { getAllInfoForTeacherByPage } from "@/services/student-info-service";
import React from "react";

export const fetchCache = 'default-cache';

const Page = async ({ searchParams }) => {

	const { page } = await searchParams;
	

	const res = await getAllInfoForTeacherByPage(page);
	const data = await res.json();

	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader title="Info" />
			<Spacer />
			<StudentInfoList data={data} />
			<Spacer />
		</>
	);
};

export default Page;
