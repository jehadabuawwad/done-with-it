import React from "react";
import { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import * as ImagePicker from "expo-image-picker";

interface IImageInputProps {
  imageUri?: string;
  onChangeImage: Function;
}

const ImageInput: React.FunctionComponent<IImageInputProps> = ({
  imageUri,
  onChangeImage,
}) => {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    !granted &&
      alert("You Need to get permession to access the library of photos");
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      !result.cancelled && onChangeImage(result.uri);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const handlePress = () => {
    !imageUri && selectImage();
    imageUri &&
      Alert.alert("Delete", "Are You sure you want to delete this photo ?", [
        {
          text: "Yes",
          onPress: () => {
            onChangeImage(imageUri);
          },
        },
        { text: "No" },
      ]);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
          {!imageUri && (
            <MaterialCommunityIcons
              name='camera'
              color={colors.medium}
              size={40}
            />
          )}
          {imageUri && (
            <Image source={{ uri: imageUri }} style={styles.image} />
          )}
        </View>
      </TouchableWithoutFeedback>
    </>
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
    marginRight: 10,
  },
  image: { height: 100, width: 100, borderRadius: 15 },
});

export default ImageInput;
