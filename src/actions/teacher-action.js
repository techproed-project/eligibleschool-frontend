"use server";

import {
	convertFormDataToJSON,
	response,
	transformYupErrors,
	YupValidationError,
} from "@/helpers/form-validation";
import { ProgramAssignmentSchema } from "@/helpers/schemes/program-assignment-schema";
import { TeacherSchema } from "@/helpers/schemes/teacher-schema";
import {
	assignProgramToTeacher,
	createTeacher,
	deleteTeacher,
	updateTeacher,
} from "@/services/teacher-service";
import { revalidatePath } from "next/cache";

export const createTeacherAction = async (prevState, formData) => {
	const fields = convertFormDataToJSON(formData);

	try {
		TeacherSchema.validateSync(fields, { abortEarly: false });

		const payload = {
			...fields,
			lessonsIdList: JSON.parse(fields.lessonsIdList),
		};

		const res = await createTeacher(payload);
		const data = await res.json();

		if (!res.ok) {
			return response(false, fields, data?.message, data?.validations);
		}

		revalidatePath("/dashboard/teacher");
		revalidatePath("/dashboard/program");


		return response(true, fields, "Teacher was created");
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner, fields);
		}

		throw err;
	}
};

export const updateTeacherAction = async (prevState, formData) => {
	const fields = convertFormDataToJSON(formData);

	try {
		TeacherSchema.validateSync(fields, { abortEarly: false });

		const payload = {
			...fields,
			lessonsIdList: JSON.parse(fields.lessonsIdList),
		};

		const res = await updateTeacher(payload);
		const data = await res.json();

		if (!res.ok) {
			return response(false, fields, data?.message, data?.validations);
		}

		revalidatePath("/dashboard/teacher");
		revalidatePath("/dashboard/program");
		
		return response(true, fields, "Teacher was updated");
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner, fields);
		}

		throw err;
	}
};

export const assignProgramToTeacherAction = async (prevState, formData) => {
	const fields = convertFormDataToJSON(formData);

	try {
		
		ProgramAssignmentSchema.validateSync(fields, { abortEarly: false });

		fields.lessonProgramId = JSON.parse(fields.lessonProgramId);

		const payload = {
			...fields,
			lessonProgramId: fields.lessonProgramId.map(
				(item) => item.lessonProgramId
			),
		};


		const res = await assignProgramToTeacher(payload);
		const data = await res.json();

		if (!res.ok) {
			return response(false, fields, data?.message, data?.validations);
		}

		revalidatePath("/dashboard/program");
		return response(true, fields, "Program was assigned to teacher");
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner, fields);
		}

		throw err;
	}
};

export const deleteTeacherAction = async (id) => {
	if (!id) throw new Error("Id is missing");

	const res = await deleteTeacher(id);
	const data = await res.json();

	if (!res.ok) {
		return response(false, {}, "User could not be deleted");
	}

	revalidatePath("/dashboard/teacher");

	return response(true, {}, "Teacher was deleted");
};
