"use server";

import { signIn, signOut } from "@/auth";
import {
	convertFormDataToJSON,
	response,
	transformYupErrors,
	YupValidationError,
} from "@/helpers/form-validation";
import { AuthSchema } from "@/helpers/schemes/auth-schema";
import { AuthError } from "next-auth";

export const loginAction = async (prevState, formData) => {
	const fields = convertFormDataToJSON(formData);
	
	try {
		

		AuthSchema.validateSync(fields, { abortEarly: false });

		await signIn("credentials", fields);
		// auth.js dosyasindaki, provider altindaki authorize methoduna gider.
		// Eger login basarili ise kullanici giris yapmis olur
		// login basarili degise bu satirda hata firlatilir.
	} catch (err) {
		if (err instanceof YupValidationError) {
			return transformYupErrors(err.inner, fields);
		} else if (err instanceof AuthError) {
			return response(false, fields, "Invalid credentials");
		}

		throw err;
	}
};

export const logoutAction = async (redirectTo = "/") => {
	await signOut({ redirectTo });
};
