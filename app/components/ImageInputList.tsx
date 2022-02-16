import React from "react";
import { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

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
  const scrollRef = useRef<any>();
  return (
    <View>
      <ScrollView
        ref={scrollRef}
        horizontal
        onContentSizeChange={() => scrollRef.current.scrollToEnd()}
      >
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
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
  },
});

export default ImageInputList;
