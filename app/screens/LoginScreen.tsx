import React, { useEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import * as Yup from "yup";

import useApi from "../hooks/useApi";

import {
  Form,
  FormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import Screen from "../components/Screen";
import ActivityIndicator from "../components/ActivityIndicator";

interface ILoginScreenProps {}

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

type check = any | null;
const LoginScreen: React.FunctionComponent<ILoginScreenProps> = () => {
  const [loading, setLoading] = useState(true);
  const { userLogIn } = useApi();

  const errors = useSelector((state: any) => state.userState.errors);
  useEffect(() => {
    setTimeout(() => setLoading(false), 400);
  }, []);

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Form
          initialValues={{ email: "", password: "" }}
          onSubmit={(values: any) => {
            userLogIn(values);
          }}
          validationSchema={validationSchema}
        >
          <FormField
            name='email'
            icon='email'
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='Email'
            keyboardType='email-address'
            textContentType='emailAddress'
          />
          <FormField
            name='password'
            icon='lock'
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='Password'
            secureTextEntry={true}
            textContentType='password'
          />
          {errors && <ErrorMessage error={errors.error} visible={true} />}
          <SubmitButton title='Login' />
        </Form>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default LoginScreen;
