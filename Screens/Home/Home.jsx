import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";

// import Welcome from "./Welcome";

// import Features from "./KeyFeatures";

import React from "react";

import AlertModel from "../../Components/AlertCard/AlertModel/AlertModel";
import AlertCard from "../../Components/AlertCard/AlertCard";

const Home = ({ navigation }) => {
  const _handleNotifications = () => console.log("opened Notifications");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {/* <View style={styles.container}>
          <Welcome />
        </View>
        <View style={styles.container2}>
        
          <Features navigation={navigation} />
        </View> */}

        <View style={styles.container}>
          <AlertCard />
          <AlertCard />
          <AlertCard />
          <AlertCard />
          <AlertCard />
          <AlertCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
});
