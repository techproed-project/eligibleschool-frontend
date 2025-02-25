import * as Yup from "yup";
import { isStringArray } from "../misc";

export const ProgramAssignmentSchema = Yup.object({
	lessonProgramId: Yup.string()

		.test("isArray", "Required", (val) => isStringArray(val))
		.required("Required"),

	teacherId: Yup.string().required("Required"),
});
