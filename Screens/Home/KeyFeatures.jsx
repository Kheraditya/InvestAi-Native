import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Card } from "react-native-paper";

const Activities = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.containerMain}>
        <View>
          <Text style={styles.text}>Features</Text>
        </View>
        <View style={styles.containerSub}>
          <View>
            <View style={styles.containerCommon}>
              <TouchableOpacity onPress={() => navigation.navigate("Guide")}>
                <Text>Investment Guide</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerCommon}>
              <TouchableOpacity onPress={() => navigation.navigate("Insights")}>
                <Text>Market Insights</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={styles.containerCommon}>
              <TouchableOpacity onPress={() => navigation.navigate("Support")}>
                <Text>Trading Support</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerCommon}>
              <TouchableOpacity onPress={() => navigation.navigate("Courses")}>
                <Text>Courses</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Activities;

const styles = StyleSheet.create({
  containerMain: {
    marginTop: 25,
    marginLeft: 13,
    marginRight: 10,
    marginBottom: 10,
  },
  containerSub: {
    height: 160,
    marginTop: 5,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    paddingTop: 15,
    paddingBottom: 15,
  },
  containerCommon: {
    height: 60,
    width: 170,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "400",
    paddingLeft: 10,
  },
});
