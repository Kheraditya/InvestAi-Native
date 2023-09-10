import React from "react";
import { TouchableOpacity } from "react-native";
import menu from "../assets/menu.png";
import ScreenHeader from "../Components/common/header/ScreenHeader";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Guide, Support, Insights, Courses } from "../Screens";
import Drawermenu from "./HomeDrawerNavigation";

const Stack = createStackNavigator();

function InvestNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerLeft: () => (
          <TouchableOpacity>
            <Ionicons name="" size={27} />
          </TouchableOpacity>
        ),
        headerStyle: { height: 0 },
        headerRightContainerStyle: { paddingRight: 20 },
        headerTitle: "",
      }}
    >
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="Guide" component={Guide} />
      <Stack.Screen name="Insights" component={Insights} />
      <Stack.Screen name="Support" component={Support} />
      <Stack.Screen name="Courses" component={Courses} />
    </Stack.Navigator>
  );
}

export default InvestNavigator;
