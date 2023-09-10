import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Bot, ChatBot } from "../Screens";

const Stack = createStackNavigator();

function InvestNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { height: 5 },
        headerTitle: "",
      }}
      initialRouteName="Bot"
    >
      <Stack.Screen name="Bot" component={Bot} />
      <Stack.Screen name="ChatBot" component={ChatBot} />
    </Stack.Navigator>
  );
}

export default InvestNavigator;

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
  },
});
