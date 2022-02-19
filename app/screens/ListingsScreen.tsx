import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { FlatList, StyleSheet } from "react-native";

import useApi from "../hooks/useApi";

import Screen from "../components/Screen";
import ActivityIndicator from "../components/ActivityIndicator";
import Card from "../components/Card";

import rouets from "../config/rouets";
import colors from "../config/colors";

import ErrorMessage from "../components/ErrorMessage";

interface IListingScreenProps {}

const ListingsScreen: React.FunctionComponent<IListingScreenProps> = () => {
  const { getListsData } = useApi();
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const listings = useSelector((state: any) => state.userState.appData.lists);
  const errors = useSelector((state: any) => state.userState.errors);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getListsData();
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <Screen style={styles.screen}>
      <ActivityIndicator visible={loading} />
      {errors.error ? (
        <ErrorMessage error={errors.error} />
      ) : (
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
      )}
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
