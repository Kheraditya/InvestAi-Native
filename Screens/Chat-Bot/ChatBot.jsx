import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import APIs from "../../Components/API";
import axios from "axios";

const ChatBot = () => {
  const [data, setData] = useState([]);
  const baseURL = "https://jsonplaceholder.typicode.com";

  const [advice, setAdvice] = useState("");

  const getRandomId = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
  };

  const getAdvice = () => {
    axios
      .get("http://api.adviceslip.com/advice/" + getRandomId(1, 200))
      .then((response) => {
        setAdvice(response.data.slip.advice);
      });
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.container1}>
          <View style={styles.botLayout}>
            <Text style={styles.text}>How can we help you.</Text>
          </View>
        </View>
        <View style={styles.container1}>
          <View style={styles.userLayout}>
            <Text style={styles.text}>User Text is shown here.</Text>
          </View>
          {/* <View style={styles.userLayout}>
            <Text style={styles.text}>User Text is shown here.</Text>
          </View> */}
        </View>
        <View style={styles.container1}>
          <View style={styles.botLayout}>
            <Text style={styles.text}>{advice}</Text>
          </View>
        </View>
        <View style={styles.input}>
          <TextInput style={styles.loginBtn} placeholder="Type Your Querry" />
          <TouchableOpacity onPress={getAdvice}>
            <Ionicons
              name="send-outline"
              size={30}
              style={{ alignItems: "flex-end" }}
            />
          </TouchableOpacity>
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
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  loginBtn: {
    textAlign: "center",
    width: "70%",
    marginLeft: 40,
    marginRight: 10,
    height: 55,
    borderWidth: 0.5,
    borderRadius: 10,
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
