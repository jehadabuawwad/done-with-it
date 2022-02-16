import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";

interface IImageInputProps {
  imagSet: boolean;
  imageUri: string;
}

const ImageInput: React.FunctionComponent<IImageInputProps> = ({
  imageUri,
  imagSet,
}) => {
  return (
    <View style={styles.container}>
      {!imagSet && (
        <MaterialCommunityIcons name='camera' color={colors.medium} size={40} />
      )}
      {imagSet && <Image source={{ uri: imageUri }}  style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    overflow: "hidden",
    width: 100,
  },
  image: { height: 100, width: 100, borderRadius: 15 },
});

export default ImageInput;
