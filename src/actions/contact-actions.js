"use server";

import {
	convertFormDataToJSON,
	response,
	transformYupErrors,
	YupValidationError,
} from "@/helpers/form-validation";
import { ContactSchema } from "@/helpers/schemes/contact-schema";
import { createMessage } from "@/services/contact-service";

export const createContactAction = async (prevState, formData) => {
	const fields = convertFormDataToJSON(formData);

	try {
		ContactSchema.validateSync(fields, { abortEarly: false });

		const res = await createMessage(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, fields, "", data?.validations);
		}

		// revalidation yapilacak

		return response(
			true,
			fields,
			"Your message has been sent successfully"
		);
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner, fields);
		}

		throw err;
	}
};
