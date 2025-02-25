"use client";
import { createProgramAction } from "@/actions/program-action";
import {
	DateInput,
	FormContainer,
	SelectInput,
	SubmitButton,
	BackButton,
	MultipleSelectInput
} from "@/components/common/form-fields";
import { initialState } from "@/helpers/form-validation";
import { swAlert } from "@/helpers/swal";
import { useRouter } from "next/navigation";
import React, { useActionState, useEffect } from "react";
import { ButtonGroup, Form } from "react-bootstrap";
import { appConfig } from "@/helpers/config";

export const ProgramCreateForm = ({ terms, lessons }) => {
	const [state, formAction, isLoading] = useActionState(
		createProgramAction,
		initialState
	);
	const router = useRouter();

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
					id="lessonIdList"
					name="abc"
					label="Lessons"
					error={state?.errors?.lessonIdList}
					options={lessons}
					optionLabel="lessonName"
					optionValue="lessonId"
				/>

				<SelectInput
					name="day"
					label="Day"
					error={state?.errors?.day}
					options={appConfig.days}
					optionLabel="label"
					optionValue="value"
					defaultValue={state?.data?.day ?? ""}
					key={`day-${isLoading}`}
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
