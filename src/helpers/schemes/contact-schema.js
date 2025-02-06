import * as Yup from "yup";

export const ContactSchema = Yup.object({
	email: Yup.string().email("Invalid email").required("Email is required"),
	message: Yup.string().min(4, "Too short").required("Message is required"),
	name: Yup.string().min(4, "Too short").required("Name is required"),
	subject: Yup.string().min(4, "Too short").required("Subject is required"),
});
