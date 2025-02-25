import { PageHeader } from "@/components/common/page-header";
import { Spacer } from "@/components/common/spacer";
import { StudentInfoCreateForm } from "@/components/dashboard/student-info/create-form";
import { formatDateMY } from "@/helpers/date-time";
import { getTermLabel } from "@/helpers/misc";
import { getAllLessons } from "@/services/lesson-service";
import { getAllStudentsByAdvisor } from "@/services/student-service";
import { getAllTerms } from "@/services/term-service";
import React from "react";

const Page = async () => {
	const studentsData = (await getAllStudentsByAdvisor()).json();
	const lessonsData = (await getAllLessons()).json();
	const termsData = (await getAllTerms()).json();

	const [students, lessons, terms] = await Promise.all([
		studentsData,
		lessonsData,
		termsData,
	]);

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
			<PageHeader title="New Info" />
			<Spacer />
			<StudentInfoCreateForm
				students={newStudents}
				lessons={lessons}
				terms={newTerms}
			/>
			<Spacer />
		</>
	);
};

export default Page;
