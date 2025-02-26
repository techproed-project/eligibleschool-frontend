import { PageHeader } from "@/components/common/page-header";
import { Spacer } from "@/components/common/spacer";
import { MeetCreateForm } from "@/components/dashboard/meet/create-form";
import { getAllStudentsByAdvisor } from "@/services/student-service";
import React from "react";

const Page = async () => {
	const res = await getAllStudentsByAdvisor();
	const data = await res.json();

	let newStudents = [];

	if (Array.isArray(data)) {
		newStudents = data.map((item) => ({
			value: item.userId,
			label: `${item.name} ${item.surname}`,
		}));
	}

	return (
		<>
			<PageHeader title="New Meet" />
			<Spacer />
			<MeetCreateForm students={newStudents} />
			<Spacer />
		</>
	);
};

export default Page;
