import { appConfig } from "./config";

export const CONTACT_CREATE_API_ROUTE = `${appConfig.apiURL}/contactMessages/save`;

export const LOGIN_API_ROUTE = `${appConfig.apiURL}/auth/login`;

export const ADMIN_GET_ALL_BY_PAGE_API_ROUTE = `${appConfig.apiURL}/admin/getAll`;
export const ADMIN_CREATE_API_ROUTE = `${appConfig.apiURL}/admin/save`;
export const ADMIN_DELETE_API_ROUTE = `${appConfig.apiURL}/admin/delete`;

export const MANAGER_GET_ALL_BY_PAGE_API_ROUTE = `${appConfig.apiURL}/dean/search`;
export const MANAGER_CREATE_API_ROUTE = `${appConfig.apiURL}/dean/save`;
export const MANAGER_DELETE_API_ROUTE = `${appConfig.apiURL}/dean/delete`;
export const MANAGER_GET_BY_ID_API_ROUTE = `${appConfig.apiURL}/dean/getManagerById`;
export const MANAGER_UPDATE_API_ROUTE = `${appConfig.apiURL}/dean/update`;

export const ASSISTANT_GET_ALL_BY_PAGE_API_ROUTE = `${appConfig.apiURL}/vicedean/search`;
export const ASSISTANT_CREATE_API_ROUTE = `${appConfig.apiURL}/vicedean/save`;
export const ASSISTANT_DELETE_API_ROUTE = `${appConfig.apiURL}/vicedean/delete`;
export const ASSISTANT_GET_BY_ID_API_ROUTE = `${appConfig.apiURL}/vicedean/getViceDeanById`;
export const ASSISTANT_UPDATE_API_ROUTE = `${appConfig.apiURL}/vicedean/update`;

export const TERM_GET_ALL_BY_PAGE_API_ROUTE = `${appConfig.apiURL}/educationTerms/search`;
export const TERM_GET_ALL_API_ROUTE = `${appConfig.apiURL}/educationTerms/getAll`;
export const TERM_CREATE_API_ROUTE = `${appConfig.apiURL}/educationTerms`;
export const TERM_DELETE_API_ROUTE = `${appConfig.apiURL}/educationTerms`;
export const TERM_GET_BY_ID_API_ROUTE = `${appConfig.apiURL}/educationTerms`;
