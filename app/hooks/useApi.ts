import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "@env";
import { HOST } from "@env";
import jwtDecode from "jwt-decode";
import { useContext } from "react";

import AuthContext from "../features/context/auth";

import {
  setUserData,
  setAppDataLists,
  setAccessToken,
  setErrors,
} from "../features/userState";

import cache from "../utility/cache";

interface userData {
  name?: string;
  email: string;
  password: string;
}

interface AppData {
  listings: any;
  title: string;
  price: string;
  category: any;
  description: string;
  location: Object;
  images: Array<any>;
}

const useApi = () => {
  const dispatch = useDispatch();
  const authContext = useContext(AuthContext);
  const { store, get } = cache;

  if (authContext?.userLoggedIn) {
    var token = useSelector((state: any) => state.userState.authData.token);
  }

  const API = {
    AUTH: "/api/auth",
    USER: "/api/users",
    APP_DATA: "/api/my/listings",
  };

  const backEndInstance = axios.create({
    baseURL: BASE_URL,
    proxy: {
      protocol: "http",
      host: HOST,
      port: 9000,
    },
    headers: {
      "x-auth-token": token,
    },
  });

  const userSignUp = async ({ name, email, password }: userData) => {
    try {
      const response = await backEndInstance.post(API.USER, {
        name,
        email,
        password,
      });
      const user: userData = { email, password };
      userLogIn(user);
    } catch (error: any) {
      console.log(error.response.data);
      handleError(error);
    }
  };

  const userLogIn = async ({ email, password }: userData) => {
    try {
      const data = { email, password };
      const response = await backEndInstance.post(API.AUTH, data);
      const token = response.data || response?.headers["x-auth-token"];
      identifyUser(token);
    } catch (error: any) {
      handleError(error);
    }
  };
  const userLogOut = async ({ email, password }: userData) => {
    identifyUser();
  };

  const getListsData = async () => {
    try {
      const response = await backEndInstance.get(API.APP_DATA);
      store("lists", response.data);
      dispatch(setAppDataLists(response.data));
      dispatch(setErrors({}));
    } catch (error) {
      handleError(error);
    }
  };

  const addListsData = async (listing: AppData) => {
    const imagesData: { url: string }[] = [];
    listing.images.forEach((element) => {
      imagesData.push({ url: element });
    });

    try {
      let data = {
        title: listing.title,
        price: listing.price,
        categoryId: listing.category.value,
        description: listing.description,
        images: imagesData,
        location: JSON.stringify(listing.location),
      };
      const response = await backEndInstance.post(API.APP_DATA, data);
      return { sucess: true, data: response.data };
    } catch (error: any) {
      handleError(error);
    }
  };

  const identifyUser = async (token?: any) => {
    try {
      if (token) {
        dispatch(setAccessToken(token));
        dispatch(setUserData(jwtDecode(token)));
        authContext?.setUserLoggedIn(true);
      } else {
        dispatch(setAccessToken(""));
        dispatch(setUserData({}));
        authContext?.setUserLoggedIn(false);
      }
    } finally {
      dispatch(setErrors({}));
    }
  };

  const handleError = async (error: any) => {
    const errorData = error.response.data;
    await dispatch(setErrors(errorData));
  };
  return {
    API,
    backEndInstance,
    identifyUser,
    userSignUp,
    userLogIn,
    userLogOut,
    getListsData,
    addListsData,
  };
};

export default useApi;
