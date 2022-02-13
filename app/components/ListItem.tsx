import {
  ImageSourcePropType,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

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
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", padding: 15 },
  image: { width: 70, height: 70, borderRadius: 35, marginRight: 10 },
  subTitle: { color: colors.gray, fontWeight: "500" },
  title: {},
});
