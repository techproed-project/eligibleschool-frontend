import { PageHeader } from "@/components/common/page-header";
import { Spacer } from "@/components/common/spacer";
import { StudentEditForm } from "@/components/dashboard/student/edit-form";
import { getStudentById } from "@/services/student-service";
import { getAllAdvisorTeachers } from "@/services/teacher-service";
import React from "react";

const Page = async ({ params }) => {
	const { id } = await params;

	const dataStudent = (await getStudentById(id)).json();
	const dataTeachers = (await getAllAdvisorTeachers()).json();

	const [student, teachers] = await Promise.all([dataStudent, dataTeachers]);

	const newTeachers = teachers.map((item) => ({
		value: item.advisorTeacherId,
		label: `${item.teacherName} ${item.teacherSurname}`,
	}));


	return (
		<>
			<PageHeader title="Edit Student" />
			<Spacer />
			<StudentEditForm user={student} teachers={newTeachers} />
			<Spacer />
		</>
	);
};

export default Page;
