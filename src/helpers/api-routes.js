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

export const LESSON_GET_ALL_BY_PAGE_API_ROUTE = `${appConfig.apiURL}/lessons/search`;
export const LESSON_GET_ALL_API_ROUTE = `${appConfig.apiURL}/lessons/getAll`;
export const LESSON_CREATE_API_ROUTE = `${appConfig.apiURL}/lessons/save`;
export const LESSON_DELETE_API_ROUTE = `${appConfig.apiURL}/lessons/delete`;

export const PROGRAM_GET_ALL_BY_PAGE_API_ROUTE = `${appConfig.apiURL}/lessonPrograms/search`;
export const PROGRAM_GET_ALL_API_ROUTE = `${appConfig.apiURL}/lessonPrograms/getAll`;
export const PROGRAM_GET_BY_ID_API_ROUTE = `${appConfig.apiURL}/lessonPrograms/getById`;
export const PROGRAM_GET_ASSIGNED_API_ROUTE = `${appConfig.apiURL}/lessonPrograms/getAllAssigned`;
export const PROGRAM_GET_UNASSIGNED_API_ROUTE = `${appConfig.apiURL}/lessonPrograms/getAllUnassigned`;
export const PROGRAM_GET_BY_TEACHER_API_ROUTE = `${appConfig.apiURL}/lessonPrograms/getAllLessonProgramByTeacher`;
export const PROGRAM_GET_BY_STUDENT_API_ROUTE = `${appConfig.apiURL}/lessonPrograms/getAllLessonProgramByStudent`;

export const PROGRAM_CREATE_API_ROUTE = `${appConfig.apiURL}/lessonPrograms/save`;
export const PROGRAM_DELETE_API_ROUTE = `${appConfig.apiURL}/lessonPrograms/delete`;

export const TEACHER_GET_ALL_BY_PAGE_API_ROUTE = `${appConfig.apiURL}/teachers/search`;
export const TEACHER_GET_ALL_API_ROUTE = `${appConfig.apiURL}/teachers/getAll`;
export const TEACHER_GET_BY_ID_API_ROUTE = `${appConfig.apiURL}/teachers/getSavedTeacherById`;
export const TEACHER_CREATE_API_ROUTE = `${appConfig.apiURL}/teachers/save`;
export const TEACHER_DELETE_API_ROUTE = `${appConfig.apiURL}/teachers/delete`;
export const TEACHER_UPDATE_API_ROUTE = `${appConfig.apiURL}/teachers/update`;
export const TEACHER_ASSIGN_PROGRAM_API_ROUTE = `${appConfig.apiURL}/teachers/chooseLesson`;
export const ADVISOR_TEACHER_GET_ALL_API_ROUTE = `${appConfig.apiURL}/advisorTeacher/getAll`;


export const STUDENT_GET_ALL_BY_PAGE_API_ROUTE = `${appConfig.apiURL}/students/search`;
export const STUDENT_GET_ALL_API_ROUTE = `${appConfig.apiURL}/students/getAll`;
export const STUDENT_GET_BY_ID_API_ROUTE = `${appConfig.apiURL}/students/getStudentById`;
export const STUDENT_GET_ALL_BY_ADVISOR_API_ROUTE = `${appConfig.apiURL}/students/getAllByAdvisor`;
export const STUDENT_CREATE_API_ROUTE = `${appConfig.apiURL}/students/save`;
export const STUDENT_DELETE_API_ROUTE = `${appConfig.apiURL}/students/delete`;
export const STUDENT_UPDATE_API_ROUTE = `${appConfig.apiURL}/students/update`;
export const STUDENT_ASSIGN_PROGRAM_API_ROUTE = `${appConfig.apiURL}/students/chooseLesson`;
