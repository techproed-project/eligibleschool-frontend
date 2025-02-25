import { PageHeader } from "@/components/common/page-header";
import { Spacer } from "@/components/common/spacer";
import { StudentInfoEditForm } from "@/components/dashboard/student-info/edit-form";
import { formatDateMY } from "@/helpers/date-time";
import { getTermLabel } from "@/helpers/misc";
import { getAllLessons } from "@/services/lesson-service";
import { getStudentInfoById } from "@/services/student-info-service";
import { getAllStudentsByAdvisor } from "@/services/student-service";
import { getAllTerms } from "@/services/term-service";
import React from "react";

const Page = async ({ params }) => {
	const { id } = await params;

	const infoData = (await getStudentInfoById(id)).json();
	const studentsData = (await getAllStudentsByAdvisor()).json();
	const lessonsData = (await getAllLessons()).json();
	const termsData = (await getAllTerms()).json();

	const [info, students, lessons, terms] = await Promise.all([
		infoData,
		studentsData,
		lessonsData,
		termsData,
	]);


	const newInfo = {
		...info,
		studentId: info.studentResponse.userId
	}

	let newStudents = [];

	if (Array.isArray(students)) {
		newStudents = students.map((item) => ({
			value: item.userId,
			label: `${item.name} ${item.surname}`,
		}));
	}

	const newTerms = terms.map((item) => ({
		value: item.id,
		label: `${getTermLabel(item.term)} - ${formatDateMY(item.startDate)}`,
	}));

	return (
		<>
			<PageHeader title="Edit Info" />
			<Spacer />
			<StudentInfoEditForm
				info={newInfo}
				students={newStudents}
				lessons={lessons}
				terms={newTerms}
			/>
			<Spacer />
		</>
	);
};

export default Page;
