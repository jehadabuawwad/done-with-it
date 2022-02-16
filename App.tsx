import { useState, useEffect } from "react";
import { Button, Image, StyleSheet, View } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
import * as ImagePicker from "expo-image-picker";

import Screen from "./app/components/Screen";
import { AppTextInput } from "./app/components/TextInput";
import Card from "./app/components/Card";
import Picker from "./app/components/Picker";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessageScreen";
import LoginScreen from "./app/screens/LoginScreen";
import DetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ImageInput from "./app/components/ImageInput";

interface IDoneWithItProps {}

const DoneWithIt: React.FunctionComponent<IDoneWithItProps> = (props) => {
  const [imageUri, setImageUri] = useState("");
  const [imagSet, setImageSet] = useState(false);
  const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Cameras", value: 3 },
  ];

  const [category, setCategory] = useState(categories[0]);
  const { landscape } = useDeviceOrientation();
  // Information about dimenstions of screen
  // console.log(Dimensions.get("screen"));

  const image = { uri: "../assets/background.jpg" };

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    !granted &&
      alert("You Need to get permession to access the library of photos");
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      !result.cancelled && setImageUri(result.uri);
      !result.cancelled && setImageSet(true);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <>
      <Screen>
        {/* <Card
          title='Red jacket for sale'
          subTitle='100$'
          image={require("./app/assets/card_photos/jacket.jpg")}
        /> */}
        {/* <AppTextInput placeholder='UserName' icon='email' /> */}
        {/* <Picker
          selectedItem={category}
          onSelectItem={(
            item: SetStateAction<{ label: string; value: number }>
          ) => setCategory(item)}
          items={categories}
          placeholder='Category'
          icon='apps'
        />  */}
        {/* <WelcomeScreen orintation={landscape} /> */}
        {/* <ViewImageScreen /> */}
        {/* <MessagesScreen /> */}
        {/* <DetailsScreen /> */}
        {/* <LoginScreen /> */}
        {/* <ListingEditScreen /> */}

        <Button onPress={selectImage} title='Select Image' />
        {imagSet && <Image source={{ uri: imageUri }} style={styles.image} />}
        <ImageInput imagSet={imagSet} imageUri={imageUri} />
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({ image: { height: 200, width: 200 } });

export default DoneWithIt;
