import {
	PROGRAM_CREATE_API_ROUTE,
	PROGRAM_DELETE_API_ROUTE,
	PROGRAM_GET_ALL_API_ROUTE,
	PROGRAM_GET_ALL_BY_PAGE_API_ROUTE,
	PROGRAM_GET_ASSIGNED_API_ROUTE,
	PROGRAM_GET_BY_ID_API_ROUTE,
	PROGRAM_GET_BY_STUDENT_API_ROUTE,
	PROGRAM_GET_BY_TEACHER_API_ROUTE,
	PROGRAM_GET_UNASSIGNED_API_ROUTE,
} from "@/helpers/api-routes";
import { getAuthHeader } from "@/helpers/auth-helper";

export const getAllProgramsByPage = async (
	page = 0,
	size = 20,
	sort = "day",
	type = "asc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${PROGRAM_GET_ALL_BY_PAGE_API_ROUTE}?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getAllPrograms = async () => {
	return fetch(`${PROGRAM_GET_ALL_API_ROUTE}`, {
		method: "GET",
		headers: await getAuthHeader(),
	});
};

export const getProgramById = async (id) => {
	return fetch(`${PROGRAM_GET_BY_ID_API_ROUTE}/${id}`, {
		method: "GET",
		headers: await getAuthHeader(),
	});
};

export const getAssignedPrograms = async () => {
	return fetch(`${PROGRAM_GET_ASSIGNED_API_ROUTE}`, {
		method: "GET",
		headers: await getAuthHeader(),
	});
};

export const getUnAssignedPrograms = async () => {
	return fetch(`${PROGRAM_GET_UNASSIGNED_API_ROUTE}`, {
		method: "GET",
		headers: await getAuthHeader(),
	});
};

export const getProgramsByTeacher = async () => {
	return fetch(`${PROGRAM_GET_BY_TEACHER_API_ROUTE}`, {
		method: "GET",
		headers: await getAuthHeader(),
	});
};

export const getProgramsByStudent = async () => {
	return fetch(`${PROGRAM_GET_BY_STUDENT_API_ROUTE}`, {
		method: "GET",
		headers: await getAuthHeader(),
	});
};

export const createProgram = async (payload) => {
	return fetch(PROGRAM_CREATE_API_ROUTE, {
		method: "POST",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload),
	});
};

export const deleteProgram = async (id) => {
	return fetch(`${PROGRAM_DELETE_API_ROUTE}/${id}`, {
		method: "DELETE",
		headers: await getAuthHeader(),
	});
};
