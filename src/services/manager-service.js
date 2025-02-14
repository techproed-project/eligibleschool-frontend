
import { MANAGER_CREATE_API_ROUTE, MANAGER_DELETE_API_ROUTE, MANAGER_GET_ALL_BY_PAGE_API_ROUTE, MANAGER_GET_BY_ID_API_ROUTE, MANAGER_UPDATE_API_ROUTE } from "@/helpers/api-routes";
import { getAuthHeader } from "@/helpers/auth-helper";

export const getAllManagersByPage = async (
	page = 0,
	size = 20,
	sort = "name",
	type = "asc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${MANAGER_GET_ALL_BY_PAGE_API_ROUTE}?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getManagerById = async (id) => {
	return fetch(`${MANAGER_GET_BY_ID_API_ROUTE}/${id}`, {
		method: "GET",
		headers: await getAuthHeader(),
	});
};

export const createManager = async (payload) => {
	return fetch(MANAGER_CREATE_API_ROUTE, {
		method: "POST",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload),
	});
};

export const updateManager = async (payload) => {
	return fetch(`${MANAGER_UPDATE_API_ROUTE}/${payload.id}`, {
		method: "PUT",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload),
	});
};

export const deleteManager = async (id) => {
	return fetch(`${MANAGER_DELETE_API_ROUTE}/${id}`, {
		method: "DELETE",
		headers: await getAuthHeader(),
	});
};
