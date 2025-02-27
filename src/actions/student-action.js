"use server";

import {
	convertFormDataToJSON,
	response,
	transformYupErrors,
	YupValidationError,
} from "@/helpers/form-validation";
import { ChooseLessonSchema } from "@/helpers/schemes/choose-lesson-schema";
import { StudentSchema } from "@/helpers/schemes/student-schema";
import {
	assignProgramToStudent,
	createStudent,
	deleteStudent,
	updateStudent,
} from "@/services/student-service";
import { revalidatePath } from "next/cache";

export const createStudentAction = async (prevState, formData) => {
	const fields = convertFormDataToJSON(formData);

	try {
		StudentSchema.validateSync(fields, { abortEarly: false });

		const res = await createStudent(fields);
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

		const res = await updateStudent(fields);
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

export const assignProgramToStudentAction = async (prevState, formData) => {
	const fields = convertFormDataToJSON(formData);

	try {
		ChooseLessonSchema.validateSync(fields, { abortEarly: false });

		const payload = {
			lessonProgramId: JSON.parse(fields.lessonProgramId).map(
				(item) => item.lessonProgramId
			),
		};

		const res = await assignProgramToStudent(payload);
		const data = await res.json();


		if (!res.ok) {
			return response(false, fields, data?.message, data?.validations);
		}

		revalidatePath("/dashboard/choose-lesson");
		return response(true, fields, "Program was assigned to student");
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
