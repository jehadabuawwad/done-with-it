import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  ImageSourcePropType,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";

import AppText from "./AppText";

import colors from "../config/colors";

interface IListItemProps {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
  onPress?: any;
}

export const ListItem: React.FunctionComponent<IListItemProps> = ({
  image,
  title,
  subTitle,
  onPress,
}) => {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
        <MaterialCommunityIcons
          name='chevron-right'
          size={25}
          color={colors.medium}
        />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", padding: 15, alignItems: "center" },
  detailsContainer: { marginLeft: 10, justifyContent: "center", flex: 1 },
  image: { width: 70, height: 70, borderRadius: 35, marginRight: 10 },
  subTitle: { color: colors.gray, fontWeight: "500" },
  title: {},
});
