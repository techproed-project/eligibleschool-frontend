import * as Yup from "yup";
import { getTermValues } from "../misc";

const terms = getTermValues();

export const TermSchema = Yup.object({
	term: Yup.string()
		.oneOf(terms, "Invalid term")
		.required("Term is required"),

	startDate: Yup.date()
		.typeError("Invalid date")
		.min(new Date(), "Must be in the future")
		.required("Required"),

	endDate: Yup.date()
		.typeError("Invalid date")
		.min(Yup.ref("startDate"), "Must be later than start date")
		.required("Required"),

	lastRegistrationDate: Yup.date()
		.typeError("Invalid date")
		.max(Yup.ref("startDate"), "Must be before than start date")
		.required("Required"),
});
