import { useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from './app/screens/WelcomeScreen';
export default function App() {
  const { landscape } = useDeviceOrientation();
  // Information about dimenstions of screen
  // console.log(Dimensions.get("screen"));

  const image = { uri: "../assets/background.jpg" };
  return (
    <>
      <WelcomeScreen title='Welcome Screen' orintation={landscape} />
    </>
  );
}
