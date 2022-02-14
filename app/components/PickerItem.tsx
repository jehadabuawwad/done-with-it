import * as React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText";

interface IPickerItemProps {
  label: string;
  onPress: any;
}

const PickerItem: React.FunctionComponent<IPickerItemProps> = ({
  label,
  onPress,
}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <AppText style={styles.text}>{label}</AppText>
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  text: { padding: 20},
});
export default PickerItem;
