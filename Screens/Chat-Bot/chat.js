import React, { useState, useEffect, useCallback } from "react";
import { View, ScrollView, Text, Button, StyleSheet } from "react-native";
import {
  Bubble,
  GiftedChat,
  Send,
  InputToolbar,
  IMessage,
  SendProps,
  SystemMessage,
} from "react-native-gifted-chat";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log("test");
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 2,
        text: "Hello world",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
    // this.onSend = this.onSend(this);
  }, []);

  // const onSend = (messages = []) => {
  //   console.log("test2");
  //   this.setMessages((previousMessages) =>
  //     // GiftedChat.append(previousMessages, messages)
  //     console.log(messages)
  //   );
  // };

  onSend = (newMessage) => {
    console.log("test2");
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, newMessage),
    }));
  };

  const user = {
    _id: 1,
    name: "Developer",
  };

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{ marginBottom: 5, marginRight: 5 }}
            size={32}
            color="#2e64e5"
          />
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#2e64e5",
          },
        }}
        textStyle={{
          right: {
            color: "#fff",
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return <FontAwesome name="angle-double-down" size={22} color="#333" />;
  };

  const customtInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: "white",
          borderTopColor: "#E8E8E8",
          borderTopWidth: 1,
          padding: 8,
        }}
      />
    );
  };

  return (
    <GiftedChat
      messages={this.messages}
      onSend={this.onSend}
      //onSend={(messages) => this.onSend(messages)}
      user={user}
      renderBubble={renderBubble}
      renderInputToolbar={(props) => customtInputToolbar(props)}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

// import {
//   Button,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import React, { useState, useCallback, useEffect } from "react";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import APIs from "../../Components/API";
// import axios from "axios";
// import { GiftedChat } from "react-native-gifted-chat";

// const ChatBot = () => {
//   const [data, setData] = useState([]);
//   const baseURL = "https://jsonplaceholder.typicode.com";

//   const [advice, setAdvice] = useState("");

//   const getRandomId = (min, max) => {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
//   };

//   const getAdvice = () => {
//     axios
//       .get("http://api.adviceslip.com/advice/" + getRandomId(1, 200))
//       .then((response) => {
//         setAdvice(response.data.slip.advice);
//       });
//   };

//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     setMessages([
//       {
//         _id: 1,
//         text: "Hello developer",
//         createdAt: new Date(),
//         user: {
//           _id: 2,
//           name: "React Native",
//           avatar: "https://placeimg.com/140/140/any",
//         },
//       },
//     ]);
//   }, []);

//   const onSend = (messages = []) => {
//     setMessages((previousMessages) =>
//       GiftedChat.append(previousMessages, messages)
//     );
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <GiftedChat
//         messages={messages}
//         onSend={(messages) => onSend(messages)}
//         user={{
//           _id: 1,
//         }}
//       />
//     </View>
//   );
// };

//    <View style={styles.container}>
//           <View style={styles.container1}>
//             <View style={styles.botLayout}>
//               <Text style={styles.text}>How can we help you.</Text>
//             </View>
//           </View>
//           <View style={styles.container1}>
//             <View style={styles.userLayout}>
//               <Text style={styles.text}>User Text is shown here.</Text>
//             </View>
//             <View style={styles.userLayout}>
//               <Text style={styles.text}>User Text is shown here.</Text>
//             </View>
//           </View>
//           <View style={styles.container1}>
//           <View style={styles.botLayout}>
//             <Text style={styles.text}>{advice}</Text>
//           </View>
//         </View>
//         <View style={styles.input}>
//           <TextInput style={styles.loginBtn} placeholder="Type Your Querry" />
//           <TouchableOpacity onPress={getAdvice}>
//             <Ionicons
//               name="send-outline"
//               size={30}
//               style={{ alignItems: "flex-end" }}
//             />
//           </TouchableOpacity>
//         </View>
//         </View>

// export default ChatBot;

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 20,
//     paddingBottom: 10,
//   },
//   container1: {
//     marginTop: 20,
//   },
//   text: {
//     fontSize: 15,
//     fontWeight: "400",
//   },
//   input: {
//     marginTop: 60,
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   loginBtn: {
//     textAlign: "center",
//     width: "70%",
//     marginLeft: 40,
//     marginRight: 10,
//     height: 55,
//     borderWidth: 0.5,
//     borderRadius: 10,
//     padding: 8,
//     borderColor: "#ccd",
//   },
//   botLayout: {
//     borderWidth: 0.8,
//     padding: 10,
//     borderColor: "#ccd",
//     backgroundColor: "#ccd",
//     marginLeft: 6,
//     maxWidth: "50%",
//     marginTop: 3,
//     borderTopRightRadius: 5,
//     borderBottomRightRadius: 5,
//   },
//   userLayout: {
//     borderWidth: 0.8,
//     padding: 10,
//     borderColor: "#ccd",
//     backgroundColor: "#ccd",
//     marginLeft: 3,
//     maxWidth: "50%",
//     flexDirection: "row-reverse",
//     alignContent: "flex-end",
//     position: "relative",
//     left: 185,
//     marginTop: 3,
//     borderTopLeftRadius: 5,
//     borderBottomLeftRadius: 5,
//   },
// });
