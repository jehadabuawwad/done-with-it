declare global {
  type RootStackParamList = {
    Home: undefined;
    Profile: {};
    Feed: {};
  };
  type Props = StackScreenProps<RootStackParamList, "Profile">;
  type ProfileScreenNavigationProp = Props["navigation"];
}

export {};
