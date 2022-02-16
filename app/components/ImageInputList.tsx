import React from "react";
import { View, StyleSheet } from "react-native";
import style from "../config/style";
import ImageInput from "./ImageInput";

interface IImageInputListProps {
  imageUris: Array<string>;
  onRemoveImage: Function;
  onAddImage: Function;
}

const ImageInputList: React.FunctionComponent<IImageInputListProps> = ({
  imageUris,
  onRemoveImage,
  onAddImage,
}) => {
  return (
    <View style={styles.imageContainer}>
      {imageUris?.map((uri: string) => (
        <ImageInput
          key={uri}
          imageUri={uri}
          onChangeImage={(uri: string) => onRemoveImage(uri)}
        />
      ))}
      <ImageInput onChangeImage={(uri: string) => onAddImage(uri)} />
    </View>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
  },
});

export default ImageInputList;
