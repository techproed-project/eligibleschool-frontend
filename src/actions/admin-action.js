"use server";

import {
	convertFormDataToJSON,
	response,
	transformYupErrors,
	YupValidationError,
} from "@/helpers/form-validation";
import { AdminSchema } from "@/helpers/schemes/admin-schema";
import { createAdmin, deleteAdmin } from "@/services/admin-service";

export const createAdminAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJSON(formData);

		console.log(fields);

		AdminSchema.validateSync(fields, { abortEarly: false });

		const res = await createAdmin(fields);
		const data = await res.json();

		console.log(data);

		if (!res.ok) {
			return response(false, fields, data?.message, data?.validations);
		}

		// REVALIDATION YAPILACAK
		return response(true, fields, data?.message);
	} catch (err) {
		console.log(err);
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner, fields);
		}

		throw err;
	}
};

export const deleteAdminAction = async (id) => {
	if (!id) throw new Error("Id is missing");

	const res = await deleteAdmin(id);
	const data = await res.text();

	if (!res.ok) {
		return response(false, data);
	}

	return response(true, data);
};