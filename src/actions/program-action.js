"use server";

import {
	convertFormDataToJSON,
	response,
	transformYupErrors,
	YupValidationError,
} from "@/helpers/form-validation";
import { ProgramSchema } from "@/helpers/schemes/program-schema";
import { createProgram, deleteProgram } from "@/services/program-service";
import { revalidatePath } from "next/cache";

export const createProgramAction = async (prevState, formData) => {
	const fields = convertFormDataToJSON(formData);

	console.log(fields);

	try {
		ProgramSchema.validateSync(fields, { abortEarly: false });

		const res = await createProgram(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, fields, data?.message, data?.validations);
		}

		revalidatePath("/dashboard/programm");
		return response(true, fields, "Program was created");
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner, fields);
		}

		throw err;
	}
};

export const deleteProgramAction = async (id) => {
	if (!id) throw new Error("Id is missing");

	const res = await deleteProgram(id);
	const data = await res.json();

	if (!res.ok) {
		return response(false, {}, "Program could not be deleted");
	}

	revalidatePath("/dashboard/program");

	return response(true, {}, "Program was deleted");
};
