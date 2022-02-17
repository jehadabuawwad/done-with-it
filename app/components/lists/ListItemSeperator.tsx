import * as React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../config/colors";

interface IItemSeperatorProps {}

const ListItemSeparator: React.FunctionComponent<IItemSeperatorProps> = () => {
  return <View style={styles.seperator}></View>;
};

const styles = StyleSheet.create({
  seperator: { width: "100%", height: 3, backgroundColor: colors.light },
});
export default ListItemSeparator;
