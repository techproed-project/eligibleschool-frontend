"use server";

import {
	convertFormDataToJSON,
	response,
	transformYupErrors,
	YupValidationError,
} from "@/helpers/form-validation";
import { MeetSchema } from "@/helpers/schemes/meet-schema";
import { createMeet, deleteMeet, updateMeet } from "@/services/meet-service";
import { revalidatePath } from "next/cache";

export const createMeetAction = async (prevState, formData) => {
	const fields = convertFormDataToJSON(formData);

	try {
		MeetSchema.validateSync(fields, { abortEarly: false });

		const payload = {
			...fields,
			studentIds: JSON.parse(fields.studentIds),
		};

		const res = await createMeet(payload);
		const data = await res.json();

		if (!res.ok) {
			return response(false, fields, data?.message, data?.validations);
		}

		revalidatePath("/dashboard/meet");
		return response(true, fields, "Meet was created");
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner, fields);
		}

		throw err;
	}
};

export const updateMeetAction = async (prevState, formData) => {
	const fields = convertFormDataToJSON(formData);

	try {
		MeetSchema.validateSync(fields, { abortEarly: false });

		const payload = {
			...fields,
			studentIds: JSON.parse(fields.studentIds),
		};

		const res = await updateMeet(payload);
		const data = await res.json();

		if (!res.ok) {
			return response(false, fields, data?.message, data?.validations);
		}

		revalidatePath("/dashboard/meet");
		return response(true, fields, "Meet was updated");
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner, fields);
		}

		throw err;
	}
};

export const deleteMeetAction = async (id) => {
	if (!id) throw new Error("Id is missing");

	const res = await deleteMeet(id);
	const data = await res.json();

	if (!res.ok) {
		return response(false, {}, "Meet could not be deleted");
	}

	revalidatePath("/dashboard/meet");

	return response(true, {}, "Meet was deleted");
};
