"use client";
import { updateTeacherAction } from "@/actions/teacher-action";
import {
	FormContainer,
	TextInput,
	SelectInput,
	DateInput,
	MaskedInput,
	PasswordInput,
	SubmitButton,
	BackButton,
	CheckInput,
	MultipleSelectInput,
} from "@/components/common/form-fields";
import { appConfig } from "@/helpers/config";
import { swAlert } from "@/helpers/swal";
import { useRouter } from "next/navigation";
import React, { useActionState, useEffect } from "react";
import { ButtonGroup, Form } from "react-bootstrap";

export const TeacherEditForm = ({ user, programs, teacherProgramIdList }) => {
	const [state, formAction, isLoading] = useActionState(updateTeacherAction, {
		data: user,
	});

	const router = useRouter();

	useEffect(() => {
		if (state?.message) {
			swAlert(state.message, state.ok ? "success" : "error");
			if (state.ok) {
				router.push("/dashboard/teacher");
			}
		}
	}, [state]);

	return (
		<FormContainer>
			<Form action={formAction}>
				<input type="hidden" name="id" value={user.id} />
				<TextInput
					label="First Name"
					name="name"
					error={state?.errors?.name}
					defaultValue={state?.data?.name ?? ""}
				/>
				<TextInput
					label="Last Name"
					name="surname"
					error={state?.errors?.surname}
					defaultValue={state?.data?.surname ?? ""}
				/>

				<SelectInput
					name="gender"
					label="Gender"
					error={state?.errors?.gender}
					options={appConfig.genders}
					optionLabel="label"
					optionValue="value"
					defaultValue={state?.data?.gender ?? ""}
					key={`gender-${isLoading}`}
				/>

				<DateInput
					label="Date of birth"
					name="birthDay"
					error={state?.errors?.birthDay}
					dateFormat="yy-mm-dd"
					defaultValue={state?.data?.birthDay ?? ""}
					key={`birthDay-${isLoading}`}
				/>

				<TextInput
					label="Place of birth"
					name="birthPlace"
					error={state?.errors?.birthPlace}
					defaultValue={state?.data?.birthPlace ?? ""}
				/>

				<TextInput
					label="Email"
					name="email"
					error={state?.errors?.email}
					defaultValue={state?.data?.email ?? ""}
				/>

				<CheckInput
					label="Is advisor teacher?"
					name="isAdvisorTeacher"
					type="checkbox"
					defaultChecked={state?.data?.isAdvisorTeacher ?? "true"}
					value="true"
				/>

				<MultipleSelectInput
					id="lessonsIdList"
					name="abc"
					label="Programs"
					error={state?.errors?.lessonsIdList}
					options={programs}
					optionLabel="label"
					optionValue="value"
					values={teacherProgramIdList}
				/>

				<MaskedInput
					label="Phone number"
					name="phoneNumber"
					error={state?.errors?.phoneNumber}
					mask="999-999-9999"
					value={state?.data?.phoneNumber ?? ""}
				/>

				<MaskedInput
					label="SSN"
					name="ssn"
					error={state?.errors?.ssn}
					mask="999-99-9999"
					value={state?.data?.ssn ?? ""}
				/>

				<TextInput
					label="Username"
					name="username"
					error={state?.errors?.username}
					defaultValue={state?.data?.username ?? ""}
				/>

				<PasswordInput
					label="Password"
					name="password"
					error={state?.errors?.password}
					defaultValue={state?.data?.password ?? ""}
				/>

				<PasswordInput
					label="Confirm password"
					name="confirmPassword"
					error={state?.errors?.confirmPassword}
					defaultValue={state?.data?.confirmPassword ?? ""}
				/>

				<ButtonGroup className="w-100">
					<BackButton />
					<SubmitButton title="Update" />
				</ButtonGroup>
			</Form>
		</FormContainer>
	);
};
