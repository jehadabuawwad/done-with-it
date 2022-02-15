import { useState } from "react";
import { Image, StyleSheet } from "react-native";

import { AppTextInput } from "../components/AppTextInput";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

interface ILoginScreenProps {}

const LoginScreen: React.FunctionComponent<ILoginScreenProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppTextInput
        autoCorrect={false}
        autoCapitalize='none'
        icon='email'
        placeholder='Email'
        keyboardType='email-address'
        onChangeText={(text: any) => setEmail(text)}
        textContentType='emailAddress'
      />
      <AppTextInput
        autoCorrect={false}
        autoCapitalize='none'
        icon='lock'
        placeholder='Password'
        secureTextEntry={true}
        onChangeText={(text: any) => setPassword(text)}
        textContentType='password'
      />
      <AppButton title='Login' onPress={() => console.log(email, password)} />
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
