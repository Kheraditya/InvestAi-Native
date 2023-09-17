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

const Compounding = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={styles.heading}>Compounding Power :</Text>
          <Text style={styles.description}>
            Compound, to savers and investors, means the ability of a sum of
            money to grow exponentially over time by the repeated addition of
            earnings to the principal invested. Each round of earnings adds to
            the principal that yields the next round of earnings. In savings
            accounts, this is called compound interest.
          </Text>
        </View>
        <View style={styles.pointContainer}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://youtube.com/shorts/sU9SFT1nAOw?si=iJotSDnX6_LStSc6"
              );
            }}
          >
            <View style={styles.bulletpoint}>
              <View style={styles.pointer}>
                <Text>01</Text>
              </View>
              <View style={styles.pointerLine}></View>
              <View style={styles.pointerSmall}>
                <Text></Text>
              </View>
              <View style={styles.pointerDetail}>
                <Text>Calculate Compound Interest</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://youtube.com/shorts/sU9SFT1nAOw?si=iJotSDnX6_LStSc6"
              );
            }}
          >
            <View style={styles.bulletpoint2}>
              <View style={styles.pointerDetail2}>
                <Text>Compound vs. Simple</Text>
              </View>
              <View style={styles.pointerSmall2}>
                <Text></Text>
              </View>
              <View style={styles.pointerLine2}></View>
              <View style={styles.pointer2}>
                <Text>02</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://youtube.com/shorts/jXoVu8DN0O8?si=RKi0THbjhJUnSUsh"
              );
            }}
          >
            <View style={styles.bulletpoint}>
              <View style={styles.pointer}>
                <Text>03</Text>
              </View>
              <View style={styles.pointerLine}></View>
              <View style={styles.pointerSmall}>
                <Text></Text>
              </View>
              <View style={styles.pointerDetail}>
                <Text>Compound Annual Growth Rate</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://youtube.com/shorts/Z2nT-XBVdp4?si=cAgcROLuKkyPva2m"
              );
            }}
          >
            <View style={styles.bulletpoint2}>
              <View style={styles.pointerDetail2}>
                <Text>Discrete Compounding</Text>
              </View>
              <View style={styles.pointerSmall2}>
                <Text></Text>
              </View>
              <View style={styles.pointerLine2}></View>
              <View style={styles.pointer2}>
                <Text>04</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://youtube.com/shorts/Z2nT-XBVdp4?si=cAgcROLuKkyPva2m"
              );
            }}
          >
            <View style={styles.bulletpoint}>
              <View style={styles.pointer}>
                <Text>05</Text>
              </View>
              <View style={styles.pointerLine}></View>
              <View style={styles.pointerSmall}>
                <Text></Text>
              </View>
              <View style={styles.pointerDetail}>
                <Text>Continuous Compound Interest</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Compounding;

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
  },
  description: {
    marginLeft: 20,
    marginTop: 5,
    fontWeight: "400",
  },
  pointContainer: {
    marginTop: 20,
  },
  bulletpoint: {
    alignSelf: "center",
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 10,
    marginLeft: 170,
  },
  bulletpoint2: {
    alignSelf: "center",
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 10,
    marginRight: 170,
  },
  pointer: {
    borderRadius: 60 / 2,
    backgroundColor: "#65a4da",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  pointer2: {
    borderRadius: 60 / 2,
    backgroundColor: "#ff7648",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },

  pointerLine: {
    width: 30,
    height: 5,
    backgroundColor: "#65a4da",
    alignSelf: "center",
  },
  pointerLine2: {
    width: 30,
    height: 5,
    backgroundColor: "#ff7648",
    alignSelf: "center",
  },
  pointerSmall: {
    borderRadius: 30 / 2,
    backgroundColor: "#65a4da",
    width: 20,
    height: 20,
    alignSelf: "center",
  },
  pointerSmall2: {
    borderRadius: 30 / 2,
    backgroundColor: "#ff7648",
    width: 20,
    height: 20,
    alignSelf: "center",
  },
  pointerDetail: {
    alignSelf: "center",
    marginLeft: 15,
    width: 95,
  },
  pointerDetail2: {
    alignSelf: "center",
    marginRight: 15,
    width: 95,
  },
});
