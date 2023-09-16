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

const Management = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={styles.heading}>Cost Management :</Text>
          <Text style={styles.description}>
            A management fee is a charge levied by an investment manager for
            managing an investment fund. The management fee is intended to
            compensate the managers for their time and expertise for selecting
            stocks and managing the portfolio. It can also include other items
            such as investor relations (IR) expenses and the administration
            costs of the fund.
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
                <Text>Wide Disparity in Management Fees</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.bulletpoint2}>
              <View style={styles.pointerDetail2}>
                <Text>High Management Fees Worth the Cost?</Text>
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
                <Text>Hedge Fund Management Fees</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.bulletpoint2}>
              <View style={styles.pointerDetail2}>
                <Text>Avoid Overdraft Fees</Text>
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
                <Text>Fees for Closing a Bank Account?</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Management;

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
