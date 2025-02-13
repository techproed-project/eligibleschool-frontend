"use client"
import { createAdminAction } from "@/actions/admin-action";
import { FormContainer, TextInput } from "@/components/common/form-fields";
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
			</Form>
		</FormContainer>
	);
};
