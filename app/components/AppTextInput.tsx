import { Platform, StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyle from "../config/style";
import colors from "../config/colors";

interface IAppTextInputProps {
  autoCorrect?: boolean;
  autoCapitalize?: any;
  icon?: any;
  keyboardType?: any;
  placeholder?: string;
  secureTextEntry?: boolean;
  textContentType?: any;
  onChangeText?: any;
  onBlur?: any;
}

export const AppTextInput: React.FunctionComponent<IAppTextInputProps> = ({
  icon,
  ...otherProps
}) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={icon}
        size={20}
        color={colors.medium}
        style={styles.icon}
      />
      <TextInput style={defaultStyle.text} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.light,
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
    width: "100%",
  },
  icon: {
    marginRight: 10,
    paddingTop: Platform.OS === "android" ? 5 : 0,
  },
});
