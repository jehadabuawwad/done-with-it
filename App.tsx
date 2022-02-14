import { StyleSheet } from "react-native";

import Card from "./app/components/Card";
import { AppTextInput } from "./app/components/AppTextInput";
import { AppPicker } from "./app/components/AppPicker";

import Screen from "./app/components/Screen";
import DetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessageScreen";

import colors from "./app/config/colors";
import { useState } from "react";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

const DoneWithIt = () => {
  const [category, setCategory] = useState(categories[0]);
  return (
    // <View style={styles.container}>
    //   <Card
    //     title='Red jacket for sale'
    //     subTitle='100$'
    //     image={require("./app/assets/card_photos/jacket.jpg")}
    //   />
    //   <DetailsScreen />
    //   <MessagesScreen />
    // </View>

    <Screen>
      {/* <AppTextInput placeholder="UserName" icon='email' /> */}
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        placeholder='Category'
        icon='apps'
      />
      <AppTextInput placeholder='Email' icon='email' />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardBackground,
    padding: 20,
  },
});

export default DoneWithIt;
