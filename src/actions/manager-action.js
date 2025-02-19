"use server";

import {
	convertFormDataToJSON,
	response,
	transformYupErrors,
	YupValidationError,
} from "@/helpers/form-validation";
import { ManagerSchema } from "@/helpers/schemes/manager-schema";
import {
	createManager,
	deleteManager,
	updateManager,
} from "@/services/manager-service";
import { revalidatePath } from "next/cache";

export const createManagerAction = async (prevState, formData) => {
	const fields = convertFormDataToJSON(formData);

	try {
		ManagerSchema.validateSync(fields, { abortEarly: false });

		const res = await createManager(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, fields, data?.message, data?.validations);
		}

		revalidatePath("/dashboard/manager");
		return response(true, fields, "Manager was created");
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner, fields);
		}

		throw err;
	}
};

export const updateManagerAction = async (prevState, formData) => {
	const fields = convertFormDataToJSON(formData);

	try {
		ManagerSchema.validateSync(fields, { abortEarly: false });

		const res = await updateManager(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, fields, data?.message, data?.validations);
		}

		revalidatePath("/dashboard/manager");
		return response(true, fields, "Manager was updated");
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner, fields);
		}

		throw err;
	}
};

export const deleteManagerAction = async (id) => {
	if (!id) throw new Error("Id is missing");

	const res = await deleteManager(id);
	const data = await res.json();

	if (!res.ok) {
		return response(false, {}, "User could not be deleted");
	}

	revalidatePath("/dashboard/manager");

	return response(true, {}, "Manager was deleted");
};
