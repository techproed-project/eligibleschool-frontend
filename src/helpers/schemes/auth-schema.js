import * as Yup from "yup";

export const AuthSchema = Yup.object({
	username: Yup.string().required("Username is required"),
	password: Yup.string().required("Password is required"),
});
