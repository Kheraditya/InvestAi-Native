import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { ProgressBar, MD3Colors } from "react-native-paper";

const Progress = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>SAVINGS</Text>
      <Text style={styles.textStyle}>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/currency_rupee.png")}
        />
        15,450
      </Text>

      <ProgressBar progress={0.8} color="#00DDA3" style={styles.bar} />
    </View>
  );
};

export default Progress;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    paddingBottom: 50,
  },
  tinyLogo: {
    width: 12,
    height: 12,
  },
  bar: {
    width: 140,
    marginTop: 5,
  },
  textStyle: {
    paddingTop: 5,
    fontSize: 20,
    color: "#FFFF",
  },
});
