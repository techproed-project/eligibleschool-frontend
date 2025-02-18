"use server";

import {
	convertFormDataToJSON,
	response,
	transformYupErrors,
	YupValidationError,
} from "@/helpers/form-validation";
import { TermSchema } from "@/helpers/schemes/term-schema";
import { createTerm, deleteTerm } from "@/services/term-service";
import { revalidatePath } from "next/cache";

export const createTermAction = async (prevState, formData) => {
	const fields = convertFormDataToJSON(formData);

	try {
		TermSchema.validateSync(fields, { abortEarly: false });

		const res = await createTerm(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, fields, data?.message, data?.validations);
		}

		revalidatePath("/dashboard/education-term");
		return response(true, fields, "Term was created");
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner, fields);
		}

		throw err;
	}
};

export const deleteTermAction = async (id) => {
	if (!id) throw new Error("Id is missing");

	const res = await deleteTerm(id);
	const data = await res.json();

	console.log(data);

	if (!res.ok) {
		return response(false, {}, "Term could not be deleted");
	}

	revalidatePath("/dashboard/education-term");

	return response(true, {}, "Term was deleted");
};
