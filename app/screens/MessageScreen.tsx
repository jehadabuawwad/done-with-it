import { StyleSheet, FlatList } from "react-native";
import { ListItem } from "../components/ListItem";

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
    <FlatList
      data={messages}
      keyExtractor={(MessagesScreen) => MessagesScreen.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image}
        />
      )}
    ></FlatList>
  );
};

const styles = StyleSheet.create({});
export default MessagesScreen;
