"use client";
import { updateStudentInfoAction } from "@/actions/student-info-action";
import {
	FormContainer,
	TextInput,
	SelectInput,
	SubmitButton,
	BackButton,
} from "@/components/common/form-fields";
import { swAlert } from "@/helpers/swal";
import { useRouter } from "next/navigation";
import React, { useActionState, useEffect } from "react";
import { ButtonGroup, Form } from "react-bootstrap";

export const StudentInfoEditForm = ({ info, lessons, students, terms }) => {
	const [state, formAction, isLoading] = useActionState(
		updateStudentInfoAction,
		{
			data: info,
		}
	);

	const router = useRouter();

	useEffect(() => {
		if (state?.message) {
			swAlert(state.message, state.ok ? "success" : "error");
			if (state.ok) {
				router.push("/dashboard/student-info");
			}
		}
	}, [state]);

	return (
		<FormContainer>
			<Form action={formAction}>
			<input type="hidden" name="id" value={info.id} />
				<SelectInput
					name="lessonId"
					label="Lesson"
					error={state?.errors?.lessonId}
					options={lessons}
					optionLabel="lessonName"
					optionValue="lessonId"
					defaultValue={state?.data?.lessonId ?? ""}
					key={`lessonId-${isLoading}`}
				/>

				<SelectInput
					name="studentId"
					label="Student"
					error={state?.errors?.studentId}
					options={students}
					optionLabel="label"
					optionValue="value"
					defaultValue={state?.data?.studentId ?? ""}
					key={`studentId-${isLoading}`}
				/>

				<SelectInput
					name="educationTermId"
					label="Term"
					error={state?.errors?.educationTermId}
					options={terms}
					optionLabel="label"
					optionValue="value"
					defaultValue={state?.data?.educationTermId ?? ""}
					key={`educationTermId-${isLoading}`}
				/>

				<TextInput
					label="Absentee"
					name="absentee"
					error={state?.errors?.absentee}
					defaultValue={state?.data?.absentee ?? ""}
					type="number"
				/>

				<TextInput
					label="Midterm Exam"
					name="midtermExam"
					error={state?.errors?.midtermExam}
					defaultValue={state?.data?.midtermExam ?? ""}
					type="number"
				/>

				<TextInput
					label="Final Exam"
					name="finalExam"
					error={state?.errors?.finalExam}
					defaultValue={state?.data?.finalExam ?? ""}
					type="number"
				/>

				<TextInput
					label="Info"
					name="infoNote"
					error={state?.errors?.infoNote}
					defaultValue={state?.data?.infoNote ?? ""}
				/>

				<ButtonGroup className="w-100">
					<BackButton />
					<SubmitButton title="Update" />
				</ButtonGroup>
			</Form>
		</FormContainer>
	);
};
