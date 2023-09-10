import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Home, Guide, Support, Insights, Courses } from "../Screens";
import BottomTabNavigator from "./BottomTabNavigator";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomDrawer from "../Components/CustomDrawer";

const Drawermenu = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        headerTitle: "",

        headerRight: () => (
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={27} />
          </TouchableOpacity>
        ),
        headerRightContainerStyle: { paddingRight: 20 },
      }}
    >
      <Drawer.Screen
        name="BottomNavigator"
        component={BottomTabNavigator}
        options={{
          title: "Home",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons name="home-sharp" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Activities"
        component={Guide}
        options={{
          title: "Account",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons name="people" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Privacy"
        component={Courses}
        options={{
          title: "Privacy",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons name="shield-checkmark-outline" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Help"
        component={Support}
        options={{
          title: "Help",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons name="chatbubbles" size={18} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default Drawermenu;
