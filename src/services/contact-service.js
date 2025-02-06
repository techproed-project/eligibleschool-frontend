import { CONTACT_CREATE_API_ROUTE } from "@/helpers/api-routes";

export const createMessage = async (payload) => {
	return fetch(CONTACT_CREATE_API_ROUTE, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(payload),
	});
};
