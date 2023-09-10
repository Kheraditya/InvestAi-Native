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

import Account from "../../assets/Account.png";
import Privacy from "../../assets/Privacy.png";
import Help from "../../assets/activities.png";

const Activities = () => {
  return (
    <SafeAreaView>
      <View style={styles.containerMain}>
        <View>
          <Text>Activities</Text>
        </View>
        <View style={styles.containerSub}>
          <View style={styles.containerCommon}>
            <TouchableOpacity>
              <Image source={Account} style={styles.ImageStyle} />
              <Text>Account</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerCommon}>
            <TouchableOpacity>
              <Image source={Privacy} style={styles.ImageStyle} />
              <Text>Privacy</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerCommon}>
            <TouchableOpacity>
              <Image source={Help} style={styles.ImageStyle} />
              <Text>Help</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Activities;

const styles = StyleSheet.create({
  containerMain: {
    marginTop: 35,
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
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#F1F1F1",
  },
  containerCommon: {
    height: 130,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  ImageStyle: {
    height: 50,
    width: 50,

    backgroundColor: "#FFFFFF",
  },
});
