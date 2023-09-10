//import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
//import { useRouter } from "expo-router";
import { SIZES } from "../../constants/theme.js";
import Progress from "./Progress.jsx";

const Welcome = () => {
  //const router = useRouter();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.userName}>Hi, Adrian</Text>
        <Text style={styles.welcomeMessage}>Here's Your Balance.</Text>
        <View style={styles.progress}>
          <Progress />
          <Progress />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  userName: {
    // fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: "#FFFF",
    marginLeft: 10,
  },
  welcomeMessage: {
    // fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: "#FFFF",
    marginTop: 2,
    marginLeft: 10,
  },
  progress: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
