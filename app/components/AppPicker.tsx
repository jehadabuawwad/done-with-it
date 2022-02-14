import { Platform, StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyle from "../config/style";
import colors from "../config/colors";
import AppText from "./AppText";

interface IAppPickerProps {
  icon: any;
  placeholder: string;
}

export const AppPicker: React.FunctionComponent<IAppPickerProps> = ({
  icon,
  placeholder,
  ...otherProps
}) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <AppText style={styles.text}>{placeholder}</AppText>
      {icon && (
        <MaterialCommunityIcons
          name='chevron-down'
          size={20}
          color={colors.medium}
        />
      )}
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
  text: { flex: 1 },
});
