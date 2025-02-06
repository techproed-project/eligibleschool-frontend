
export {ValidationError as YupValidationError} from "yup";

export const convertFormDataToJSON = (formData) => {
	return Object.fromEntries(formData);
};

export const response = (ok, message, errors) => {
	return {
		ok,
		message,
		errors,
	};
};

export const transformYupErrors = (errors) => {
	const errObject = {};
	errors.forEach((error) => (errObject[error.path] = error.message));

	return response(false, "", errObject);
};
