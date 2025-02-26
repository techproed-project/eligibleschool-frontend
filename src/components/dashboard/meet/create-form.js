"use client";
import { createMeetAction } from "@/actions/meet-action";
import {
	FormContainer,
	TextInput,
	SubmitButton,
	BackButton,
	MultipleSelectInput,
	DateInput,
} from "@/components/common/form-fields";
import { initialState } from "@/helpers/form-validation";
import { swAlert } from "@/helpers/swal";
import { useRouter } from "next/navigation";
import React, { useActionState, useEffect } from "react";
import { ButtonGroup, Form } from "react-bootstrap";

export const MeetCreateForm = ({ students }) => {
	const [state, formAction, isLoading] = useActionState(
		createMeetAction,
		initialState
	);
	const router = useRouter();

	useEffect(() => {
		if (state?.message) {
			swAlert(state.message, state.ok ? "success" : "error");
			if (state.ok) {
				router.push("/dashboard/meet");
			}
		}
	}, [state]);

	return (
		<FormContainer>
			<Form action={formAction}>
				<MultipleSelectInput
					id="studentIds"
					name="abc"
					label="Students"
					error={state?.errors?.studentIds}
					options={students}
					optionLabel="label"
					optionValue="value"
				/>

				<DateInput
					label="Date"
					name="date"
					error={state?.errors?.date}
					defaultValue={state?.data?.date ?? ""}
					dateFormat="yy-mm-dd"
					key={`date-${isLoading}`}
				/>

				<DateInput
					label="Start"
					name="startTime"
					error={state?.errors?.startTime}
					defaultValue={state?.data?.startTime ?? ""}
					timeOnly
					key={`startTime-${isLoading}`}
				/>

				<DateInput
					label="End"
					name="stopTime"
					error={state?.errors?.stopTime}
					defaultValue={state?.data?.stopTime ?? ""}
					timeOnly
					key={`stopTime-${isLoading}`}
				/>

				<TextInput
					label="Description"
					name="description"
					error={state?.errors?.description}
					defaultValue={state?.data?.description ?? ""}
					as="textarea"
				/>

				<ButtonGroup className="w-100">
					<BackButton />
					<SubmitButton title="Create" />
				</ButtonGroup>
			</Form>
		</FormContainer>
	);
};
