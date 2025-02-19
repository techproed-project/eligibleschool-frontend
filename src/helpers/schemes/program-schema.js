import * as Yup from "yup";
import { getDayValues, isStringArray } from "../misc";
import { isLater, isTimeValid } from "../date-time";

const days = getDayValues();

export const ProgramSchema = Yup.object({
	lessonIdList: Yup.string()
		.test("isArray", "Must be an array", (val) => isStringArray(val))
		.required("Required"),

	day: Yup.string().oneOf(days, "Invalid day").required("Required"),

	educationTermId: Yup.number()
		.typeError("Invalid education term")
		.required("Required"),

	startTime: Yup.string()
		.test("isTime", "Invalid time", (val) => isTimeValid(val))
		.required("Required"),
	stopTime: Yup.string()
		.test("isTime", "Invalid time", (val) => isTimeValid(val))
		.test("isLater", "Must be later than start time", (val, context) =>
			isLater(context.parent.startTime, val)
		)

		.required("Required"),
});
