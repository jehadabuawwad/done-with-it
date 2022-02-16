import {
  Button,
  FlatList,
  Modal,
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./Screen";
import AppText from "./Text";
import PickerItem from "./PickerItem";

import colors from "../config/colors";

interface IAppPickerProps {
  icon?: any;
  placeholder?: string;
  items?: Array<any>;
  selectedItem?: any;
  onSelectItem?: any;
  numberOfColumns?: number;
  PickerItemComponent?: React.FunctionComponent;
  width?: string;
}

const Picker: React.FunctionComponent<IAppPickerProps> = ({
  icon,
  items,
  placeholder,
  selectedItem,
  onSelectItem,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableNativeFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}

          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          {icon && (
            <MaterialCommunityIcons
              name='chevron-down'
              size={20}
              color={colors.medium}
            />
          )}
        </View>
      </TouchableNativeFeedback>
      <Modal visible={modalVisible} animationType='slide'>
        <Screen>
          <Button title='Close' onPress={() => setModalVisible(false)}></Button>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          ></FlatList>
        </Screen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.light,
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
    width: "100%",
  },
  icon: {
    marginRight: 10,
    paddingTop: Platform.OS === "android" ? 5 : 0,
  },
  placeholder: { color: colors.medium, flex: 1 },
  text: { flex: 1 },
});

export default Picker;
