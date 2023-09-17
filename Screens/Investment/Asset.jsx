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

const Asset = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={styles.heading}>Asset Allocation :</Text>
          <Text style={styles.description}>
            asset allocation are two closely related concepts that play
            important roles both in managing investment risk and in optimizing
            investment returns. Broadly speaking, diversification involves
            spreading your investment portfolio among a variety of investments,
            in hopes that subpar returns or losses in some may be offset by
            above average returns or gains in others.
          </Text>
        </View>
        <View style={styles.pointContainer}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://youtu.be/SrQTOhafE4A?si=h1p6_j_PSAQ5Bt1s"
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
                <Text>Asset Allocation Importance</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://youtu.be/SrQTOhafE4A?si=h1p6_j_PSAQ5Bt1s"
              );
            }}
          >
            <View style={styles.bulletpoint2}>
              <View style={styles.pointerDetail2}>
                <Text>Age-Based Asset Allocation</Text>
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
                "https://youtu.be/SrQTOhafE4A?si=h1p6_j_PSAQ5Bt1s"
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
                <Text>Asset Allocation Through Life-Cycle Funds</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://youtu.be/SrQTOhafE4A?si=h1p6_j_PSAQ5Bt1s"
              );
            }}
          >
            <View style={styles.bulletpoint2}>
              <View style={styles.pointerDetail2}>
                <Text>Diversification in Investing</Text>
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
                "https://youtu.be/SrQTOhafE4A?si=h1p6_j_PSAQ5Bt1s"
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
                <Text>Diversifying Across Asset Classes</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Asset;

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
