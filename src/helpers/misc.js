import { appConfig } from "./config";

export const getGenderValues = () =>
	appConfig.genders.map((item) => item.value);
