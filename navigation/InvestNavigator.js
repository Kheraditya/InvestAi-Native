import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Invest, Stock } from "../Screens";

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

        headerTitle: "",
      }}
      initialRouteName={"Invest"}
    >
      <Stack.Screen name={"Invest"} component={Invest} />
    </Stack.Navigator>
  );
}

export default InvestNavigator;
