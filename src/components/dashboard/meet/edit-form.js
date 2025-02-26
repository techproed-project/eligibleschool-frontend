"use client";
import { updateMeetAction } from "@/actions/meet-action";
import {
	FormContainer,
	TextInput,
	SubmitButton,
	BackButton,
	MultipleSelectInput,
	DateInput,
} from "@/components/common/form-fields";
import { swAlert } from "@/helpers/swal";
import { useRouter } from "next/navigation";
import React, { useActionState, useEffect } from "react";
import { ButtonGroup, Form } from "react-bootstrap";

export const MeetEditForm = ({ meet, students, studentsOfMeet }) => {
	const [state, formAction, isLoading] = useActionState(updateMeetAction, {
		data: meet,
	});

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
				<input type="hidden" name="id" value={meet.id} />
				<MultipleSelectInput
					id="studentIds"
					name="abc"
					label="Students"
					error={state?.errors?.studentIds}
					options={students}
					optionLabel="label"
					optionValue="value"
					values={studentsOfMeet}
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
					<SubmitButton title="Update" />
				</ButtonGroup>
			</Form>
		</FormContainer>
	);
};
