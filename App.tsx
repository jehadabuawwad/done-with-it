import { useDeviceOrientation } from "@react-native-community/hooks";
import Welcome from "./screens/Welcome";
export default function App() {
  const { landscape } = useDeviceOrientation();
  // Information about dimenstions of screen
  // console.log(Dimensions.get("screen"));

  const image = { uri: "../assets/background.jpg" };
  return (
    <>
      <Welcome title='Welcome Screen' orintation={landscape} />
    </>
  );
}
