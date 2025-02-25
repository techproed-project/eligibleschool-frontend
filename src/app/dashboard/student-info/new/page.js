import { PageHeader } from "@/components/common/page-header";
import { Spacer } from "@/components/common/spacer";
import { StudentCreateForm } from "@/components/dashboard/student/create-form";
import { getAllAdvisorTeachers } from "@/services/teacher-service";
import React from "react";

const Page = async () => {
	const res = await getAllAdvisorTeachers();
	const data = await res.json();

	const teachers = data.map((item) => ({
		value: item.advisorTeacherId,
		label: `${item.teacherName} ${item.teacherSurname}`,
	}));

	return (
		<>
			<PageHeader title="New Student" />
			<Spacer />
			<StudentCreateForm teachers={teachers} />
			<Spacer />
		</>
	);
};

export default Page;
