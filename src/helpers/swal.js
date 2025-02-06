import Swal from "sweetalert2";

export const swAlert = (title, icon = "info", text = "") => {
	// icon: success, error, warning, info, question
	Swal.fire({
		title,
		text,
		icon,
	});
};

export const swConfirm = (
	title,
	icon = "question",
	text = "",
	confirmButtonText = "Yes"
) => {
	return Swal.fire({
		title,
		icon,
		text,
		showCancelButton: true,
		confirmButtonText,
	});
};
