import { Image, View, StyleSheet } from "react-native";

import AppText from "../components/Text";
import { ListItem } from "../components/lists";

import colors from "../config/colors";

interface IDetailsScreenProps {}

const ListingDetailsScreen: React.FunctionComponent<IDetailsScreenProps> = (props) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/card_photos/jacket.jpg")}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for sale</AppText>
        <AppText style={styles.price}>100$</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title='Mosh Hamedani'
            subTitle='5 Listing'
            image={require("../assets/mosh.jpg")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  userContainer: { marginVertical: 50 },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
});

export default ListingDetailsScreen;
