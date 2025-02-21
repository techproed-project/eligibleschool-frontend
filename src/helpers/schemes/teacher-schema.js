import * as Yup from "yup";
import { getGenderValues, isStringArray } from "../misc";

const genderValues = getGenderValues();

export const TeacherSchema = Yup.object({
	birthDay: Yup.date()
		.typeError("Invalid date")
		.max(new Date(), "Date of birth must be in the past")
		.required("Date of birth is required"),

	birthPlace: Yup.string()
		.min(2, "Too short")
		.max(15, "Too long")
		.required("Place of birth is required"),
	gender: Yup.string()
		.oneOf(genderValues, "Invalid gender")
		.required("Gender is required"),
	name: Yup.string()
		.min(2, "Too short")
		.max(15, "Too long")
		.required("First name is required"),
	surname: Yup.string()
		.min(2, "Too short")
		.max(15, "Too long")
		.required("Last name is required"),

	lessonsIdList: Yup.string()
		.test("isArray", "Must be an array", (val) => isStringArray(val))
		.required("Required"),

	email: Yup.string().email("Invalid email").required("Email is required"),
	phoneNumber: Yup.string()
		.matches(/\d{3}-\d{3}-\d{4}/, "Invalid phone number")
		.required("Phone number is required"),
	ssn: Yup.string()
		.matches(/\d{3}-\d{2}-\d{4}/, "SSN number")
		.required("SSN is required"),
	username: Yup.string()
		.min(4, "Too short")
		.max(15, "Too long")
		.required("Username is required"),
	password: Yup.string()
		.min(8, "Too short")
		.max(20, "Too long")
		.matches(/\d+/, "Password must contain at least one number")
		.matches(
			/[a-z]+/,
			"Password must contain at least one lowercase letter"
		)
		.matches(/[A-Z]+/, "Password must contain at least oneuppercase letter")
		.matches(
			/[!@#$%^&*(),.?:;~%-_]+/,
			"Password must contain at least one special character"
		)
		.required("Password is required"),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password")], "Passwords must match")
		.required("Confirm password is required"),
});
