"use server";

import {
	convertFormDataToJSON,
	response,
	transformYupErrors,
	YupValidationError,
} from "@/helpers/form-validation";
import { AdminSchema } from "@/helpers/schemes/admin-schema";
import { createAdmin, deleteAdmin } from "@/services/admin-service";
import { revalidatePath } from "next/cache";

export const createAdminAction = async (prevState, formData) => {
	const fields = convertFormDataToJSON(formData);

	try {
		AdminSchema.validateSync(fields, { abortEarly: false });

		const res = await createAdmin(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, fields, data?.message, data?.validations);
		}

		revalidatePath("/dashboard/admin");
		return response(true, fields, data?.message);
	} catch (err) {
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
		return response(false, {}, "User could not be deleted");
	}

	revalidatePath("/dashboard/admin");

	return response(true, {}, data);
};
