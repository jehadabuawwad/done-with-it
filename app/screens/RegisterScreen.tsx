import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";

import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";
import { useSelector } from "react-redux";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

interface IRegisterScreenProps {}

const RegisterScreen: React.FunctionComponent<IRegisterScreenProps> = () => {
  const { userSignUp } = useApi();
  const errors = useSelector((state: any) => state.userState.errors);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 400);
  }, []);

  return (
    <Screen style={styles.container}>
      <ActivityIndicator visible={loading} />
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values: any) => {
          userSignUp(values);
        }}
        validationSchema={validationSchema}
      >
        {errors && <ErrorMessage error={errors.error} visible={true} />}
        <FormField
          autoCorrect={false}
          icon='account'
          name='name'
          placeholder='Name'
        />
        <FormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='email'
          keyboardType='email-address'
          name='email'
          placeholder='Email'
          textContentType='emailAddress'
        />
        <FormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          name='password'
          placeholder='Password'
          secureTextEntry
          textContentType='password'
        />
        <SubmitButton title='Register' />
      </Form>
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default RegisterScreen;
