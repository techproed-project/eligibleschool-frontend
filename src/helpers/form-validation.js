export { ValidationError as YupValidationError } from "yup";

export const convertFormDataToJSON = (formData) => {
	return Object.fromEntries(formData);
};

export const response = (ok, data, message, errors) => {
	return {
		ok,
		data,
		message,
		errors,
	};
};

export const initialState = response(false, {}, "", {});

export const transformYupErrors = (errors, data) => {
	const errObject = {};
	errors.forEach((error) => (errObject[error.path] = error.message));

	return response(false, data, "", errObject);
};
