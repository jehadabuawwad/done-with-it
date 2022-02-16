import { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

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
import ImageInputList from "./app/components/ImageInputList";

interface IDoneWithItProps {}

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

const image = { uri: "../assets/background.jpg" };

const DoneWithIt: React.FunctionComponent<IDoneWithItProps> = (props) => {
  const [imageUris, setImageUris] = useState<Array<string>>([]);
  const [category, setCategory] = useState(categories[0]);
  const { landscape } = useDeviceOrientation();

  // Information about dimenstions of screen
  // console.log(Dimensions.get("screen"));

  const handleAdd = (uri: string) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri: string) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

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
        {/* <ImageInput
          imagSet={imagSet}
          imageUri={imageUri}
          onChangeImage={(uri: string) => {
            setImageUri(uri);
            setImageSet(!imagSet);
          }}
        /> */}
        {/* <WelcomeScreen orintation={landscape} /> */}
        {/* <ViewImageScreen /> */}
        {/* <MessagesScreen /> */}
        {/* <DetailsScreen /> */}
        {/* <LoginScreen /> */}
        {/* <ListingEditScreen /> */}

        <ImageInputList
          imageUris={imageUris}
          onAddImage={handleAdd}
          onRemoveImage={handleRemove}
        />
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({});

export default DoneWithIt;
