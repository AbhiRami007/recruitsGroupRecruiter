import axios from "axios";
// const API_URL = process.env.REACT_APP_API_URL;

const API_URL = process.env.REACT_APP_API_URL+"/admin";
const USER_API_URL=process.env.REACT_APP_API_URL+"/user"

export const GET_USER_BY_ACCESS_TOKEN_URL = `${API_URL}/verify-token`;
export const LOGIN_URL = `${API_URL}/login`;
export const REGISTER_URL = `${API_URL}/register`;
export const VERIFY_OTP = `${API_URL}/verify-otp`;
export const RESEND_OTP = `${API_URL}/resend-otp`;
export const GET_ADMIN_USER_BY_ID = `${API_URL}/id`;
export const UPDATE_USER_DATA = `${API_URL}/update`;
export const FORGOT_PASSWORD = `${API_URL}/forgot-password`;
export const CHECK_PASSWORD = `${API_URL}/check-password`;
export const GOOGLE_URL = `${API_URL}/google/login`;
// export const UPDATE_USER_IMAGE = `${API_URL}/profile`;
export const GET_ALL_CANDIDATES = `${API_URL}/list`

export const GET_USER_DOCS = `${USER_API_URL}/document`;
export const UPDATE_USER_IMAGE = `${USER_API_URL}/profile`;
export const CREATE_URL = `${USER_API_URL}/create`
export const CREATE_JOB_POST = `${USER_API_URL}/jobs`
export const GET_USER_BY_ID = `${USER_API_URL}/id`;
export const GET_ALL_JOBS = `${USER_API_URL}/jobs`;


export function getJobs() {
  return axios.get(GET_ALL_JOBS);
}

// export function updateAppliedjobs(id, userId) {
//   return axios.put(APPLIED_JOBS + "/" + id, userId);
// }

// export function updateSavedjobs(id, userId) {
//   return axios.put(SAVED_JOBS + "/" + id, userId);
// }


export function getAllCandidates() {
  return axios.get(GET_ALL_CANDIDATES)
}

export function create(
 body
) {
  return axios.post(CREATE_URL, {
   ...body,
joined_on: new Date(),
  })
}

export function createJob(data, type) {
 
  return axios.post(CREATE_JOB_POST + "?type="+type, data);
}

export function login(email, password) {
  return axios.post(LOGIN_URL, {
    email,
    password,
  });
}

export function googleLogin(code) {
  return axios.get(GOOGLE_URL + "?code=" + code.code);
}

export function signUp(data) {
  return axios.post(REGISTER_URL, {
    email: data.email,
    name: data.name,
    password: data.password,
    password_confirmation: data.password_confirmation,
    joined_on: new Date(),
  });
}

export function getUserByToken(token) {
  return axios.post(GET_USER_BY_ACCESS_TOKEN_URL, {
    api_token: token.api_token,
    refresh_token: token.refreshToken,
  });
}

export function verifyEmailOtp(otp, email) {
  return axios.put(VERIFY_OTP, {
    otp,
    email,
  });
}

export function resendOtp(email, newEmail) {
  return axios.put(RESEND_OTP, {
    email,
    newEmail,
  });
}

export function getUserDataById(id) {
  return axios.get(GET_ADMIN_USER_BY_ID + "/" + id);
}

export function getUserById(id) {
  return axios.get(GET_USER_BY_ID + "/" + id);
}

export function resetPassword(email) {
  return axios.post(FORGOT_PASSWORD, {
    email: email,
  });
}

export function updateUser(id, body) {
  return axios.put(UPDATE_USER_DATA + "/" + id, {
    ...body,
  });
}

export function checkPassword(email, password) {
  return axios.post(CHECK_PASSWORD, {
    email: email,
    password: password,
  });
}

export function getUserDocuments(id) {
  return axios.get(GET_USER_DOCS + "/" + id);
}

export function deleteDocument(id, type) {
  return axios.put(GET_USER_DOCS + "/" + type + "/" + id);
}

export function updateUserDocument(id, type, file) {
  const data = new FormData();
  data.append("file", file);
  return axios.post(GET_USER_DOCS + "/" + type + "/" + id, data);
}

export function updateUserImage(id, image) {
  const data = new FormData();
  data.append("image", image);
  return axios.post(UPDATE_USER_IMAGE + "/" + id, data);
}

export function deleteUserImage(id) {
  return axios.put(UPDATE_USER_IMAGE + "/" + id);
}

