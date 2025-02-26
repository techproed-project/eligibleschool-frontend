import { PageHeader } from "@/components/common/page-header";
import { Spacer } from "@/components/common/spacer";
import { AllProgramList } from "@/components/dashboard/choose-lesson/all-program-list";
import {
	getAllPrograms,
	getProgramsByStudent,
} from "@/services/program-service";
import React from "react";

export const fetchCache = "default-cache";

const Page = async () => {
	const dataAllPrograms = (await getAllPrograms()).json();
	const dataStudentPrograms = (await getProgramsByStudent()).json();

	const [allPrograms, studentPrograms] = await Promise.all([
		dataAllPrograms,
		dataStudentPrograms,
	]);

	console.log(allPrograms[0].teachers)

	return (
		<>
			<PageHeader title="Choose Lesson" />
			<Spacer />
			<AllProgramList allPrograms={allPrograms} />
			<Spacer />
		</>
	);
};

export default Page;
