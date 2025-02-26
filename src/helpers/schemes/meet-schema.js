import * as Yup from "yup";
import { isLater, isTimeValid } from "../date-time";
import { isStringArray } from "../misc";

export const MeetSchema = Yup.object({
	date: Yup.date()
		.typeError("Invalid date")
		.min(new Date(), "Invalid date")
		.required("Required"),

	description: Yup.string()
		.min(2, "Min 2 chars")
		.max(16, "Max 16 chars")
		.required("Required"),

	startTime: Yup.string()
		.test("isTime", "Invalid time", (val) => isTimeValid(val))
		.required("Required"),

	stopTime: Yup.string()
		.test("isTime", "Invalid time", (val) => isTimeValid(val))
		.test("isLater", "Must be later than start time", (val, context) => {
			return isLater(context.parent.startTime, val);
		})
		.required("Required"),

	studentIds: Yup.string()
		.test("isArray", "Required", (val) => isStringArray(val))
		.required("Required"),
});
