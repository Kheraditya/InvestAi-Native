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

const Strategies = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={styles.heading}>Investment Strategies :</Text>
          <Text style={styles.description}>
            Among the investment strategies that the beginning investor should
            understand fully are active versus passive investing, value versus
            growth investing, and income-oriented versus gains-oriented
            investing.
          </Text>
        </View>
        <View style={styles.pointContainer}>
          <TouchableOpacity>
            <View style={styles.bulletpoint}>
              <View style={styles.pointer}>
                <Text>01</Text>
              </View>
              <View style={styles.pointerLine}></View>
              <View style={styles.pointerSmall}>
                <Text></Text>
              </View>
              <View style={styles.pointerDetail}>
                <Text>Understanding Active Management</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.bulletpoint2}>
              <View style={styles.pointerDetail2}>
                <Text>What Is Passive Management</Text>
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

          <TouchableOpacity>
            <View style={styles.bulletpoint}>
              <View style={styles.pointer}>
                <Text>03</Text>
              </View>
              <View style={styles.pointerLine}></View>
              <View style={styles.pointerSmall}>
                <Text></Text>
              </View>
              <View style={styles.pointerDetail}>
                <Text>What Is Value Investing</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.bulletpoint2}>
              <View style={styles.pointerDetail2}>
                <Text>What Is Growth Investing</Text>
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

          <TouchableOpacity>
            <View style={styles.bulletpoint}>
              <View style={styles.pointer}>
                <Text>05</Text>
              </View>
              <View style={styles.pointerLine}></View>
              <View style={styles.pointerSmall}>
                <Text></Text>
              </View>
              <View style={styles.pointerDetail}>
                <Text>What Is Investment Income</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Strategies;

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
