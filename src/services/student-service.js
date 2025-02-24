import {
	STUDENT_ASSIGN_PROGRAM_API_ROUTE,
	STUDENT_CREATE_API_ROUTE,
	STUDENT_DELETE_API_ROUTE,
	STUDENT_GET_ALL_API_ROUTE,
	STUDENT_GET_ALL_BY_ADVISOR_API_ROUTE,
	STUDENT_GET_ALL_BY_PAGE_API_ROUTE,
	STUDENT_GET_BY_ID_API_ROUTE,
	STUDENT_UPDATE_API_ROUTE,
} from "@/helpers/api-routes";
import { getAuthHeader } from "@/helpers/auth-helper";

export const getAllStudentsByPage = async (
	page = 0,
	size = 20,
	sort = "name",
	type = "asc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${STUDENT_GET_ALL_BY_PAGE_API_ROUTE}?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getAllStudents = async () => {
	return fetch(`${STUDENT_GET_ALL_API_ROUTE}`, {
		method: "GET",
		headers: await getAuthHeader(),
	});
};

export const getAllStudentsByAdvisor = async () => {
	return fetch(`${STUDENT_GET_ALL_BY_ADVISOR_API_ROUTE}`, {
		method: "GET",
		headers: await getAuthHeader(),
	});
};

export const getStudentById = async (id) => {
	return fetch(`${STUDENT_GET_BY_ID_API_ROUTE}?id=${id}`, {
		method: "GET",
		headers: await getAuthHeader(),
	});
};

export const createStudent = async (payload) => {
	return fetch(STUDENT_CREATE_API_ROUTE, {
		method: "POST",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload),
	});
};

export const updateStudent = async (payload) => {
	return fetch(`${STUDENT_UPDATE_API_ROUTE}/${payload.id}`, {
		method: "PUT",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload),
	});
};

export const deleteStudent = async (id) => {
	return fetch(`${STUDENT_DELETE_API_ROUTE}/${id}`, {
		method: "DELETE",
		headers: await getAuthHeader(),
	});
};

export const assignProgramToStudent = async (payload) => {
	return fetch(STUDENT_ASSIGN_PROGRAM_API_ROUTE, {
		method: "POST",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload),
	});
};
