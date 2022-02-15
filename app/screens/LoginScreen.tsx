import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import { AppTextInput } from "../components/AppTextInput";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ErrorMessage from "../components/Error";
import AppFormField from "../components/AppFormField";

interface ILoginScreenProps {}

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen: React.FunctionComponent<ILoginScreenProps> = () => {
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppFormField
              name='email'
              autoCorrect={false}
              autoCapitalize='none'
              icon='email'
              placeholder='Email'
              keyboardType='email-address'
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
              textContentType='emailAddress'
            />

            <AppFormField
              name='password'
              autoCorrect={false}
              autoCapitalize='none'
              icon='lock'
              placeholder='Password'
              secureTextEntry={true}
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched("password")}
              textContentType='password'
            />
            <AppButton title='Login' onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
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
