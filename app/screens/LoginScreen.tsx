import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";

import { AppTextInput } from "../components/AppTextInput";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

interface ILoginScreenProps {}

const LoginScreen: React.FunctionComponent<ILoginScreenProps> = () => {
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              autoCorrect={false}
              autoCapitalize='none'
              icon='email'
              placeholder='Email'
              keyboardType='email-address'
              onChangeText={handleChange("email")}
              textContentType='emailAddress'
            />
            <AppTextInput
              autoCorrect={false}
              autoCapitalize='none'
              icon='lock'
              placeholder='Password'
              secureTextEntry={true}
              onChangeText={handleChange("password")}
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
