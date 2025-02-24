import {
	ADVISOR_TEACHER_GET_ALL_API_ROUTE,
	TEACHER_ASSIGN_PROGRAM_API_ROUTE,
	TEACHER_CREATE_API_ROUTE,
	TEACHER_DELETE_API_ROUTE,
	TEACHER_GET_ALL_API_ROUTE,
	TEACHER_GET_ALL_BY_PAGE_API_ROUTE,
	TEACHER_GET_BY_ID_API_ROUTE,
	TEACHER_UPDATE_API_ROUTE,
} from "@/helpers/api-routes";
import { getAuthHeader } from "@/helpers/auth-helper";

export const getAllTeachersByPage = async (
	page = 0,
	size = 20,
	sort = "name",
	type = "asc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${TEACHER_GET_ALL_BY_PAGE_API_ROUTE}?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getAllTeachers = async () => {
	return fetch(`${TEACHER_GET_ALL_API_ROUTE}`, {
		method: "GET",
		headers: await getAuthHeader(),
	});
};

export const getAllAdvisorTeachers = async () => {
	return fetch(`${ADVISOR_TEACHER_GET_ALL_API_ROUTE}`, {
		method: "GET",
		headers: await getAuthHeader(),
	});
};

export const getTeacherById = async (id) => {
	return fetch(`${TEACHER_GET_BY_ID_API_ROUTE}/${id}`, {
		method: "GET",
		headers: await getAuthHeader(),
	});
};

export const createTeacher = async (payload) => {
	return fetch(TEACHER_CREATE_API_ROUTE, {
		method: "POST",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload),
	});
};

export const updateTeacher = async (payload) => {
	console.log(payload)
	return fetch(`${TEACHER_UPDATE_API_ROUTE}/${payload.id}`, {
		method: "PUT",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload),
	});
};

export const deleteTeacher = async (id) => {
	return fetch(`${TEACHER_DELETE_API_ROUTE}/${id}`, {
		method: "DELETE",
		headers: await getAuthHeader(),
	});
};

export const assignProgramToTeacher = async (payload) => {
	return fetch(TEACHER_ASSIGN_PROGRAM_API_ROUTE, {
		method: "POST",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload),
	});
};
