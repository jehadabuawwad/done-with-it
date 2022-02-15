import { SetStateAction, useState } from "react";
import { StyleSheet } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

import Card from "./app/components/Card";

import { AppTextInput } from "./app/components/AppTextInput";
import { AppPicker } from "./app/components/AppPicker";

import Screen from "./app/components/Screen";
import DetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MessagesScreen from "./app/screens/MessageScreen";
import LoginScreen from "./app/screens/LoginScreen";

interface IDoneWithItProps {}

const DoneWithIt: React.FunctionComponent<IDoneWithItProps> = (props) => {
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
  return (
    <>
      {/* <WelcomeScreen title='Welcome Screen' orintation={landscape} /> */}
      {/* <ViewImageScreen title='View Image Screen' /> */}
      <Screen>
        {/* <Card
          title='Red jacket for sale'
          subTitle='100$'
          image={require("./app/assets/card_photos/jacket.jpg")}
        /> */}
        {/* <DetailsScreen /> */}
        {/* <MessagesScreen /> */}

        {/* <AppTextInput placeholder='UserName' icon='email' /> */}
        {/* <AppPicker
          selectedItem={category}
          onSelectItem={(item: SetStateAction<{ label: string; value: number; }>) => setCategory(item)}
          items={categories}
          placeholder='Category'
          icon='apps'
        />  */}
        <LoginScreen />
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({});

export default DoneWithIt;
