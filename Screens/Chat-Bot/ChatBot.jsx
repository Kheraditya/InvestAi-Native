import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const ChatBot = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.container1}>
          <View style={styles.botLayout}>
            <Text style={styles.text}>How can we help you.</Text>
          </View>
          <View style={styles.botLayout}>
            <Text style={styles.text}>How can we help you.</Text>
          </View>
        </View>
        <View style={styles.container1}>
          <View style={styles.userLayout}>
            <Text style={styles.text}>User Text is shown here.</Text>
          </View>
          <View style={styles.userLayout}>
            <Text style={styles.text}>User Text is shown here.</Text>
          </View>
        </View>
        <View style={styles.input}>
          <TextInput style={styles.loginBtn} placeholder="Type Your Querry" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatBot;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  container1: {
    marginTop: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: "400",
  },
  input: {
    marginTop: 60,
  },
  loginBtn: {
    textAlign: "center",
    marginTop: 80,
    marginLeft: 40,
    marginRight: 40,
    height: 55,
    borderWidth: 0.8,
    padding: 8,
    borderColor: "#ccd",
  },
  botLayout: {
    borderWidth: 0.8,
    padding: 10,
    borderColor: "#ccd",
    backgroundColor: "#ccd",
    marginLeft: 6,
    maxWidth: "50%",
    marginTop: 3,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  userLayout: {
    borderWidth: 0.8,
    padding: 10,
    borderColor: "#ccd",
    backgroundColor: "#ccd",
    marginLeft: 3,
    maxWidth: "50%",
    flexDirection: "row-reverse",
    alignContent: "flex-end",
    position: "relative",
    left: 185,
    marginTop: 3,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
});
