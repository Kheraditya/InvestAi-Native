import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
  ImageBackground,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

import { LinearGradient } from "expo-linear-gradient";

const white = "#ffffff";

const Invest = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.heading}>Guides</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 15,
          }}
        >
          <TouchableOpacity
            style={styles.container1}
            onPress={
              () => navigation.navigate("Plan")

              //   Linking.openURL("https://www.youtube.com/watch?v=KAh2TOrtTq4")
              //
            }
          >
            <ImageBackground
              source={require("../../assets/cloud.png")}
              style={{ marginTop: 30, height: 150 }}
            >
              <View style={styles.containerMain}>
                <Ionicons name="reader" size={30} color={white} />
                <Text style={styles.text}>Financial Plan</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.container2}
            onPress={
              () => navigation.navigate("Compounding")

              //   Linking.openURL("https://www.youtube.com/watch?v=KAh2TOrtTq4")
              //
            }
          >
            <ImageBackground
              source={require("../../assets/cloud.png")}
              style={{ marginTop: 30, height: 150 }}
            >
              <View style={styles.containerMain}>
                <Ionicons name="git-compare" size={30} color={white} />
                <Text style={styles.text}>Compounding Power</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.container3}
            onPress={
              () => navigation.navigate("Risk")

              //   Linking.openURL("https://www.youtube.com/watch?v=KAh2TOrtTq4")
              //
            }
          >
            <ImageBackground
              source={require("../../assets/cloud.png")}
              style={{ marginTop: 30, height: 150 }}
            >
              <View style={styles.containerMain}>
                <Ionicons name="shield" size={30} color={white} />
                <Text style={styles.text}>Understanding Risk</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.container4}
            onPress={
              () => navigation.navigate("Management")

              //   Linking.openURL("https://www.youtube.com/watch?v=KAh2TOrtTq4")
              //
            }
          >
            <ImageBackground
              source={require("../../assets/cloud.png")}
              style={{ marginTop: 30, height: 150 }}
            >
              <View style={styles.containerMain}>
                <Ionicons name="file-tray-full" size={30} color={white} />
                <Text style={styles.text}>Cost Management</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.container5}
            onPress={
              () => navigation.navigate("Strategies")

              //   Linking.openURL("https://www.youtube.com/watch?v=KAh2TOrtTq4")
              //
            }
          >
            <ImageBackground
              source={require("../../assets/cloud.png")}
              style={{ marginTop: 30, height: 150 }}
            >
              <View style={styles.containerMain}>
                <Ionicons name="wallet" size={30} color={white} />
                <Text style={styles.text}>Investment Strategies</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.container6}
            onPress={
              () => navigation.navigate("Asset")

              //   Linking.openURL("https://www.youtube.com/watch?v=KAh2TOrtTq4")
              //
            }
          >
            <ImageBackground
              source={require("../../assets/cloud.png")}
              style={{ marginTop: 30, height: 150 }}
            >
              <View style={styles.containerMain}>
                <Ionicons name="card" size={30} color={white} />
                <Text style={styles.text}>Asset Allocation</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        {/* <TouchableOpacity
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
       */}

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

export default Invest;

const styles = StyleSheet.create({
  container1: {
    borderRadius: 30,
    width: "45%",
    height: 150,
    marginBottom: 5,
    marginLeft: 12,
    marginTop: 15,
    backgroundColor: "#8f98ff",
    overflow: "hidden",
  },
  container2: {
    borderRadius: 30,
    width: "45%",
    height: 150,
    marginBottom: 5,
    marginLeft: 12,
    marginTop: 15,
    backgroundColor: "#ff7648",
    overflow: "hidden",
  },
  container3: {
    borderRadius: 30,
    width: "45%",
    height: 150,
    marginBottom: 5,
    marginLeft: 12,
    marginTop: 15,
    backgroundColor: "#4dc591",
    overflow: "hidden",
  },
  container4: {
    borderRadius: 30,
    width: "45%",
    height: 150,
    marginBottom: 5,
    marginLeft: 12,
    marginTop: 15,
    backgroundColor: "#65a4da",
    overflow: "hidden",
  },
  container5: {
    borderRadius: 30,
    width: "45%",
    height: 150,
    marginBottom: 5,
    marginLeft: 12,
    marginTop: 15,
    backgroundColor: "#ff8f8f",
    overflow: "hidden",
  },
  container6: {
    borderRadius: 30,
    width: "45%",
    height: 150,
    marginBottom: 5,
    marginLeft: 12,
    marginTop: 15,
    backgroundColor: "#dbdbdb",
    overflow: "hidden",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    paddingTop: 5,
    color: "#fff",
  },

  containerMain: {
    paddingTop: 40,
    paddingLeft: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
  },

  // container1: {
  //   height: 150,
  //   width: 340,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundColor: "#FFFFFF",

  //   borderTopRightRadius: 16,
  //   borderBottomRightRadius: 16,
  //   backgroundColor: "#495ECA",
  // },
  // container2: {
  //   height: 150,
  //   width: 310,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundColor: "#FFFFFF",
  //   borderTopRightRadius: 16,
  //   borderBottomRightRadius: 16,
  //   marginTop: -15,
  //   backgroundColor: "#ED33B9",
  // },
  // container3: {
  //   height: 150,
  //   width: 280,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundColor: "#FFFFFF",
  //   borderTopRightRadius: 16,
  //   borderBottomRightRadius: 16,
  //   marginTop: -15,
  //   backgroundColor: "#F33E62",
  // },
  // container4: {
  //   height: 150,
  //   width: 250,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundColor: "#FFFFFF",
  //   borderTopRightRadius: 16,
  //   borderBottomRightRadius: 16,
  //   marginBottom: 10,
  //   marginTop: -15,
  // },
  // textStyle: {
  //   fontSize: 25,
  // },
});
