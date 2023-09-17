import React, { useState, useEffect, useCallback } from "react";

import { View, Button } from "react-native"; // Remove unused imports

import {
  Bubble,
  GiftedChat,
  Send,
  InputToolbar,
  IMessage,
  SendProps,
} from "react-native-gifted-chat"; // Remove unused imports

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const ChatBot = () => {
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
  }, []);

  const onSend = useCallback((messages = []) => {
    console.log("test2");
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    console.log(messages);
  }, []);

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

  const customInputToolbar = (props) => {
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

  // Manually call onSend with a new message
  const manuallySendMessage = () => {
    const newMessage = {
      _id: String(Math.random()), // Generate a unique ID for the new message
      text: "This is a manually sent message",
      createdAt: new Date(),
      user: {
        _id: user._id,
        name: user.name,
        avatar: user.avatar,
      },
    };

    onSend([newMessage]);
  };

  return (
    <View>
      <Button title="Manually Send Message" onPress={manuallySendMessage} />
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={user}
        renderBubble={renderBubble}
        renderInputToolbar={(props) => customInputToolbar(props)}
        alwaysShowSend
        renderSend={renderSend}
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
      />
    </View>
  );
};

export default ChatBot;
