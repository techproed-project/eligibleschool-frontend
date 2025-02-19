"use server";

import {
	convertFormDataToJSON,
	response,
	transformYupErrors,
	YupValidationError,
} from "@/helpers/form-validation";
import { LessonSchema } from "@/helpers/schemes/lesson-schema";
import { createLesson, deleteLesson } from "@/services/lesson-service";
import { revalidatePath } from "next/cache";

export const createLessonAction = async (prevState, formData) => {
	const fields = convertFormDataToJSON(formData);
console.log(fields)
	try {
		LessonSchema.validateSync(fields, { abortEarly: false });

		const res = await createLesson(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, fields, data?.message, data?.validations);
		}

		revalidatePath("/dashboard/lesson");
		return response(true, fields, "Lesson was created");
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner, fields);
		}

		throw err;
	}
};

export const deleteLessonAction = async (id) => {
	if (!id) throw new Error("Id is missing");

	const res = await deleteLesson(id);
	const data = await res.json();

	if (!res.ok) {
		return response(false, {}, "Lesson could not be deleted");
	}

	revalidatePath("/dashboard/lesson");

	return response(true, {}, "Lesson was deleted");
};
