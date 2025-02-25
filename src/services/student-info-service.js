import {
	STUDENT_INFO_CREATE_API_ROUTE,
	STUDENT_INFO_DELETE_API_ROUTE,
	STUDENT_INFO_GET_BY_ID_API_ROUTE,
	STUDENT_INFO_GET_BY_STUDENT_API_ROUTE,
	STUDENT_INFO_GET_BY_TEACHER_API_ROUTE,
	STUDENT_INFO_UPDATE_API_ROUTE,
} from "@/helpers/api-routes";
import { getAuthHeader } from "@/helpers/auth-helper";

export const getAllInfoForTeacherByPage = async (page = 0, size = 20) => {
	const qs = `page=${page}&size=${size}`;

	return fetch(`${STUDENT_INFO_GET_BY_TEACHER_API_ROUTE}?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getAllInfoForStudentByPage = async (page = 0, size = 20) => {
	const qs = `page=${page}&size=${size}`;

	return fetch(`${STUDENT_INFO_GET_BY_STUDENT_API_ROUTE}?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getStudentInfoById = async (id) => {
	return fetch(`${STUDENT_INFO_GET_BY_ID_API_ROUTE}?id=${id}`, {
		method: "GET",
		headers: await getAuthHeader(),
	});
};

export const createStudentInfo = async (payload) => {
	return fetch(STUDENT_INFO_CREATE_API_ROUTE, {
		method: "POST",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload),
	});
};

export const updateStudentInfo = async (payload) => {
	return fetch(`${STUDENT_INFO_UPDATE_API_ROUTE}/${payload.id}`, {
		method: "PUT",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload),
	});
};

export const deleteStudentInfo = async (id) => {
	return fetch(`${STUDENT_INFO_DELETE_API_ROUTE}/${id}`, {
		method: "DELETE",
		headers: await getAuthHeader(),
	});
};
