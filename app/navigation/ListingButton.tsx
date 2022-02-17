import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native";

import colors from "../config/colors";

interface IListingButtonProps {}

const ListingButton: React.FunctionComponent<IListingButtonProps> = ({}) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("ListingEdit")}
    >
      <View style={styles.container}>
        <MaterialCommunityIcons
          name='plus-circle'
          color={colors.white}
          size={30}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 40,
    borderWidth: 10,
    borderColor: colors.white,
    bottom: Platform.OS == "android" ? 10 : 15,
    height: 80,
    justifyContent: "center",
    width: 80,
    zIndex: 10,
  },
});

export default ListingButton;
