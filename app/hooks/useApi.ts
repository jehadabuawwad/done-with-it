import { useDispatch } from "react-redux";
import axios from "axios";
import { BASE_URL } from "@env";
import { HOST } from "@env";

import {
  setUserData,
  setAppDataLists,
  setAccessToken,
  setErrors,
} from "../features/userState";
import { useNavigation } from "@react-navigation/native";
import rouets from "../config/rouets";

interface userData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

const useApi = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const API = {
    USER_SINGUP: "",
    APP_DATA: "/api/listings",
  };

  const backEndInstance = axios.create({
    baseURL: BASE_URL,
    proxy: {
      protocol: "http",
      host: HOST,
      port: 9000,
    },
  });

  const userSignUp = async ({
    first_name,
    last_name,
    email,
    password,
  }: userData) => {
    try {
      const response = await backEndInstance.post(
        `${BASE_URL}${API.USER_SINGUP}`,
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

  const getListsData = async () => {
    try {
      const response = await backEndInstance.get(API.APP_DATA);
      dispatch(setAppDataLists(response.data));
    } catch (error) {
      handleError(error);
    }
  };

  const handleError = async (error: any) => {
    const errors = error.response;

    await dispatch(setErrors({ error: "Data can't be retrieved" }));
    () => navigation.navigate(rouets.Welcome);
  };

  return { API, backEndInstance, userSignUp, getListsData };
};

export default useApi;
