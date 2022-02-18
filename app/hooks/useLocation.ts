import * as Location from "expo-location";
import { useEffect, useState } from "react";

const useLocation = () => {
  const [location, setLocation] = useState<any>();

  const getLocation: any = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      return null;
    }
    const { coords } = await Location.getCurrentPositionAsync({});
    const { longitude, latitude } = coords;
    const data = { longitude, latitude };
    setLocation(data);
  };

  useEffect(() => getLocation(), []);
  return location;
};

export default useLocation;
