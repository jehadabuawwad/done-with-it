import { useDispatch } from "react-redux";
import axios from "axios";

import {
  setUserData,
  setAppData,
  setAccessToken,
  setErrors,
} from "../features/userState";

interface userData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

const useApi = () => {
  const dispatch = useDispatch();

  const API = {
    USER_SINGUP: "",
    APP_DATA: "/api/listings",
  };

  const backEndInstance = axios.create({
    baseURL: process.env.baseURL,
  });

  const userSignUp = async ({
    first_name,
    last_name,
    email,
    password,
  }: userData) => {
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

      dispatch(setAccessToken(token));
    } catch (error) {
      handleError(error);
    }
  };

  const getData = async () => {
    try {
      const response = await backEndInstance.get(API.APP_DATA);
      dispatch(setAppData(response));
    } catch (error) {
      handleError(error);
    }
  };

  const handleError = (error: any) => {
    const errors = error?.response?.data.errors;
    dispatch(setErrors(errors));
  };

  return { API, backEndInstance, userSignUp, getData };
};

export default useApi;
