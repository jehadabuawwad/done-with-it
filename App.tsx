import { StyleSheet, View } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
        
import Card from "./app/components/Card";
import { AppTextInput } from "./app/components/AppTextInput";
import { AppPicker } from "./app/components/AppPicker";

import Screen from "./app/components/Screen";
import DetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MessagesScreen from "./app/screens/MessageScreen";
        
import colors from "./app/config/colors";

import colors from "./app/config/colors";
import { useState } from "react";

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
    {/*
    <Screen style={styles.container}>
      <Card
        title='Red jacket for sale'
        subTitle='100$'
        image={require("./app/assets/card_photos/jacket.jpg")}
      />
      <DetailsScreen />
      <WelcomeScreen title='Welcome Screen' orintation={landscape} /> 
      <ViewImageScreen title='View Image Screen' />
      <MessagesScreen />
          
      <AppTextInput placeholder="UserName" icon='email' />
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        placeholder='Category'
        icon='apps'
      />
    </Screen>
    */}
   
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardBackground,
    padding: 20,
  },
});

export default DoneWithIt;

