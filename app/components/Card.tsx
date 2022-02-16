import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ImageSourcePropType,
} from "react-native";

import AppText from "./Text";

import colors from "../config/colors";

interface ICardProps {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
}

const Card: React.FunctionComponent<ICardProps> = ({
  title,
  subTitle,
  image,
}) => {
  return (
    <>
      <View style={styles.card}>
        <Image style={styles.image} source={image}></Image>

        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: { marginTop: 7 },
});
export default Card;
