import {
	LESSON_CREATE_API_ROUTE,
	LESSON_DELETE_API_ROUTE,
	LESSON_GET_ALL_API_ROUTE,
	LESSON_GET_ALL_BY_PAGE_API_ROUTE,
} from "@/helpers/api-routes";
import { getAuthHeader } from "@/helpers/auth-helper";

export const getAllLessonsByPage = async (
	page = 0,
	size = 20,
	sort = "lessonName",
	type = "asc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${LESSON_GET_ALL_BY_PAGE_API_ROUTE}?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getAllLessons = async () => {
	return fetch(`${LESSON_GET_ALL_API_ROUTE}`, {
		method: "GET",
		headers: await getAuthHeader(),
	});
};

export const createLesson = async (payload) => {
	return fetch(LESSON_CREATE_API_ROUTE, {
		method: "POST",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload),
	});
};

export const deleteLesson = async (id) => {
	return fetch(`${LESSON_DELETE_API_ROUTE}/${id}`, {
		method: "DELETE",
		headers: await getAuthHeader(),
	});
};
