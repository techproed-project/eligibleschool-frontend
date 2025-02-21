import { PageHeader } from "@/components/common/page-header";
import { Spacer } from "@/components/common/spacer";
import { TeacherEditForm } from "@/components/dashboard/teacher/edit-form";
import { getAllPrograms } from "@/services/program-service";
import { getTeacherById } from "@/services/teacher-service";
import React from "react";

const Page = async ({ params }) => {
	const { id } = await params;

	const dataTeacher = (await getTeacherById(id)).json();
	const dataPrograms = (await getAllPrograms()).json();

	const [teacher, programs] = await Promise.all([dataTeacher, dataPrograms]);

	const newPrograms = programs.map((item) => ({
		value: item.lessonProgramId,
		label: item.lessonName.map((lesson) => lesson.lessonName).join(", "),
	}));



	return (
		<>
			<PageHeader title="Edit Teacher" />
			<Spacer />
			<TeacherEditForm user={teacher?.object} programs={newPrograms} />
			<Spacer />
		</>
	);
};

export default Page;
