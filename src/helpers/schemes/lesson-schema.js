import * as Yup from "yup";

export const LessonSchema = Yup.object({
	lessonName: Yup.string()
		.min(2, "Must be at least 2 characters")
		.max(15, "Must be max 15 characters")
		.required("Required"),
	creditScore: Yup.number()
		.min(1, "Must be between 1 and 100")
		.max(100, "Must be between 1 and 100")
		.required("Required"),
});
