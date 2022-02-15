import { Image, StyleSheet } from "react-native";

import * as Yup from "yup";

import Screen from "../components/Screen";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/AppForm";

interface ILoginScreenProps {}

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen: React.FunctionComponent<ILoginScreenProps> = () => {
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values: string) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name='email'
          icon='email'
          autoCorrect={false}
          autoCapitalize='none'
          placeholder='Email'
          keyboardType='email-address'
          textContentType='emailAddress'
        />
        <AppFormField
          name='password'
          icon='lock'
          autoCorrect={false}
          autoCapitalize='none'
          placeholder='Password'
          secureTextEntry={true}
          textContentType='password'
        />
        <SubmitButton title='Login' />
      </AppForm>
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
