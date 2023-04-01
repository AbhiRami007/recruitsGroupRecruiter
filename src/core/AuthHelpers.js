const AUTH_LOCAL_STORAGE_KEY = "user-information";
const AUTH_LOCAL_STORAGE_USER_DATA = "user-data";
const AUTH_LOCAL_STORAGE_USER_DOCUMENTS = "user-documents";
const AUTH_LOCAL_STORAGE_JOBS = "jobs";
const getAuth = () => {
  if (!localStorage) {
    return;
  }

  const lsValue = localStorage.getItem(AUTH_LOCAL_STORAGE_KEY);
  if (!lsValue) {
    return;
  }

  try {
    const auth = JSON.parse(lsValue);
    if (auth) {
      return auth;
    }
  } catch (error) {
    console.error("AUTH LOCAL STORAGE PARSE ERROR", error);
  }
};

const setAuth = (auth) => {
  if (!localStorage) {
    return;
  }

  try {
    const lsValue = auth;
    localStorage.setItem(AUTH_LOCAL_STORAGE_KEY, JSON.stringify(lsValue));
    localStorage.setItem(
      AUTH_LOCAL_STORAGE_USER_DATA,
      JSON.stringify(lsValue.user)
    );
  } catch (error) {
    console.error("AUTH LOCAL STORAGE SAVE ERROR", error);
  }
};

const getUser = () => {
  if (!localStorage) {
    return;
  }

  const lsValue = localStorage.getItem(AUTH_LOCAL_STORAGE_USER_DATA);
  if (!lsValue) {
    return;
  }

  try {
    const auth = JSON.parse(lsValue);
    if (auth) {
      return auth;
    }
  } catch (error) {
    console.error("AUTH LOCAL STORAGE PARSE ERROR", error);
  }
};
const setUser = (user) => {
  if (!localStorage) {
    return;
  }

  try {
    localStorage.setItem(AUTH_LOCAL_STORAGE_USER_DATA, JSON.stringify(user));
  } catch (error) {
    console.error("AUTH LOCAL STORAGE SAVE ERROR", error);
  }
};

const getDocuments = () => {
  if (!localStorage) {
    return;
  }

  const lsValue = localStorage.getItem(AUTH_LOCAL_STORAGE_USER_DOCUMENTS);
  if (!lsValue) {
    return;
  }

  try {
    const auth = JSON.parse(lsValue);
    if (auth) {
      return auth;
    }
  } catch (error) {
    console.error("AUTH LOCAL STORAGE PARSE ERROR", error);
  }
};
const setDocuments = (docs) => {
  if (!localStorage) {
    return;
  }

  try {
    localStorage.setItem(
      AUTH_LOCAL_STORAGE_USER_DOCUMENTS,
      JSON.stringify(docs)
    );
  } catch (error) {
    console.error("AUTH LOCAL STORAGE SAVE ERROR", error);
  }
};

const getJobsInfo = () => {
  if (!localStorage) {
    return;
  }

  const lsValue = localStorage.getItem(AUTH_LOCAL_STORAGE_JOBS);
  if (!lsValue) {
    return;
  }

  try {
    const auth = JSON.parse(lsValue);
    if (auth) {
      return auth;
    }
  } catch (error) {
    console.error("AUTH LOCAL STORAGE PARSE ERROR", error);
  }
};
const setJobsInfo = (jobs) => {
  if (!localStorage) {
    return;
  }

  try {
    localStorage.setItem(AUTH_LOCAL_STORAGE_JOBS, JSON.stringify(jobs));
  } catch (error) {
    console.error("AUTH LOCAL STORAGE SAVE ERROR", error);
  }
};

const removeAuth = () => {
  if (!localStorage) {
    return;
  }

  try {
    localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY);
    localStorage.removeItem(AUTH_LOCAL_STORAGE_USER_DATA);
    localStorage.removeItem(AUTH_LOCAL_STORAGE_USER_DOCUMENTS);
    localStorage.removeItem(AUTH_LOCAL_STORAGE_JOBS);
  } catch (error) {
    console.error("AUTH LOCAL STORAGE REMOVE ERROR", error);
  }
};

export function setupAxios(axios) {
  axios.defaults.headers.Accept = "application/json";
  axios.interceptors.request.use(
    (config) => {
      const auth = getAuth();
      if (auth && auth.api_token) {
        config.headers.Authorization = `Bearer ${auth.api_token}`;
      }

      return config;
    },
    (err) => Promise.reject(err)
  );
}

export {
  getAuth,
  setAuth,
  removeAuth,
  setUser,
  getUser,
  getDocuments,
  setDocuments,
  setJobsInfo,
  getJobsInfo,
  AUTH_LOCAL_STORAGE_JOBS,
  AUTH_LOCAL_STORAGE_KEY,
  AUTH_LOCAL_STORAGE_USER_DATA,
  AUTH_LOCAL_STORAGE_USER_DOCUMENTS,
};
