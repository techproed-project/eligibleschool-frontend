import { PageHeader } from "@/components/common/page-header";
import { Spacer } from "@/components/common/spacer";
import { TeacherCreateForm } from "@/components/dashboard/teacher/create-form";
import { getUnAssignedPrograms } from "@/services/program-service";
import React from "react";

const Page = async () => {
	const res = await getUnAssignedPrograms();
	const data = await res.json();

	const programs = data.map((item) => ({
		value: item.lessonProgramId,
		label: item.lessonName.map((lesson) => lesson.lessonName).join(", "),
	}));

	return (
		<>
			<PageHeader title="New Teacher" />
			<Spacer />
			<TeacherCreateForm programs={programs} />
			<Spacer />
		</>
	);
};

export default Page;
