import { appConfig } from "./config";

export const getGenderValues = () =>
	appConfig.genders.map((item) => item.value);

export const getTermValues = () =>
	appConfig.educationTerms.map((item) => item.value);

export const getDayValues = () => appConfig.days.map((item) => item.value);

export const getTermLabel = (value) => {
	const term = appConfig.educationTerms.find((item) => item.value === value);
	return term?.label;
};

export const isStringArray = (str) => {
	try {
		const arr = JSON.parse(str);
		return Array.isArray(arr) && arr.length > 0;
	} catch {
		return false;
	}
};
