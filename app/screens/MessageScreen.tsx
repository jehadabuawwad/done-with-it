import {
  StyleSheet,
  FlatList,
  StatusBar,
  Platform,
  SafeAreaView,
} from "react-native";
import { ListItem } from "../components/ListItem";
import ItemSeperator from "../components/ListItemSeperator";

interface IMessagesScreenProps {}

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];
const MessagesScreen: React.FunctionComponent<IMessagesScreenProps> = (
  props
) => {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(MessagesScreen) => MessagesScreen.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("message", item)}
          />
        )}
        ItemSeparatorComponent={ItemSeperator}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
});
export default MessagesScreen;
