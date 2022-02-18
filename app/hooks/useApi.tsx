import axios from "axios";

const useApi = () => {
  const API = {
    USER_SINGUP: "/api/v2/users",
    USER_DATA: "/api/v1/user",
  };

  const backEndInstance = axios.create({
    baseURL: process.env.baseURL,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const userSignUp = async ({ first_name, last_name, email, password }) => {
    try {
      const response = await backEndInstance.post(
        `${process.env.BASE_URL}${API.USER_SINGUP}`,
        {
          user: {
            first_name,
            last_name,
            email,
            password,
          },
        }
      );
      const token =
        response?.headers?.authorization?.split(" ")[1] || undefined;
    } catch (error) {
      handleError(error);
    }
  };

  const handleError = (error) => {
    const errors = error?.response?.data.errors;
  };

  return { API, backEndInstance, userSignUp };
};

export default useApi;
