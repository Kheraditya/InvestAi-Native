import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Invest,
  Stock,
  Plan,
  Asset,
  Strategies,
  Management,
  Risk,
  Compounding,
} from "../Screens";

import ScreenHeader from "../Components/common/header/ScreenHeader";
import menu from "../assets/menu.png";
import Ionicons from "react-native-vector-icons/Ionicons";

import { TouchableOpacity } from "react-native";
const Stack = createStackNavigator();

function InvestNavigator() {
  //console.log(Stack);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { height: 5 },
        headerLeft: () => (
          <TouchableOpacity>
            <Ionicons name="" size={27} />
          </TouchableOpacity>
        ),
        headerTitle: "",
      }}
      initialRouteName={"Invest"}
    >
      <Stack.Screen name={"Invest"} component={Invest} />
      <Stack.Screen name={"Plan"} component={Plan} />
      <Stack.Screen name={"Asset"} component={Asset} />
      <Stack.Screen name={"Strategies"} component={Strategies} />
      <Stack.Screen name={"Management"} component={Management} />
      <Stack.Screen name={"Risk"} component={Risk} />
      <Stack.Screen name={"Compounding"} component={Compounding} />
    </Stack.Navigator>
  );
}

export default InvestNavigator;
