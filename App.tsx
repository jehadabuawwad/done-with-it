
import { StyleSheet, View } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
        
import Card from "./app/components/Card";

import DetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MessagesScreen from "./app/screens/MessageScreen";
        
import colors from "./app/config/colors";

const DoneWithIt = () => {
  const { landscape } = useDeviceOrientation();
  // Information about dimenstions of screen
  // console.log(Dimensions.get("screen"));
  
  const image = { uri: "../assets/background.jpg" };  
    return (
    {/*
    <View style={styles.container}>
      <Card
        title='Red jacket for sale'
        subTitle='100$'
        image={require("./app/assets/card_photos/jacket.jpg")}
      />
      <DetailsScreen />
      <WelcomeScreen title='Welcome Screen' orintation={landscape} /> 
      <ViewImageScreen title='View Image Screen' />
      <MessagesScreen />
    </View>
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

