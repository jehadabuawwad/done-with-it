import { StyleSheet, View } from "react-native";

import Card from "./app/components/Card";

import colors from "./app/config/colors";

const DoneWithIt = () => {
  return (
    <View style={styles.container}>
      <Card
        title='Red jacket for sale'
        subTitle='100$'
        image={require('./app/assets/card_photos/jacket.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardBackground,
    padding: 20,
    paddingTop: 100,
  },
});

export default DoneWithIt;
