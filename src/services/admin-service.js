import {
	ADMIN_CREATE_API_ROUTE,
	ADMIN_DELETE_API_ROUTE,
	ADMIN_GET_ALL_BY_PAGE_API_ROUTE,
} from "@/helpers/api-routes";
import { getAuthHeader } from "@/helpers/auth-helper";

export const getAllAdminsByPage = async (
	page = 0,
	size = 20,
	sort = "name",
	type = "asc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${ADMIN_GET_ALL_BY_PAGE_API_ROUTE}?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const createAdmin = async (payload) => {
	return fetch(ADMIN_CREATE_API_ROUTE, {
		method: "POST",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload),
	});
};

export const deleteAdmin = async (id) => {
	return fetch(`${ADMIN_DELETE_API_ROUTE}/${id}`, {
		method: "DELETE",
		headers: await getAuthHeader(),
	});
};
