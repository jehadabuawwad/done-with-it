import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import useApi from "../hooks/useApi";

import Screen from "../components/Screen";
import Card from "../components/Card";

import rouets from "../config/rouets";
import colors from "../config/colors";

interface IListingScreenProps {}

const ListingsScreen: React.FunctionComponent<IListingScreenProps> = () => {
  const { getListsData } = useApi();
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const listings = useSelector((state: any) => state.userState.appData.lists);

  useEffect(() => {
    getListsData();
  }, []);

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.images[0].url}
            onPress={() => navigation.navigate(rouets.ListingsDetails, item)}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
