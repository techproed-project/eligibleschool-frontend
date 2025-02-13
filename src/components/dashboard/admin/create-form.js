"use client";
import { createAdminAction } from "@/actions/admin-action";
import {
	FormContainer,
	TextInput,
	SelectInput,
	DateInput,
	MaskedInput,
	PasswordInput,
	SubmitButton,
} from "@/components/common/form-fields";
import { BackButton } from "@/components/common/form-fields/back-button";
import { appConfig } from "@/helpers/config";
import { initialState } from "@/helpers/form-validation";
import { swAlert } from "@/helpers/swal";
import { useRouter } from "next/navigation";
import React, { useActionState } from "react";
import { ButtonGroup, Form } from "react-bootstrap";

export const AdminCreateForm = () => {
	const [state, formAction] = useActionState(createAdminAction, initialState);
	const router = useRouter();

    console.log(state)

	if (state?.message) {
		swAlert(state.message, state.ok ? "success" : "error");
		if (state.ok) {
			router.push("/dashboard/admin");
		}
	}

	return (
		<FormContainer>
			<Form action={formAction}>
				<TextInput
					label="First Name"
					name="name"
					error={state?.errors?.name}
				/>
				<TextInput
					label="Last Name"
					name="surname"
					error={state?.errors?.surname}
				/>

				<SelectInput
					name="gender"
					label="Gender"
					error={state?.errors?.gender}
					options={appConfig.genders}
					optionLabel="label"
					optionValue="value"
				/>

				<DateInput
					label="Date of birth"
					name="birthDay"
					error={state?.errors?.birthDay}
					dateFormat="yy-mm-dd"
				/>

				<TextInput
					label="Place of birth"
					name="birthPlace"
					error={state?.errors?.birthPlace}
				/>

				<MaskedInput
					label="Phone number"
					name="phoneNumber"
					error={state?.errors?.phoneNumber}
					mask="999-999-9999"
				/>

				<MaskedInput
					label="SSN"
					name="ssn"
					error={state?.errors?.ssn}
					mask="999-99-9999"
				/>

				<TextInput
					label="Username"
					name="username"
					error={state?.errors?.username}
				/>

				<PasswordInput
					label="Password"
					name="password"
					error={state?.errors?.password}
				/>

				<PasswordInput
					label="Confirm password"
					name="confirmPassword"
					error={state?.errors?.confirmPassword}
				/>

				<ButtonGroup className="w-100">
					<BackButton />
					<SubmitButton title="Create" />
				</ButtonGroup>
			</Form>
		</FormContainer>
	);
};
