"use client";
import { createTermAction } from "@/actions/term-action";
import {
	FormContainer,
	SelectInput,
	DateInput,
	SubmitButton,
	BackButton,
} from "@/components/common/form-fields";
import { appConfig } from "@/helpers/config";
import { initialState } from "@/helpers/form-validation";
import { swAlert } from "@/helpers/swal";
import { useRouter } from "next/navigation";
import React, { useActionState, useEffect } from "react";
import { ButtonGroup, Form } from "react-bootstrap";

export const TermCreateForm = () => {
	const [state, formAction, isLoading] = useActionState(
		createTermAction,
		initialState
	);
	const router = useRouter();

	useEffect(() => {
		if (state?.message) {
			swAlert(state.message, state.ok ? "success" : "error");
			if (state.ok) {
				router.push("/dashboard/education-term");
			}
		}
	}, [state]);

	return (
		<FormContainer>
			<Form action={formAction}>
				<SelectInput
					name="term"
					label="Term"
					error={state?.errors?.term}
					options={appConfig.educationTerms}
					optionLabel="label"
					optionValue="value"
					defaultValue={state?.data?.term ?? ""}
					key={`term-${isLoading}`}
				/>

				<DateInput
					label="Start Date"
					name="startDate"
					error={state?.errors?.startDate}
					dateFormat="yy-mm-dd"
					defaultValue={state?.data?.startDate ?? ""}
					key={`startDate-${isLoading}`}
				/>

				<DateInput
					label="End Date"
					name="endDate"
					error={state?.errors?.endDate}
					dateFormat="yy-mm-dd"
					defaultValue={state?.data?.endDate ?? ""}
					key={`endDate-${isLoading}`}
				/>

				<DateInput
					label="Last Registration Date"
					name="lastRegistrationDate"
					error={state?.errors?.lastRegistrationDate}
					dateFormat="yy-mm-dd"
					defaultValue={state?.data?.lastRegistrationDate ?? ""}
					key={`lastRegistrationDate-${isLoading}`}
				/>

				<ButtonGroup className="w-100">
					<BackButton />
					<SubmitButton title="Create" />
				</ButtonGroup>
			</Form>
		</FormContainer>
	);
};
