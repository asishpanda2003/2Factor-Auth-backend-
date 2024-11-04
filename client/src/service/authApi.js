import api from "./api";

const register = async (username, password) => {
  return await api.post("/auth/register", {
    username,
    password,
  });
};

const loginUser = async (username, password) => {
  return await api.post(
    "/auth/login",
    {
      username,
      password,
    },
    {
      withCredentials: true,
    }
  );
};

const authStatus = async () => {
  return await api.get("/auth/status", {
    withCredentials: true,
  });
};

const logoutUser = async () => {
  return await api.post(
    "/auth/logout",
    {},
    {
      withCredentials: true,
    }
  );
};

const setup2FA = async () => {
  return await api.post(
    "/auth/2fa/setup",
    {},
    {
      withCredentials: true,
    }
  );
};

const verify2FA = async () => {
  return await api.post(
    "/auth/2fa/verify",
    { token :otp },
    {
      withCredentials: true,
    }
  );
};

const reset2FA = async () => {
  return await api.post(
    "/auth/2fa/reset",
    {},
    {
      withCredentials: true,
    }
  );
};

export { setup2FA, verify2FA, reset2FA, logoutUser, authStatus, loginUser, register };
