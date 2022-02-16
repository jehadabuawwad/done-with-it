import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

interface IListItemDeleteActionProps {
  onPress: any;
}

const ListItemDeleteAction: React.FunctionComponent<
  IListItemDeleteActionProps
> = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name='trash-can'
          size={35}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListItemDeleteAction;
