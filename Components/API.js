import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

import axios from "axios";

export default function APIs() {
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
    <View>
      <View style={styles.container}>
        <Text style={styles.advice}>{advice}</Text>
        <Button title="Get Advice" onPress={getAdvice} color="green" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  advice: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
});
