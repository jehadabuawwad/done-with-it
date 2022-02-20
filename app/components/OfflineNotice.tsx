import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

import colors from "../config/colors";
import AppText from "./Text";

interface IOfflineNoticeProps {}

const OfflineNotice: React.FunctionComponent<IOfflineNoticeProps> = () => {
  const netInfo = useNetInfo();
  if (netInfo.isInternetReachable !== true) {
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Interntet Connection</AppText>
      </View>
    );
  } else {
    return <View></View>;
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: "center",
    position: "absolute",
    top: Constants.statusBarHeight,
    width: "100%",
    zIndex: 1,
  },
  text: { color: colors.white },
});

export default OfflineNotice;
