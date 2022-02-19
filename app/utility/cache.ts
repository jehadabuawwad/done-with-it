import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "momnet";

const prefix = "cache";
const expiredInMinutes = 5;

const store = async (key: any, value: any) => {
  const item = { value, timestamp: Date.now() };
  try {
    await AsyncStorage.setItem(prefix + KeyboardEvent, JSON.stringify(item));
  } catch (error: any) {
    console.log(error);
  }
};

const isExpired = (item: any) => {
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);
  return now.diff(storedTime, "minutes") > expiredInMinutes;
};

const get = async (key: any) => {
  try {
    const value: any = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (error) {}
};

export default { store, get, isExpired };
