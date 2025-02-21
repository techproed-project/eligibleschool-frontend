import * as Yup from "yup";
import { isStringArray } from "../misc";

export const ProgramAssignmentSchema = Yup.object({
	lessonProgramId: Yup.string()
		.test("isArray", "Must be an array", (val) => isStringArray(val))
		.required("Required"),

	teacherId: Yup.string().required("Required"),
});
