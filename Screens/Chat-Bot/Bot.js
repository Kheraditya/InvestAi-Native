import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Appbar } from "react-native-paper";
import { Stack, useRouter } from "expo-router";
import React, { useState, useCallback, useEffect } from "react";
import ChatBot from "./ChatBot";
//import { useNavigation } from "@react-navigation/native";
import photo from "../../assets/Privacy.png";
import APIs from "../../Components/API";
import { GiftedChat } from "react-native-gifted-chat";

const Bot = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Image source={photo} style={styles.ImageStyle} />

          {/******************** Welcome *********************/}
          <View>
            <Text style={styles.WelcomeChat1}>Welcome to</Text>
            <Text style={styles.WelcomeChat2}>InvestAi</Text>
          </View>

          {/******************** Description *********************/}
          <View>
            <Text style={styles.DescChat1}>
              Start chatting with ChattyAi now.
            </Text>
            <Text style={styles.DescChat2}>You can ask me anything</Text>
          </View>

          {/* <View style={{ marginBottom: 60 }}>
            <TextInput style={styles.loginBtn} placeholder="Type Your Querry" />
            
          </View> */}

          <ChatBot />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bot;

const styles = StyleSheet.create({
  loginBtn: {
    textAlign: "center",
    marginTop: 80,
    marginLeft: 30,
    marginRight: 30,
    height: 55,
    borderWidth: 0.8,
    padding: 8,
    borderColor: "#ccd",
  },
  loginText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "400",
  },
  ImageStyle: {
    marginTop: 55,
    height: 100,
    width: 100,
    alignSelf: "center",
  },
  WelcomeChat1: {
    marginTop: 15,
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "300",
  },
  WelcomeChat2: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "300",
  },
  DescChat1: {
    alignSelf: "center",
    marginTop: 15,
    fontSize: 15,
    fontWeight: "200",
  },
  DescChat2: {
    alignSelf: "center",
    fontSize: 15,
    fontWeight: "200",
  },
});
