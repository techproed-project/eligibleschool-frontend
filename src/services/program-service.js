
import { TERM_CREATE_API_ROUTE, TERM_DELETE_API_ROUTE, TERM_GET_ALL_API_ROUTE, TERM_GET_ALL_BY_PAGE_API_ROUTE, TERM_GET_BY_ID_API_ROUTE } from "@/helpers/api-routes";
import { getAuthHeader } from "@/helpers/auth-helper";

export const getAllTermsByPage = async (
	page = 0,
	size = 20,
	sort = "startDate",
	type = "desc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${TERM_GET_ALL_BY_PAGE_API_ROUTE}?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getAllTerms = async () => {
	return fetch(`${TERM_GET_ALL_API_ROUTE}`, {
		method: "GET",
		headers: await getAuthHeader(),
	});
};

export const getTermById = async (id) => {
	return fetch(`${TERM_GET_BY_ID_API_ROUTE}/${id}`, {
		method: "GET",
		headers: await getAuthHeader(),
	});
};

export const createTerm = async (payload) => {
	return fetch(TERM_CREATE_API_ROUTE, {
		method: "POST",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload),
	});
};

export const deleteTerm = async (id) => {
	return fetch(`${TERM_DELETE_API_ROUTE}/${id}`, {
		method: "DELETE",
		headers: await getAuthHeader(),
	});
};
