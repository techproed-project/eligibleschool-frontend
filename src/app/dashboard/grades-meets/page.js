import { PageHeader } from "@/components/common/page-header";
import { Spacer } from "@/components/common/spacer";
import { getAllMeetsForStudent } from "@/services/meet-service";
import { getAllInfoForStudentByPage } from "@/services/student-info-service";
import React from "react";

export const fetchCache = 'default-cache';

const Page = async ({ searchParams }) => {

	const { page } = await searchParams;
	

	const dataGrades = (await getAllInfoForStudentByPage(page)).json();
	const dataMeets = (await getAllMeetsForStudent(page)).json();

	const [grades, meets] = await Promise.all([
		dataGrades,
		dataMeets,
	]);


	return (
		<>
			<PageHeader title="Grades &amp; Meets" />
			<Spacer />
			
			<Spacer />
		</>
	);
};

export default Page;
