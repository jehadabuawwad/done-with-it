import { StatusBar, Platform, StyleSheet } from "react-native";

import Card from "./app/components/Card";

import colors from "./app/config/colors";
import DetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessageScreen";
import { AppTextInput } from "./app/components/AppTextInput";
import Constants from "expo-constants";

import Screen from "./app/components/Screen";
const DoneWithIt = () => {
  console.log();

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
      <AppTextInput placeholder="UserName" icon='email' />
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
