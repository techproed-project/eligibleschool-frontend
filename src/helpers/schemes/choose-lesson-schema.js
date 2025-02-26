import * as Yup from "yup";
import { isStringArray } from "../misc";

export const ChooseLessonSchema = Yup.object({
	lessonProgramId: Yup.string()
		.test("isArray", "Required", (val) => isStringArray(val))
		.required("Required"),
});
