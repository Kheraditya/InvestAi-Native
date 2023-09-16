import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";

import React from "react";
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
        <Text style={styles.text}>Trending Now :</Text>
        <View style={{ marginTop: 30, marginLeft: 10, marginRight: 20 }}>
          <View>
            <AlertCard />
          </View>
          <View style={styles.container2}>
            <AlertCard />
          </View>
          <View>
            <AlertCard />
          </View>
          <View style={styles.container2}>
            <AlertCard />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 5,
    backgroundColor: "#65a4da",
    marginLeft: 10,
    height: 150,
    width: 250,
    marginTop: 10,
  },
  container2: {
    width: "100%",
    marginLeft: "48%",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 20,
  },
});
