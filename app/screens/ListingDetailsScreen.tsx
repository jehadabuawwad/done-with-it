import { Image, View, StyleSheet } from "react-native";

import AppText from "../components/Text";
import { ListItem } from "../components/lists";

import colors from "../config/colors";

interface IDetailsScreenProps {
  route: any;
}

const ListingDetailsScreen: React.FunctionComponent<IDetailsScreenProps> = ({
  route,
}) => {
  const listing = route.params;

  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
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
