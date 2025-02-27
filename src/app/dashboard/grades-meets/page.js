import { PageHeader } from "@/components/common/page-header";
import { Spacer } from "@/components/common/spacer";
import { GradeList } from "@/components/dashboard/grades-meets/grade-list";
import { MeetList } from "@/components/dashboard/grades-meets/meet-list";
import { getAllMeetsForStudent } from "@/services/meet-service";
import { getAllInfoForStudentByPage } from "@/services/student-info-service";
import React from "react";

export const fetchCache = "default-cache";

const Page = async ({ searchParams }) => {
	const { page } = await searchParams;

	const dataGrades = (await getAllInfoForStudentByPage(page)).json();
	const dataMeets = (await getAllMeetsForStudent()).json();

	const [grades, meets] = await Promise.all([dataGrades, dataMeets]);

	console.log(meets)

	return (
		<>
			<PageHeader title="Grades &amp; Meets" />
			<Spacer />
			<GradeList grades={grades} />
			<Spacer />
			<MeetList meets={meets} />
			<Spacer />
		</>
	);
};

export default Page;
