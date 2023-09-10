import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

//Screens
import InvestNavigator from "./InvestNavigator";
import ChatNavigator from "./chatNavigation";
import HomeNavigation from "./HomeNavigation";

//Screen Names
const homeName = "Alerts";
const BotName = "Chat";
const InvestName = "Learn";

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      // initialRouteName=""

      screenOptions={({ route }) => ({
        tabBarActiveBackgroundColor: "#FFFF",
        tabBarInactiveBackgroundColor: "#FFFF",
        tabBarActiveTintColor: "#495ECA",
        tabBarHideOnKeyboard: true,

        tabBarStyle: {
          width: 340,
          height: 80,
          paddingBottom: 15,
          paddingTop: 15,
          marginLeft: 20,
          marginRight: 10,
          marginBottom: 10,
          marginTop: 15,
          borderRadius: 50,
        },
        tabBarItemStyle: {
          margin: 5,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "alert-circle" : "alert-circle-outline";
          } else if (rn === BotName) {
            iconName = focused ? "chatbubbles" : "chatbubbles-outline";
          } else if (rn === InvestName) {
            iconName = focused ? "card" : "card-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={homeName}
        component={HomeNavigation}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={InvestName}
        component={InvestNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={BotName}
        component={ChatNavigator}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
