import { PageHeader } from "@/components/common/page-header";
import { Spacer } from "@/components/common/spacer";
import { ProgramList } from "@/components/dashboard/program/list";
import { UnassignedProgramList } from "@/components/dashboard/program/unassigned-list";
import {
	getAllProgramsByPage,
	getUnAssignedPrograms,
} from "@/services/program-service";
import { getAllTeachers } from "@/services/teacher-service";
import React from "react";

export const fetchCache = "default-cache";

const Page = async ({ searchParams }) => {
	const { page } = await searchParams;

	const dataAllPrograms = (await getAllProgramsByPage(page)).json();
	const dataUnAssignedPrograms = (await getUnAssignedPrograms()).json();
	const dataTeachers = (await getAllTeachers(page)).json();

	const [allPrograms, unAssignedPrograms, teachers] = await Promise.all([
		dataAllPrograms,
		dataUnAssignedPrograms,
		dataTeachers,
	]);

	const newTeachers = teachers.map((item) => ({
		label: `${item.name} ${item.surname}`,
		value: item.userId,
	}));

	return (
		<>
			<PageHeader title="Program" />
			<Spacer />
			<ProgramList data={allPrograms} />
			<Spacer />
			<UnassignedProgramList
				programs={unAssignedPrograms}
				teachers={newTeachers}
			/>
			<Spacer />
		</>
	);
};

export default Page;
