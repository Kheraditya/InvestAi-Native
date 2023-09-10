import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import Drawermenu from "./navigation/HomeDrawerNavigation";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./navigation/BottomTabNavigator";

export default function App() {
  // const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        {/* <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Subjects" component={Subjects} />
        </Stack.Navigator> */}
        <Drawermenu />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
