import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import colors from "../config/colors";

import AppText from "./Text";

interface IPickerItemProps {
  label: string;
  onPress: any;
  icon: any;
}

const PickerItem: React.FunctionComponent<IPickerItemProps> = ({
  label,
  onPress,
  icon,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.innerGrid}>
          <AppText style={styles.text}>{label}</AppText>
          <MaterialCommunityIcons name={icon} size={40} color={colors.medium} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  text: { padding: 20 },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 25,
    padding: 5,
    marginHorizontal: "25%",
    marginTop: 20,
    width: "50%",
  },
  innerGrid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 1,
    height: 50,
  },
});
export default PickerItem;
