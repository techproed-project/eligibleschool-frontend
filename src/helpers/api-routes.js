import { appConfig } from "./config";



export const CONTACT_CREATE_API_ROUTE = `${appConfig.apiURL}/contactMessages/save`;
export const LOGIN_API_ROUTE = `${appConfig.apiURL}/auth/login`;
export const ADMIN_GET_ALL_BY_PAGE_API_ROUTE = `${appConfig.apiURL}/admin/getAll`;
export const ADMIN_CREATE_API_ROUTE = `${appConfig.apiURL}/admin/save`;
export const ADMIN_DELETE_API_ROUTE = `${appConfig.apiURL}/admin/delete`;