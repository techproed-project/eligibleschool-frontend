import { PageHeader } from "@/components/common/page-header";
import { Spacer } from "@/components/common/spacer";
import { StudentList } from "@/components/dashboard/student/list";
import { getAllStudentsByPage } from "@/services/student-service";
import React from "react";

export const fetchCache = 'default-cache';

const Page = async ({ searchParams }) => {

	const { page } = await searchParams;
	

	const res = await getAllStudentsByPage(page);
	const data = await res.json();

	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader title="Student" />
			<Spacer />
			<StudentList data={data} />
			<Spacer />
		</>
	);
};

export default Page;
