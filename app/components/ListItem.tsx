import { ImageSourcePropType, View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

interface IListItemProps {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
}

export const ListItem: React.FunctionComponent<IListItemProps> = ({
  image,
  title,
  subTitle,
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  image: { width: 70, height: 70, borderRadius: 35, marginRight: 10 },
  subTitle: { color: colors.gray, fontWeight: "500" },
  title: {},
});
