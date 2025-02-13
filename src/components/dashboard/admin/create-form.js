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
import { appConfig } from "@/helpers/config";
import { initialState } from "@/helpers/form-validation";
import React, { useActionState } from "react";
import { Form } from "react-bootstrap";

export const AdminCreateForm = () => {
	const [state, formAction] = useActionState(createAdminAction, initialState);

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
					type="date"
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

                <SubmitButton title="Create" />
			</Form>
		</FormContainer>
	);
};
