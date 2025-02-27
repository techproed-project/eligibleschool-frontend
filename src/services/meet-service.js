import {
	MEET_CREATE_API_ROUTE,
	MEET_DELETE_API_ROUTE,
	MEET_GET_BY_ID_API_ROUTE,
	MEET_GET_BY_STUDENT_API_ROUTE,
	MEET_GET_BY_TEACHER_API_ROUTE,
	MEET_UPDATE_API_ROUTE,
} from "@/helpers/api-routes";
import { getAuthHeader } from "@/helpers/auth-helper";

export const getAllIMeetsForAdvisorByPage = async (page = 0, size = 20) => {
	const qs = `page=${page}&size=${size}`;

	return fetch(`${MEET_GET_BY_TEACHER_API_ROUTE}?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getAllMeetsForStudent = async () => {
	return fetch(`${MEET_GET_BY_STUDENT_API_ROUTE}`, {
		method: "GET",
		headers: await getAuthHeader(),
	});
};

export const getMeetById = async (id) => {
	return fetch(`${MEET_GET_BY_ID_API_ROUTE}/${id}`, {
		method: "GET",
		headers: await getAuthHeader(),
	});
};

export const createMeet = async (payload) => {
	return fetch(MEET_CREATE_API_ROUTE, {
		method: "POST",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload),
	});
};

export const updateMeet = async (payload) => {
	return fetch(`${MEET_UPDATE_API_ROUTE}/${payload.id}`, {
		method: "PUT",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload),
	});
};

export const deleteMeet = async (id) => {
	return fetch(`${MEET_DELETE_API_ROUTE}/${id}`, {
		method: "DELETE",
		headers: await getAuthHeader(),
	});
};
