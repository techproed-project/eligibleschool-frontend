"use client";
import { createProgramAction } from "@/actions/program-action";
import {
	DateInput,
	FormContainer,
	SelectInput,
	SubmitButton,
} from "@/components/common/form-fields";
import { BackButton } from "@/components/common/form-fields/back-button";
import { MultipleSelectInput } from "@/components/common/form-fields/multiple-select-input";
import { initialState } from "@/helpers/form-validation";
import { swAlert } from "@/helpers/swal";
import { useRouter } from "next/navigation";
import React, { useActionState, useEffect } from "react";
import { ButtonGroup, Form } from "react-bootstrap";

export const ProgramCreateForm = ({ terms, lessons }) => {
	const [state, formAction, isLoading] = useActionState(
		createProgramAction,
		initialState
	);
	const router = useRouter();


	console.log(lessons)

	useEffect(() => {
		if (state?.message) {
			swAlert(state.message, state.ok ? "success" : "error");
			if (state.ok) {
				router.push("/dashboard/program");
			}
		}
	}, [state]);

	return (
		<FormContainer>
			<Form action={formAction}>
				<MultipleSelectInput
					name="lessonIdList"
					label="Lessons"
					error={state?.errors?.lessonIdList}
					options={lessons}
					optionLabel="lessonName"
					optionValue="lessonId"
				/>

				<SelectInput
					name="educationTermId"
					label="Education Term"
					error={state?.errors?.educationTermId}
					options={terms}
					optionLabel="label"
					optionValue="value"
					defaultValue={state?.data?.educationTermId ?? ""}
					key={`educationTermId-${isLoading}`}
				/>

				<DateInput
					label="Start time"
					name="startTime"
					error={state?.errors?.startTime}
					timeOnly
					defaultValue={state?.data?.startTime ?? ""}
					key={`startTime-${isLoading}`}
				/>

				<DateInput
					label="End time"
					name="stopTime"
					error={state?.errors?.stopTime}
					timeOnly
					defaultValue={state?.data?.stopTime ?? ""}
					key={`stopTime-${isLoading}`}
				/>

				<ButtonGroup className="w-100">
					<BackButton />
					<SubmitButton title="Create" />
				</ButtonGroup>
			</Form>
		</FormContainer>
	);
};
