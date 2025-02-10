import { LOGIN_API_ROUTE } from "@/helpers/api-routes";

export const login = (payload) => {
	return fetch(LOGIN_API_ROUTE, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(payload),
	});
};
