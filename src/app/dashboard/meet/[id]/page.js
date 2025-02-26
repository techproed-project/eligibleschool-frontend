import { PageHeader } from "@/components/common/page-header";
import { Spacer } from "@/components/common/spacer";
import { MeetEditForm } from "@/components/dashboard/meet/edit-form";
import { getMeetById } from "@/services/meet-service";
import { getAllStudentsByAdvisor } from "@/services/student-service";
import React from "react";

const Page = async ({ params }) => {
	const { id } = await params;

	const meetData = (await getMeetById(id)).json();
	const studentsData = (await getAllStudentsByAdvisor()).json();

	const [meet, students] = await Promise.all([meetData, studentsData]);

	let newStudents = [];

	if (Array.isArray(students)) {
		newStudents = students.map((item) => ({
			value: item.userId,
			label: `${item.name} ${item.surname}`,
		}));
	}

	const studentsOfMeet = meet.object.students.map((item) => item.id);

	return (
		<>
			<PageHeader title="Edit Meet" />
			<Spacer />
			<MeetEditForm
				meet={meet.object}
				students={newStudents}
				studentsOfMeet={studentsOfMeet}
			/>
			<Spacer />
		</>
	);
};

export default Page;
