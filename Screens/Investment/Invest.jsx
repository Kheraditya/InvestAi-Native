import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import React from "react";
import { ProgressBar } from "react-native-paper";

import { LinearGradient } from "expo-linear-gradient";

const Activities = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableOpacity
          style={styles.container}
          onPress={() =>
            Linking.openURL("https://www.youtube.com/watch?v=KAh2TOrtTq4")
          }
        >
          <View>
            <Text style={styles.text}>
              Data is being fetched from the backend side and being displayed
              here
            </Text>
            <ProgressBar progress={0.8} color="blue" style={styles.bar} />
          </View>
          <Image
            source={require("../../assets/drawer-cover.jpeg")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}
          onPress={() =>
            Linking.openURL("https://www.youtube.com/watch?v=KAh2TOrtTq4")
          }
        >
          <View>
            <Text style={styles.text}>
              Data is being fetched from the backend side and being displayed
              here
            </Text>
            <ProgressBar progress={0.8} color="blue" style={styles.bar} />
          </View>
          <Image
            source={require("../../assets/drawer-cover.jpeg")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}
          onPress={() =>
            Linking.openURL("https://www.youtube.com/watch?v=KAh2TOrtTq4")
          }
        >
          <View>
            <Text style={styles.text}>
              Data is being fetched from the backend side and being displayed
              here
            </Text>
            <ProgressBar progress={0.8} color="blue" style={styles.bar} />
          </View>
          <Image
            source={require("../../assets/drawer-cover.jpeg")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}
          onPress={() =>
            Linking.openURL("https://www.youtube.com/watch?v=KAh2TOrtTq4")
          }
        >
          <View>
            <Text style={styles.text}>
              Data is being fetched from the backend side and being displayed
              here
            </Text>
            <ProgressBar progress={0.8} color="blue" style={styles.bar} />
          </View>
          <Image
            source={require("../../assets/drawer-cover.jpeg")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.container}
          onPress={() =>
            Linking.openURL("https://www.youtube.com/watch?v=KAh2TOrtTq4")
          }
        >
          <View>
            <Text style={styles.text}>
              Data is being fetched from the backend side and being displayed
              here
            </Text>
            <ProgressBar progress={0.8} color="blue" style={styles.bar} />
          </View>
          <Image
            source={require("../../assets/drawer-cover.jpeg")}
            style={styles.image}
          />
        </TouchableOpacity>

        {/* <View style={styles.containerMain}>
          <LinearGradient
            colors={["#548AD8", "#8A4BD3"]}
            style={styles.container1}
          >
            <TouchableOpacity>
              <View>
                <Text style={styles.textStyle}>Investment Guide</Text>
              </View>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={["#893E9C", "#F82B73"]}
            style={styles.container2}
          >
            <TouchableOpacity>
              <View>
                <Text style={styles.textStyle}>Trading Support</Text>
              </View>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={["#F33E62", "#F79334"]}
            style={styles.container3}
          >
            <TouchableOpacity>
              <View>
                <Text style={styles.textStyle}>Market Insights</Text>
              </View>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={["#D39646", "#CCC8C4"]}
            style={styles.container4}
          >
            <TouchableOpacity>
              <View>
                <Text style={styles.textStyle}> Investment Courses</Text>
              </View>
            </TouchableOpacity>
          </LinearGradient>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Activities;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: "auto",
    display: "flex",
    flexDirection: "row",
    marginBottom: 5,
    marginLeft: 3,
    marginRight: 3,

    justifyContent: "space-between",
    backgroundColor: "#F6F6DB",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: "300",
    paddingRight: 10,
    paddingLeft: 15,
    width: 300,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  bar: {
    width: 200,
    marginTop: 15,
    marginLeft: 20,
    backgroundColor: "#000",
  },
  containerMain: {
    marginLeft: -5,

    height: 650,
    paddingTop: 30,
    position: "relative",
    //backgroundColor: "#513174",
  },

  container1: {
    height: 150,
    width: 340,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",

    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: "#495ECA",
  },
  container2: {
    height: 150,
    width: 310,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    marginTop: -15,
    backgroundColor: "#ED33B9",
  },
  container3: {
    height: 150,
    width: 280,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    marginTop: -15,
    backgroundColor: "#F33E62",
  },
  container4: {
    height: 150,
    width: 250,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    marginBottom: 10,
    marginTop: -15,
  },
  textStyle: {
    fontSize: 25,
  },
});
