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
	try {
		const fields = convertFormDataToJSON(formData);

		ContactSchema.validateSync(fields, { abortEarly: false });

		const res = await createMessage(fields);
		const data = await res.json();

		if (!res.ok) {
			console.log(data);
		}

		// revalidation yapilacak

		return response(true, "Your message has been sent successfully");
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner);
		}

		throw err;
	}
};
