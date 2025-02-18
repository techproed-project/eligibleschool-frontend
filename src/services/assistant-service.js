import { ASSISTANT_CREATE_API_ROUTE, ASSISTANT_DELETE_API_ROUTE, ASSISTANT_GET_ALL_BY_PAGE_API_ROUTE, ASSISTANT_GET_BY_ID_API_ROUTE, ASSISTANT_UPDATE_API_ROUTE } from "@/helpers/api-routes";
import { getAuthHeader } from "@/helpers/auth-helper";

export const getAllAssistantsByPage = async (
	page = 0,
	size = 20,
	sort = "name",
	type = "asc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${ASSISTANT_GET_ALL_BY_PAGE_API_ROUTE}?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getAssistantById = async (id) => {
	return fetch(`${ASSISTANT_GET_BY_ID_API_ROUTE}/${id}`, {
		method: "GET",
		headers: await getAuthHeader(),
	});
};

export const createAssistant = async (payload) => {
	return fetch(ASSISTANT_CREATE_API_ROUTE, {
		method: "POST",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload),
	});
};

export const updateAssistant = async (payload) => {
	return fetch(`${ASSISTANT_UPDATE_API_ROUTE}/${payload.id}`, {
		method: "PUT",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload),
	});
};

export const deleteAssistant = async (id) => {
	return fetch(`${ASSISTANT_DELETE_API_ROUTE}/${id}`, {
		method: "DELETE",
		headers: await getAuthHeader(),
	});
};
