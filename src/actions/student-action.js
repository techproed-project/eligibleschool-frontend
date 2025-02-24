"use server";

import {
	convertFormDataToJSON,
	response,
	transformYupErrors,
	YupValidationError,
} from "@/helpers/form-validation";
import { StudentSchema } from "@/helpers/schemes/student-schema";
import { deleteStudent } from "@/services/student-service";
import { revalidatePath } from "next/cache";

export const createStudentAction = async (prevState, formData) => {
	const fields = convertFormDataToJSON(formData);

	try {
		StudentSchema.validateSync(fields, { abortEarly: false });

		const res = await createTeacher(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, fields, data?.message, data?.validations);
		}

		revalidatePath("/dashboard/student");
		return response(true, fields, "Student was created");
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner, fields);
		}

		throw err;
	}
};

export const updateStudentAction = async (prevState, formData) => {
	const fields = convertFormDataToJSON(formData);

	try {
		StudentSchema.validateSync(fields, { abortEarly: false });

		const res = await updateTeacher(payload);
		const data = await res.json();

		if (!res.ok) {
			return response(false, fields, data?.message, data?.validations);
		}

		revalidatePath("/dashboard/student");
		return response(true, fields, "Student was updated");
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

		const res = await assignProgramToTeacher(fields);
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

export const deleteStudentAction = async (id) => {
	if (!id) throw new Error("Id is missing");

	const res = await deleteStudent(id);
	const data = await res.json();

	if (!res.ok) {
		return response(false, {}, "User could not be deleted");
	}

	revalidatePath("/dashboard/student");

	return response(true, {}, "Student was deleted");
};
